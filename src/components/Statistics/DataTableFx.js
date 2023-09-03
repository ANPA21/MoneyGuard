const calculateTotal = transactions => {
  const total = transactions.reduce(
    (total, transaction) => total + transaction.value,
    0
  );
  return total.toFixed(2);
};
export { calculateTotal };
