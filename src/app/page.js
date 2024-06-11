import Counter from "@/components/Counter/Counter";
import Image from "next/image";
import style from "./home.module.css";

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/shoes", {
    next: {
      revalidate: 5,
    },
  });
  const data = await res.json();
  return (
    <div>
      <h2 className="text-6xl text-center">This is home page</h2>
      <Counter></Counter>
      <h2 className="text-center text-4xl text-green-500">Shoes Collection</h2>
      <div className={style.allShoes}>
        {data.map((item) => (
          <div key={item.id} className="card bg-base-100 shadow-xl">
            <figure>
              <Image
                src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Shoes"
                height="441"
                width="662"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {item.name}
                <div className="badge badge-secondary">${item.price}</div>
              </h2>
              <div>
                <button className="btn btn-outline btn-info mr-2">
                  Buy Now
                </button>
                <button className="btn btn-outline btn-succes">Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
