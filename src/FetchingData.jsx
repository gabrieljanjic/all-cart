import { useEffect, useState } from "react";
import { useGlobalContext } from "./Context";

const url = "https://fakestoreapi.com/products";
const FetchingData = () => {
  const { products, setProducts, category, setCategory, loader, setLoader, singleProduct, setSingleProduct, existence, setExistence, cartVisibility, setCartVisibility, cartItems, setCartItems } =
    useGlobalContext();
  useEffect(() => {
    const fetchData = async () => {
      /*try catch*/
      setLoader(true);
      const response = await fetch(category ? `${url}/${category}` : url);
      const items = await response.json();
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
        <div className="grid grid-cols-[30rem_1fr_20rem] justify-center  w-fit px-20 py-10 h-fit gap-6">
          <img src={singleProduct.image} className=" h-120" />
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-semibold">{singleProduct.title}</h1>
            <h3 className="text-4xl font-bold">{singleProduct.price}$</h3>
            <p className="text-xl text-red-500">{singleProduct.category}</p>
            <p className="text-xl ">{singleProduct.description}</p>
          </div>
          <div className="flex flex-col self-center border-1 p-4 border-gray-200 ml-6">
            <div className="flex flex-row justify-between">
              <p className="font-semibold text-lg">Sold by</p>
              <p className=" text-lg">AllCart d.o.o</p>
            </div>
            <div className="flex flex-row justify-between ">
              <p className="font-semibold text-lg">Shipping from</p>
              <p className=" text-lg">United states</p>
            </div>
            <div className="w-full h-0.5 bg-gray-200 my-2"></div>

            <p className="font-semibold text-lg">Free shipping</p>
            <p className=" text-lg">
              Delivery:
              <span className="font-semibold text-lg">
                {new Date(Date.now() + 8 * 86400000).toLocaleDateString("en-US", { month: "long", day: "2-digit" })} -
                {new Date(Date.now() + 11 * 86400000).toLocaleDateString("en-US", { day: "2-digit" })}
              </span>
            </p>
            <div className="w-full h-0.5 bg-gray-200 my-2"></div>
            <p className="font-semibold text-lg">Free returns within 90 days</p>
            <div className="w-full h-0.5 bg-gray-200 my-2"></div>

            <p className="font-semibold text-lg">Security & Privacy</p>
            <p className="text-xs whitespace-nowrap overflow-hidden text-ellipsis mb-4">We protect your privacy and keep your personal details safe and secure.</p>
            <button
              className="w-full bg-red-700 text-white p-2 text-xl font-bold cursor-pointer"
              onClick={() => {
                setCartItems([...cartItems, { ...singleProduct, quantity: 1 /*poslje dodat dinamicki*/ }]);
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      )}
      {cartVisibility && (
        <section className="flex flex-col">
          {cartItems.map((item) => {
            console.log(item);
            return (
              <div className="flex flex-row justify-center items-center gap-4 p-6" key={item.id}>
                <img src={item.image} className="w-40" />
                <div className="flex flex-col">
                  <h1 className="text-xl">{item.title}</h1>
                  <p className="text-2xl">{item.price}$</p>
                  <p className="text-base">{item.description}</p>
                  <p className="text-lg">Quantity: {item.quantity}</p>
                </div>
              </div>
            );
          })}
        </section>
      )}
    </>
  );
};

export default FetchingData;
