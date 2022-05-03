import { useSelector, useDispatch } from "react-redux";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { sortedProduct } from "../redux/actions";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
export const All = () => {
  const dispacth = useDispatch();
  const data = useSelector((store) => store.allProducts);
  const handleSort = () => {
    dispacth(sortedProduct(data));
  };
  return (
    <div className="main-div">
      {/* <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {data.map((item) => (
          <ImageListItem key={item.id}>
            <img
              src={`${item.image}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList> */}
      <button onClick={handleSort}>SORT</button>
    </div>
  );
};
