import CategoryMenu from "../NavBar/CategoryMenu";
import NabBar from "../NavBar/NabBar";
import Product from "../ProductPage/Product";
import HeroImage from "./Components/HeroImage";

const HomeScreen = () => {
  return (
    <div>
      <NabBar />
      <HeroImage />
      <CategoryMenu />
      <Product />
    </div>
  );
};

export default HomeScreen;
