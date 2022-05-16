import { Customer } from "./Customer";

export interface Transfer {
    id: string;
    sender: Customer;
    receiver: Customer;
    amount: number;
    initiatedAt: string;
}