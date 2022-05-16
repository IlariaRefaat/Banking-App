import { Customer } from "./Customer";

export interface Transfer {
    sender: Customer;
    receiver: Customer;
    amount: number;
    initiatedAt: string;
}