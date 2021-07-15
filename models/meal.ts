export class Meal {
    id: string;
    title: string;
    price: number;
    description: string;
    imageUrl: string;
    category: "food" | "drinks" | "snacks" | "sauces"

    constructor( id: string, title: string, price: number, description: string, imageUrl: string, category: "food" | "drinks" | "snacks" | "sauces") {
        this.id = id
        this.title = title
        this.price = price
        this.description = description
        this.imageUrl = imageUrl
        this.category = category
    }
};
