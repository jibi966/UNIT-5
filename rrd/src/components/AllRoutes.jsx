import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { AllProducts } from "./AllProducts";
import { SingleProduct } from "./SingleProduct";
import { Error } from "./Error";
export const AllRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/all" element={<AllProducts />} />
      <Route exact path="/single/:id" element={<SingleProduct />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};
