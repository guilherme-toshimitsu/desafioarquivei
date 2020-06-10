const F_PROMOTION = 9;
const S_PROMOTION = 16;
const NO_PROMOTION = 24;

const objectReducer = (actions) => (state, action) => {
  const { type, ...args } = action;
  // check if actions has the type, if yes activate the function actions[type], otherwise mantain the state.
  return actions.hasOwnProperty(type) ? actions[type](state, args) : state;
};

const zeroOrHigher = (val1) => {
  return val1 > 0 ? val1 : 0;
};

const limitNumber = (lower, number, upper) => {
  if (number < lower) {
    return lower;
  }
  if (number > upper) {
    return upper;
  }
  return number;
};

const calculatoPromotion = (
  initialValue,
  tobePurchased,
  firstPromotionValue,
  secondPromotionValue
) => {
  let p1 = firstPromotionValue - initialValue;
  let p2 = secondPromotionValue - initialValue;

  let ammPurchasev1 = limitNumber(
    0,
    tobePurchased,
    limitNumber(0, p1, firstPromotionValue)
  );
  let ammPurchasev2 = limitNumber(
    0,
    tobePurchased - ammPurchasev1,
    limitNumber(0, p2, secondPromotionValue - firstPromotionValue)
  );
  let ammPurchasev3 = zeroOrHigher(
    tobePurchased - ammPurchasev1 - ammPurchasev2
  );

  return [ammPurchasev1, ammPurchasev2, ammPurchasev3];
};

const calculatePrice = (consults, consultsToBePurchased) => {
  let numberOfPurchases = calculatoPromotion(
    consults,
    consultsToBePurchased,
    1000,
    2000
  );

  console.log(numberOfPurchases);
  const price =
    numberOfPurchases[0] * F_PROMOTION +
    numberOfPurchases[1] * S_PROMOTION +
    numberOfPurchases[2] * NO_PROMOTION;

  console.log(price / 1000);
  return price / 1000;
};

export { objectReducer, calculatePrice };
