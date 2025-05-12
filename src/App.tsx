import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeScreen from "./Components/HomeScreen/HomeScreen";
import Cart from "./Components/Cart/Cart";

const router = createBrowserRouter([
  { path: "/", element: <HomeScreen /> },
  { path: "/cart", element: <Cart /> },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
