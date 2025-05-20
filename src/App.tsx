import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeScreen from "./Components/HomeScreen/HomeScreen";
import Cart from "./Components/Cart/Cart";
import PaymentSuccess from "./Esewa/PaymentSuccess";
import PaymentFailure from "./Esewa/PaymentFailure";

const router = createBrowserRouter([
  { path: "/", element: <HomeScreen /> },
  { path: "/cart", element: <Cart /> },
  { path: "/payment-success", element: <PaymentSuccess /> },
  { path: "/payment-fail", element: <PaymentFailure /> },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
