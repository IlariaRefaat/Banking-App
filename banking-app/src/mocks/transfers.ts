import { Transfer } from "../models/Transfer";
import { customer1, customer2, customer3, customer4, customer5 } from "./customers";
export const transfers: Transfer[] = [
    {
        id: "1",
        sender: customer1,
        receiver: customer2,
        amount: 500,
        initiatedAt: "2022-05-16T11:39:00"
    },
    {
        id: "2",
        sender: customer3,
        receiver: customer2,
        amount: 700,
        initiatedAt: "2022-04-22T11:39:00"
    },
    {
        id: "3",
        sender: customer2,
        receiver: customer5,
        amount: 5000,
        initiatedAt: "2021-05-16T11:39:00"
    },
    {
        id: "4",
        sender: customer4,
        receiver: customer3,
        amount: 1000,
        initiatedAt: "2022-02-16T12:39:00"
    },
    {
        id: "5",
        sender: customer5,
        receiver: customer1,
        amount: 5000,
        initiatedAt: "2021-03-16T11:39:00"
    }
]