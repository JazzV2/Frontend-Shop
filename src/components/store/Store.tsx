import { useEffect, useState } from "react";
import "./Store.scss";
import Header from "../../header/Header";
import Navbar from "../navbar/Navbar";
import { IProduct } from "../../types/GlobalTypes";
import httpModule from "../../helpers/http.module";
import Product from "./Product";

const Store = () => {
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

  const createProduct = () => {
    let productCards: JSX.Element[] = [];

    if (products.length === 0) return;

    products.forEach((product) => {
      productCards.push(
        <Product
          urlProduct={product.urlProduct}
          name={product.name}
          shortDescription={product.shortDescription}
          number={product.number}
          price={product.price}
          firstImage={product.firstImage}
          key={product.urlProduct}
        />
      );
    });

    return productCards;
  };

  return (
    <div>
      <Header />
      <Navbar />
      <div className="products">
        {loading ? (
          <h1>Loading</h1>
        ) : products.length === 0 ? (
          <h1>No Products</h1>
        ) : (
          createProduct()
        )}
      </div>
    </div>
  );
};

export default Store;
