import CategoryMenu from "../NavBar/CategoryMenu";
import NabBar from "../NavBar/NabBar";
import HeroImage from "./Components/HeroImage";

const HomeScreen = () => {
  return (
    <div>
      <NabBar />
      <HeroImage />
      <CategoryMenu />
    </div>
  );
};

export default HomeScreen;
