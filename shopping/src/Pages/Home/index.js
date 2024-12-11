import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../../Actions/productActions";
import { getAllProducts } from "../../Api/Fetch";
import Card from "../../Components/Card";
import style from "./index.module.scss";
import Loading from "../../Components/Loader";
import Navbar from "../../Components/Navbar";
import SettingButton from "../../Components/Settings";

function Home() {
  const products = useSelector((state) => state?.products?.data);
  const [isLoading, setIsloading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsloading(true);
    getAllProducts("https://fakestoreapi.com/products")
      .then((data) => {
        dispatch(addProducts(data));
        setIsloading(false);
      })
      .catch((error) => {
        console.error("Error in useEffect:", error);
        setIsloading(false);
      });
  }, [dispatch]);

  if (isLoading || !products?.length) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <div className={style.mainContainer}>
        <SettingButton setIsloading={setIsloading} />
      </div>
      <div className={style.productContainer}>
        {products?.length &&
          products?.map((el) => {
            return <Card key={el.id} {...el} />;
          })}
      </div>
    </>
  );
}

export default Home;
