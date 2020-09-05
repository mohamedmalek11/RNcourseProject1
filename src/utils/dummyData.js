export const dummyCategory = {
    title : "category",
    imageUrl: 'https://reactjs.org/logo-og.png',
};

export const dummyProductWithDiscount = {
    title : "Product Name",
    imageUrl: 'https://reactjs.org/logo-og.png',
    price : 100,
    discount: 0.3,
    desciption: "Very Nice Product From ABC etc.... "
};

export const dummyProduct = {
    title : "Product",
    imageUrl: 'https://reactjs.org/logo-og.png',
    price : 100,
};
export const dummycartItem = {
    product: dummyProductWithDiscount
};
export const dummyorder = {
    cartItems: [dummycartItem],
    cost: 150,
    status: 'Placed '
};