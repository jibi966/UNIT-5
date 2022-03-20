import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";

export const ProductsDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [status, setStatus] = useState(true);
  useEffect(() => {
    axios
      .get(`http://localhost:3001/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        setStatus(false);
      });
  }, []);

  return (
    <>
      {status ? (
        <div
          style={{
            display: "flex",
            paddingTop: "50px",
            justifyContent: "center",
            textAlign: "left",
          }}
        >
          <img src={""} alt="" />
          <div className="productDetails" style={{ padding: "20px" }}>
            <div>
              <h2 className="productName">{product.name}</h2>
              <h5 className="productPrice">Price : {product.price}</h5>
            </div>
            <h5>Specifications : </h5>
            <div style={{ width: "700px", paddingLeft: "30px" }}>
              <p>{product.specification}</p>
            </div>
          </div>
        </div>
      ) : (
        <Navigate to={"/notfound"} />
      )}
    </>
  );
};
