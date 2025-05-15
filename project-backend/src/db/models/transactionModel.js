import { Schema, model } from 'mongoose';
import { transactionList } from '../../constants/transactions.js';

const transactionSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    type: {
      type: String,
      enum: transactionList,
      required: true,
      default: transactionList[0],
    },
    amount: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    comment: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true },
);

export const Transaction = model('transactions', transactionSchema);
