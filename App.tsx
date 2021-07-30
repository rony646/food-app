import React from 'react';

import { StyleSheet, View, TouchableNativeFeedback } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { MaterialIcons, Ionicons, AntDesign } from '@expo/vector-icons';
import { ToastProvider } from 'react-native-toast-notifications';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import Home from './screens/Home';
import Favorites from './screens/Favorites';
import UserSettings from './screens/UserSettings';
import OrdersHistory from './screens/OrdersHistory';
import SearchScreen from './screens/SearchScreen';
import CartScreen from './screens/Cart';
import MealDetails from './screens/MealDetails/MealDetails';

const Tab = createMaterialBottomTabNavigator();

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return(
    <HomeStack.Navigator 
      initialRouteName="home"
      mode="card"
    >
        <HomeStack.Screen 
          name="home" 
          component={Home}
          options={({navigation}) => ({
            headerTransparent: true,
            headerStyle: {
              elevation: 0,
            },
            headerTitle:"",
            headerRight: () => (
              <View style={styles.headerRightContainer}>
              <TouchableNativeFeedback onPress={() => navigation.navigate("cart")}>
                  <View style={styles.headerIconContainer}>
                      <AntDesign name="shoppingcart" size={34} color="#ADADAF" />
                  </View>
              </TouchableNativeFeedback>
              </View>
            ),
          })}
        />

        <HomeStack.Screen 
          name="search" 
          component={SearchScreen}
          options={{
            headerStyle: {
              backgroundColor: "#efeeee39",
              elevation: 0,
            },
            headerTitle:"",
            headerBackImage: () => <Ionicons name="chevron-back" size={24} color="black" /> ,
            cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS
          }}
          
        />

        <HomeStack.Screen 
          name="cart" 
          component={CartScreen}
          options={{
            headerStyle: {
              backgroundColor: "#efeeee39",
              elevation: 0,
            },
            headerTitle:"",
            headerBackImage: () => <Ionicons name="chevron-back" size={24} color="black" />,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
          }}
        />

        <HomeStack.Screen
          name="details"
          component={MealDetails}
          options={{
            headerStyle: {
              backgroundColor: "#efeeee39",
              elevation: 0,
            },
            headerTitle:"",
            headerBackImage: () => <Ionicons name="chevron-back" size={24} color="black" />,
            cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid
          }}
        />

    </HomeStack.Navigator>
  )
}

export default function App() {

  return (
    <ToastProvider>
        <Provider store={store}>
          <NavigationContainer>
              <Tab.Navigator
                initialRouteName="home"
                activeColor="#efeeee88"
                screenOptions={{
                  tabBarLabel: "teste"
                }}
                
                barStyle={styles.tabBarStyle}
                sceneAnimationEnabled
              >
                  <Tab.Screen 
                    
                      name="Home" 
                      component={HomeStackScreen}
                      options={{
                        tabBarLabel: "",
                        tabBarIcon: ({focused}) => (
                          <>
                            {focused ? 
                                <Ionicons name="home" size={24} color="#FA4A0C"/> : 
                                <Ionicons name="home-outline" size={24} color="#ADADAF" />
                              }
                          </>
                        )
                      }}
                  />
                  <Tab.Screen 
                      name="Favorites" 
                      component={Favorites}
                      options={{
                        tabBarLabel: "",
                        tabBarIcon: ({focused}) => (
                          <>
                            {focused ? 
                                <MaterialIcons name="favorite" size={24} color="#FA4A0C"/> : 
                                <MaterialIcons name="favorite-border" size={24} color="#ADADAF" />
                              }
                          </>
                        )
                      }}
                  />
                  <Tab.Screen
                      name="User Settings" 
                      component={UserSettings}
                      options={{

                        tabBarLabel: "",
                        tabBarIcon: ({focused}) => (
                          <>
                              {focused ? 
                                <MaterialIcons name="person" size={24} color="#FA4A0C" style={{borderRadius: 150}}/> : 
                                <MaterialIcons name="person-outline" size={24} color="#ADADAF" style={{borderRadius: 150}}/>
                              }
                          </>
                        )
                      }}
                  />
                  <Tab.Screen 
                      name="Orders History" 
                      component={OrdersHistory}
                      options={{
                        tabBarLabel: "",
                        tabBarIcon: ({focused}) => (
                          <MaterialIcons name="history" size={24} color={focused ? "#FA4A0C" : "#ADADAF"}/>
                        )
                      }} 
                  />
              </Tab.Navigator>
          </NavigationContainer>
        </Provider>
    </ToastProvider>
  );
}


const styles = StyleSheet.create({
    headerRightContainer: {
      overflow: 'hidden', 
      borderRadius: 50,
      marginRight: 30
    },
    headerIconContainer: {
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center",
      height: 50, 
      width: 50
    },
    tabBarStyle: {
      backgroundColor: "#efeeee88",
      borderColor: "#efeeeeb0",
      borderWidth: 0,
      paddingBottom: 0,
      elevation: 0,
    }
});
