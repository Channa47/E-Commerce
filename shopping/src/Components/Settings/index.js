import React, { useState } from "react";
import styles from "./index.module.scss";
import Checkbox from "../CheckBox";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../../Api/Fetch";
import { addProducts } from "../../Actions/productActions";
import Select from "../Select";

const categories = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

const SettingButton = ({ setIsloading }) => {
  const [show, setShow] = useState(false);
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");

  const dispatch = useDispatch();

  const update = (url) => {
    setIsloading(true);
    getAllProducts(url)
      .then((data) => {
        dispatch(addProducts(data));
        setIsloading(false);
      })
      .catch((error) => {
        console.error("Error in useEffect:", error);
        setIsloading(false);
      });
  };

  const handleSorting = (label) => {
    setSort((prevSort) => (prevSort === label ? "" : label)); // Deselect if clicked again
    let url = `https://fakestoreapi.com/products`;
    if (filter) {
      url = `https://fakestoreapi.com/products/category/${filter}`;
    }
    if (label !== sort) {
      url = `${url}?sort=${label === "ASE" ? "asc" : "desc "}`;
    }
    update(url);
  };

  const handleFileter = (category) => {
    setFilter(category);
    let url = `https://fakestoreapi.com/products`;
    if (sort) {
      url = `https://fakestoreapi.com/products/category/${category}?sort=${
        sort === "ASE" ? "asc" : "desc"
      }`;
    } else {
      url = `https://fakestoreapi.com/products/category/${category}`;
    }
    update(url);
  };

  const open = () => {
    if (show) {
      setShow(false);
      return;
    }
    setShow(true);
  };
  const close = () => {
    setShow(false);
  };

  return (
    <div className={styles.mainContainer}>
      <button className={styles.settingBtn} onClick={open}>
        <span className={`${styles.bar} ${styles.bar1}`}></span>
        <span className={`${styles.bar} ${styles.bar2}`}></span>
        <span className={`${styles.bar} ${styles.bar1}`}></span>
      </button>
      <div className={`${styles.container} ${show ? styles.open : ""}`}>
        <Checkbox
          label="ASE"
          checked={sort === "ASE"}
          onChange={handleSorting}
        />
        <Checkbox
          label="DSE"
          checked={sort === "DSE"}
          onChange={handleSorting}
        />
        <Select options={categories} value={filter} onChange={handleFileter} />
      </div>
    </div>
  );
};

export default SettingButton;
