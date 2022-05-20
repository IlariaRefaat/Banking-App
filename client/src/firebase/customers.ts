import { getDatabase, ref, onValue } from "firebase/database"
import { Customer } from "../models/Customer";

export type CustomersUpdateCallback = (data: Customer[]) => void

export const onCustomersUpdate = (callback: CustomersUpdateCallback) => {
    const db = getDatabase();
    const customersRef = ref(db, "customers");
    onValue(customersRef, (snapshot) => {
        const data = snapshot.val();
        callback(data)
    })
}