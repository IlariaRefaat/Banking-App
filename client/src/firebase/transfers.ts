import { ExecOptionsWithStringEncoding } from "child_process";
import { getDatabase, ref, onValue } from "firebase/database"
import { Transfer } from "../models/Transfer";
import { DEFAULT_CUSTOMER, getCustomer } from "./customers";

export type TransfersUpdateCallback = (data: Transfer[]) => void

export const onTransferUpdate = (callback: TransfersUpdateCallback) => {
    const db = getDatabase();
    const transferRef = ref(db, "transfers");
    onValue(transferRef, async (snapshot) => {
        const transfers: Record<string, Transfer> = snapshot.val();

        for (const transfer of Object.values(transfers)) {
            const receiverId = transfer.receiver as unknown as string;
            const receiver = await getCustomer(receiverId);
            transfer.receiver = receiver || DEFAULT_CUSTOMER;

            const senderId = transfer.sender as unknown as string;
            const sender = await getCustomer(senderId);
            transfer.sender = sender || DEFAULT_CUSTOMER;
        }
        callback(Object.values(transfers))
    })
}