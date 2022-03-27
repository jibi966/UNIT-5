import { Navbar } from "./Navbar";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./HomePage";
import { ProductsPage } from "./ProductsPage";
import { ProductsDetailsPage } from "./ProductsDetailsPage";
import { NotFoundPage } from "./NotFoundPage";
export const RoutesMain = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/products" element={<ProductsPage />} />
        <Route exact path="/products/:id" element={<ProductsDetailsPage />} />
        <Route exact path="/notfound" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
