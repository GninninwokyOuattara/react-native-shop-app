import { CartItems } from "../types";

class Order {
    id: string;
    items: CartItems;
    totalAmount: number;
    date: Date;
    constructor(id: string, items: CartItems, totalAmount: number, date: Date) {
        this.id = id;
        this.items = items;
        this.totalAmount = totalAmount;
        this.date = date;
    }
}

export default Order;
