import { CartItems } from "../types";
import dateFormat from "dateformat";

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

    getReadableDate(d: Date) {
        return dateFormat(d, "mmmm dS yyyy, h:MM");
    }
}

export default Order;
