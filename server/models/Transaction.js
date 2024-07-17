import { Schema, model } from "mongoose"


//Credit: money goes come in
//debit: money goes out
const transactionSchema = new Schema({
    amount: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        default: "others",

    },
    type: {
        type: String,
        enum:["debit","credit"],
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    }
}, {
    timestamps: true,
});

const Transaction = model("Transaction", transactionSchema);
export default Transaction;
