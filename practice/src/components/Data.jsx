// import { useEffect, useState, useRef } from "react";
// import axios from "axios";
// import { Wrapper } from "./Wrapper";
// export const Data = () => {
// useEffect(() => {
//     getData();
// },[])
// async function getData(){
//     const res=await axios.get("https://fakestoreapi.com/products")
//     console.log(res.data);
// }
// const [count, setCount] = useState(0);
// useEffect(() => {
//   document.title = `you have clicked ${count} times`;
// }, [count]);

// const getData = () => {
//   setCount((prev) => prev + 1);
// };
// return (
//   <div>
//     <button onClick={getData}> Add </button>
//   </div>
// );
// const inputEl = useRef(null);
// const onButtonClick = () => {
//   // `current` points to the mounted text input element
//   inputEl.current.focus();
// };

//   return (
//     <>
//       <Wrapper>
//         <input type="text" />
//         <button>Focus the input</button>
//       </Wrapper>
//     </>
//   );
// };

export const Home = () => {
  return (
    <div>
      <h2>Welcome to HOME Page</h2>
    </div>
  );
};
