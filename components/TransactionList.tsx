import getTransactions from '@/app/actions/getTransactions';
import { Transaction } from '@/types/Transaction';

async function TransactionList() {
  const { transactions, error } = await getTransactions();

  if (error) {
    return <p className='error'>{error}</p>;
  }

  return (
    <>
      <h3>History</h3>
      <ul className='list'>
        {transactions && transactions.map((t: Transaction) => <p>{t.text}</p>)}
      </ul>
    </>
  );
}

export default TransactionList;
