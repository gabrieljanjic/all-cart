import { useEffect, useState } from "react";
import { useGlobalContext } from "./Context";

const url = "https://fakestoreapi.com/products";
const FetchingData = () => {
  const { products, setProducts, category, setCategory, loader, setLoader, singleProduct, setSingleProduct, existence, setExistence } = useGlobalContext();
  useEffect(() => {
    const fetchData = async () => {
      /*try catch*/
      setLoader(true);
      const response = await fetch(category ? `${url}/${category}` : url);
      console.log(response);
      const items = await response.json();
      console.log(items);
      setProducts(items);
      setLoader(false);
    };
    fetchData();
  }, [category]);
  return loader ? (
    <div className="loader"></div>
  ) : (
    <>
      {existence && (
        <section className="grid grid-cols-[repeat(auto-fill,minmax(19rem,1fr))] gap-1 justify-center w-full p-4 pt-8 h-fit">
          {products.map((item) => {
            const { id, title, price, description, category, image, rating } = item;
            return (
              <div
                key={id}
                className="w-full p-8 flex flex-col justify-center cursor-pointer transform transition-all duration-200  box-shadow rounded-lg"
                onClick={() => {
                  setSingleProduct(item);
                  setExistence(false);
                  setProducts([]);
                }}
              >
                <img src={image} className="w-full h-40 object-contain m-auto " />
                <h1 className="mb-2 whitespace-nowrap overflow-hidden text-ellipsis w-full">{title}</h1>
                <div className="flex flex-row justify-between">
                  <h5 className="font-semibold">{price}$</h5>
                  <h5>{rating.rate}⭐</h5>
                </div>
                <p>{category}</p>
              </div>
            );
          })}
        </section>
      )}

      {singleProduct.id && (
        <div className="flex  max-w-6xl gap-10  px-20 pt-10 h-fit">
          <img src={singleProduct.image} className="max-w-sm h-120" />
          <div className="flex flex-col justify-center">
            <h1 /*className="text-3xl font-semibold"*/>{singleProduct.title}</h1>
            <h3 className="text-4xl font-bold">{singleProduct.price}$</h3>
            <p className="text-xl text-red-500">{singleProduct.category}</p>
            <p className="text-xl ">{singleProduct.description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default FetchingData;
