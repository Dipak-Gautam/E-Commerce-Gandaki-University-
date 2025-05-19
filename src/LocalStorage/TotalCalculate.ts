import type { ProductSchema } from "../Schema/data.schema";

const TotalCalculate = (cartData: ProductSchema[]): number => {
  const total = cartData.reduce((sum, item) => {
    // const itemTotal = item.price * (item.quantity ?? 1);
    const itemTotal = item.price;
    return sum + itemTotal;
  }, 0);

  return total;
};

export default TotalCalculate;
