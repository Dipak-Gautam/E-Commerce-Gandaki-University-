const getItemForCart = () => {
  let temp = localStorage.getItem("cart");

  if (temp == null) return [];
  return JSON.parse(temp);
};
export default getItemForCart;
