import { useSelector } from "react-redux";

export const AllProducts = () => {
  const data = useSelector((e) => console.log(e));

  return <div>All products</div>;
};
