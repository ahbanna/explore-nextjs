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

import Image from "next/image";
// Relative path
// import strawberryImg from "../../assests/images/strawberry.jpg";
// Absolute path
import strawberryImg from "@/assests/images/strawberry.jpg";

export const metadata = {
  title: "Products Page",
  description: "Here shows all the products of the store",
  openGraph: {
    title: "Blog",
  },
};

async function getData() {
  let res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  return data["products"];
}

const Products = async () => {
  let items = await getData();
  return (
    <div>
      <h2 className="text-3xl text-center">
        Image showing using Next.js Image component
      </h2>
      <Image
        src="https://cdn.pixabay.com/photo/2021/07/08/03/55/mount-everest-6395759_1280.jpg"
        alt="everest image"
        height="640"
        width="960"
        className="mx-auto"
      ></Image>
      <h2 className="text-3xl text-center">Image showing from local folder</h2>
      <Image
        src={strawberryImg}
        alt="strawberry"
        height="400"
        width="400"
        className="mx-auto"
      ></Image>
      <br />
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
