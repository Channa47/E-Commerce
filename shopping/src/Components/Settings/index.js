import React, { useState } from "react";
import styles from "./index.module.scss";
import Checkbox from "../CheckBox";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../../Api/Fetch";
import { addProducts } from "../../Actions/productActions";

const SettingButton = ({ setIsloading }) => {
  const [show, setShow] = useState(false);
  const [sort, setSort] = useState("");

  const dispatch = useDispatch();

  const handleSorting = (label) => {
    setSort((prevSort) => (prevSort === label ? "" : label)); // Deselect if clicked again
    getAllProducts(
      `https://fakestoreapi.com/products?sort=${
        label === "ASE" ? "aecs" : "desc "
      }`
    )
      .then((data) => {
        dispatch(addProducts(data));
      })
      .catch((error) => {
        console.error("Error in useEffect:", error);
      });
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
      </div>
    </div>
  );
};

export default SettingButton;
