'use client';
import { addTransaction } from '@/app/actions/addTransaction';

function AddTransaction() {
  const clientAction = async (formData: FormData) => {
    const { data, error } = await addTransaction(formData);

    if (error) {
      alert(error);
    } else {
      alert('Transaction Added');
      console.log(data);
    }
  };

  return (
    <>
      <h3>Add Transaction</h3>
      <form action={clientAction}>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input type='text' id='text' name='text' />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br /> (negative - expense, positive - income)
          </label>
          <input
            type='number'
            name='amount'
            id='amount'
            placeholder='Enter amount...'
            step='0.01'
          />
          <button className='btn'>Add transaction</button>
        </div>
      </form>
    </>
  );
}

export default AddTransaction;
