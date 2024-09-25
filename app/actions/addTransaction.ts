'use server';
import { auth } from '@clerk/nextjs/server';

interface TransactionData {
  text: string;
  amount: number;
}

interface TransactionResult {
  data?: TransactionData;
  error?: string;
}

export async function addTransaction(
  formData: FormData
): Promise<TransactionResult> {
  const textValue = formData.get('text');
  const amountValue = formData.get('amount');

  // Get logged in user
  const { userId } = auth();

  // Check for user
  if (!userId) {
    return { error: 'User not found' };
  }

  if (!textValue || textValue === '' || !amountValue) {
    return { error: 'Text or amount is missing' };
  }

  const text: string = textValue.toString();
  const amount: number = parseFloat(amountValue.toString());

  const transactionData: TransactionData = {
    text,
    amount,
  };

  return { data: transactionData };
}
