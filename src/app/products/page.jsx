// --------- Client Side Rendering -----------------

// "use client";
// import React, { useEffect, useState } from "react";

// const Products = () => {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     (async () => {
//       let res = await fetch("https://dummyjson.com/products");
//       const data = await res.json();
//       setData(data["products"]);
//     })();
//   }, []);
//   return (
//     <div>
//       <h2>This is products page</h2>
//       {data.map((item, index) => {
//         return (
//           <div key={index}>
//             <h2>{item.title}</h2>
//             <p>{item.price}</p>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Products;

// --------- Server Side Rendering -----------------

async function getData() {
  let res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  return data["products"];
}

const Products = async () => {
  let items = await getData();
  return (
    <div>
      <h2>This is products page</h2>
      {items.map((item, index) => {
        return (
          <div key={index}>
            <h2>{item.title}</h2>
            <p>{item.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
