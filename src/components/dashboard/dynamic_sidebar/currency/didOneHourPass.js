export function didOneHourPass() {
  const savedCurrencyData = localStorage.getItem('persist:currency');
  const savedCurrencyObj = JSON.parse(savedCurrencyData);

  if (savedCurrencyObj) {
    const savedTime = Date.parse(savedCurrencyObj.fetchingTime);
    const currentTime = new Date();
    const timeDifference = currentTime - savedTime;
    const oneHourInMilliseconds = 60 * 60 * 1000;
    return timeDifference >= oneHourInMilliseconds;
  }

  return false;
}
