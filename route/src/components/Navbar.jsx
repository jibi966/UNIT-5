import { Link } from "react-router-dom";
const links = [
  // Fix this links array, it's an array of objects {to: "", title: ""}
  {
    to: "/",
    title: "Home Page",
  },
  {
    to: "/products",
    title: "Product Page",
  },
];

export const Navbar = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {links.map((el) => {
          return (
            <Link key={el.to} style={{ padding: "10px" }} to={el.to}>
              {el.title}
            </Link>
          );
        })}
      </div>
    </>
  );
};
