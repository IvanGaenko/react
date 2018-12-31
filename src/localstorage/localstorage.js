export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('Cart');
    const serializedMind = localStorage.getItem('Currency');
    if (serializedState === null) {
      return undefined;
    }
    const storeOne = {};
    storeOne.Cart =  JSON.parse(serializedState);
    storeOne.Currency = JSON.parse(serializedMind);

    return storeOne;
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state, mind) => {
  try {
    const serializedState = JSON.stringify(state);
    const serializedMind = JSON.stringify(mind);
    localStorage.setItem('Cart', serializedState);
    localStorage.setItem('Currency', serializedMind);
  } catch {
    //ignore write errors
  }
};
