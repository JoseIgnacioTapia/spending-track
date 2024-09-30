import AddTransaction from '@/components/AddTransaction';
import Balance from '@/components/Balance';
import Guest from '@/components/Guest';
import IncomeExpense from '@/components/IncomeExpense';
import TransactionList from '@/components/TransactionList';
import { currentUser } from '@clerk/nextjs/server';

async function HomePage() {
  const user = await currentUser();

  if (!user) {
    return <Guest />;
  }

  return (
    <main className='container mx-auto px-4'>
      <h2>Welcome, {user.firstName}</h2>
      <div className='sections'>
        <div>
          <Balance />
          <IncomeExpense />
          <AddTransaction />
        </div>

        <div>
          <TransactionList />
        </div>
      </div>
    </main>
  );
}

export default HomePage;
