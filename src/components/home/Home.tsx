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

  return (
    <div>
      <header>
        <h1>Electronic Store</h1>
      </header>
      <Navbar />
      <div className="buttons">
        <button>Go to store</button>
        <button>Log up/in</button>
      </div>
      <div className="Ad">
        {loading ? (<h1>Loading</h1>) : products.length === 0 ? (<h1>Nothing</h1>) : (<ProductAd urlProduct={products[0].urlProduct} name={products[0].name} shortDescription={products[0].shortDescription} price={products[0].price} number={products[0].number} firstImage={products[0].firstImage} />)}
      </div>
    </div>
  );
};

export default Home;
