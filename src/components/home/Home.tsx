import { useEffect, useState } from "react";
import "./Home.scss";
import Navbar from "../navbar/Navbar";
import ProductAd from "./ProductAd";
import { IProduct } from "../../types/GlobalTypes";
import httpModule from "../../helpers/http.module";

const Home = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    httpModule
      .get<IProduct[]>("/Product/Get")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        alert("Error");
        console.log(error);
        setLoading(false);
      });
  }, []);

  const createAd = (data: IProduct[]) => {
    let componentList = [];
    let lengthOfList = data.length;
    let numberToCreate = 3;

    if (lengthOfList < numberToCreate) numberToCreate = lengthOfList;

    for (let i = 0; i < numberToCreate; i++) {
      componentList.push(
        <ProductAd
          urlProduct={data[i].urlProduct}
          name={data[i].name}
          shortDescription={data[i].shortDescription}
          price={data[i].price}
          number={data[i].number}
          firstImage={data[i].firstImage}
          key={i}
        />
      );
    }

    return componentList;
  };

  return (
    <div>
      <header>
        <h1>Electronic Store</h1>
      </header>
      <Navbar />
      <div className="contener">
        <p>Welcome to our store. Here you can buy any RTV or AGD item.</p>
        <div className="buttons">
          <button className="left">Go to store</button>
          <h1>or</h1>
          <button className="right">Log up/in</button>
        </div>
        <div className="offers">
          <h1>Today's Offers</h1>
          <div className="ad">
            {loading ? (
              <h1>Loading</h1>
            ) : products.length === 0 ? (
              <h1>Nothing</h1>
            ) : (
              createAd(products)
            )}
          </div>
        </div>
      </div>
      <footer>Footer</footer>
    </div>
  );
};

export default Home;
