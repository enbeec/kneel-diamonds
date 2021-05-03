// QUESTION: style.style vs style.name
const database = {
  orderBuilder: {
    id: 0,
    metalId: 0,
    sizeId: 0,
    styleId: 0,
  },
  styles: [
    { id: 1, style: "Classic", price: 500 },
    { id: 2, style: "Modern", price: 710 },
    { id: 3, style: "Vintage", price: 965 },
  ],
  sizes: [
    { id: 1, carets: 0.5, price: 405 },
    { id: 2, carets: 0.75, price: 782 },
    { id: 3, carets: 1, price: 1470 },
    { id: 4, carets: 1.5, price: 1997 },
    { id: 5, carets: 2, price: 3638 },
  ],
  metals: [
    { id: 1, metal: "Sterling Silver", price: 12.42 },
    { id: 2, metal: "14K Gold", price: 736.4 },
    { id: 3, metal: "24K Gold", price: 1258.9 },
    { id: 4, metal: "Platinum", price: 795.45 },
    { id: 5, metal: "Palladium", price: 1241.0 },
  ],
  customOrders: [
    {
      id: 1,
      metalId: 3,
      sizeId: 2,
      styleId: 3,
      timestamp: 1614659931693,
    },
  ],
};

// SETTERS
export const setMetal = (id) => {
  database.orderBuilder.metalId = id;
};
export const setStyle = (id) => {
  database.orderBuilder.styleId = id;
};
export const setSize = (id) => {
  database.orderBuilder.sizeId = id;
};

export const addCustomOrder = () => {
  const newOrder = { ...database.orderBuilder };
  // TODO this is a naive bit of validation
  if (
    newOrder.metalId === 0 ||
    newOrder.sizeId === 0 ||
    newOrder.styleId === 0
  ) {
    window.alert("Can't add an empty order!");
    return;
  }
  newOrder.id = [...database.customOrders].pop().id + 1;
  newOrder.timestamp = Date.now(1587406328000);
  database.customOrders.push(newOrder);
  database.orderBuilder = {
    id: 0,
    metalId: 0,
    sizeId: 0,
    styleId: 0,
  };
  document.dispatchEvent(new CustomEvent("stateChanged"));
};

// GETTERS
export const getMetals = () => {
  return [...database.metals];
};
// implicit return -- works exact same as getMetals
export const getOrders = () => [...database.customOrders];
export const getSizes = () => [...database.sizes];
export const getStyles = () => [...database.styles];
