import { calculateTotal } from './DataTableFx';

export const DataTable = () => {
  const data = [
    {
      _id: 'transaction_id_1',
      transactionType: 'expense',
      category: 'Products',
      value: 50,
      date: new Date(2022, 2, 15), // March 15, 2022
    },
    {
      _id: 'transaction_id_2',
      transactionType: 'income',
      value: 100,
      date: new Date(2022, 1, 5), // February 5, 2022
    },
    {
      _id: 'transaction_id_3',
      transactionType: 'expense',
      category: 'Car',
      value: 1000,
      date: new Date(2022, 0, 20), // January 20, 2022
    },
    {
      _id: 'transaction_id_4',
      transactionType: 'expense',
      category: 'Main Expenses',
      value: 80,
      date: new Date(2022, 2, 3), // March 3, 2022
    },
    {
      _id: 'transaction_id_5',
      transactionType: 'income',
      value: 500,
      date: new Date(2022, 2, 8), // March 8, 2022
    },
    {
      _id: 'transaction_id_6',
      transactionType: 'expense',
      category: 'Education',
      value: 150,
      date: new Date(2022, 2, 10), // March 10, 2022
    },
    {
      _id: 'transaction_id_7',
      transactionType: 'income',
      value: 300,
      date: new Date(2022, 0, 25), // January 25, 2022
    },
    {
      _id: 'transaction_id_8',
      transactionType: 'expense',
      category: 'Entertainment',
      value: 50,
      date: new Date(2022, 1, 7), // February 7, 2022
    },
    {
      _id: 'transaction_id_9',
      transactionType: 'expense',
      category: 'Self care',
      value: 75,
      date: new Date(2022, 0, 12), // January 12, 2022
    },
    {
      _id: 'transaction_id_10',
      transactionType: 'income',
      value: 200,
      date: new Date(2022, 1, 15), // February 15, 2022
    },
    {
      _id: 'transaction_id_11',
      transactionType: 'expense',
      category: 'Leisure',
      value: 40,
      date: new Date(2022, 3, 2), // April 2, 2022
    },
    {
      _id: 'transaction_id_12',
      transactionType: 'expense',
      category: 'Other expenses',
      value: 80,
      date: new Date(2022, 3, 18), // April 18, 2022
    },
    {
      _id: 'transaction_id_13',
      transactionType: 'income',
      value: 150,
      date: new Date(2022, 4, 5), // May 5, 2022
    },
    {
      _id: 'transaction_id_14',
      transactionType: 'expense',
      category: 'Education',
      value: 200,
      date: new Date(2022, 4, 20), // May 20, 2022
    },
    {
      _id: 'transaction_id_15',
      transactionType: 'expense',
      category: 'Household products',
      value: 30,
      date: new Date(2022, 5, 7), // June 7, 2022
    },
  ];
  const expenses = data.filter(tr => tr.transactionType === 'expense');
  const income = data.filter(tr => tr.transactionType === 'income');

  const uniqueCategories = Array.from(
    new Set(expenses.map(item => item.category))
  );
  //uniqueCategories can be fetched from backend transactions/getCategories
  const categoryExpenses = uniqueCategories.map(category => ({
    name: category,
    totalExpenses: calculateTotal(
      expenses.filter(item => item.category === category)
    ),
  }));

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Category</th>
          <th>Sum</th>
        </tr>
      </thead>
      <tbody>
        {categoryExpenses.map(category => (
          <tr key={category.name}>
            <td>{category.name}</td>
            <td>{category.totalExpenses}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Expenses</td>
          <td>{calculateTotal(expenses)}</td>
        </tr>
        <tr>
          <td>Income</td>
          <td>{calculateTotal(income)}</td>
        </tr>
      </tfoot>
    </table>
  );
};
