import getUserBalance from '@/app/actions/getUserBalance';

async function Balance() {
  const { balance } = await getUserBalance();

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${balance}</h1>
    </>
  );
}

export default Balance;
