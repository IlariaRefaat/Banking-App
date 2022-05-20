import { getDatabase, ref, onValue, get, child } from "firebase/database"
import { Customer } from "../models/Customer";

export type CustomersUpdateCallback = (data: Customer[]) => void

export const DEFAULT_CUSTOMER: Customer = {
    id: "default-1",
    name: "Deleted Customer",
    email: "test@example.com",
    currentBalance: 0
}
export const onCustomersUpdate = (callback: CustomersUpdateCallback) => {
    const db = getDatabase();
    const customersRef = ref(db, "customers");
    onValue(customersRef, (snapshot) => {
        const data = snapshot.val();
        callback(Object.values(data))
    })
}

export const getCustomer = async (id: string): Promise<Customer | null> => {
    const dbRef = ref(getDatabase());
    const snapshot = await get(child(dbRef, `customers/${id}`));
    if (snapshot.exists()) {
        return snapshot.val();
    } else {
        return null;
    }
}