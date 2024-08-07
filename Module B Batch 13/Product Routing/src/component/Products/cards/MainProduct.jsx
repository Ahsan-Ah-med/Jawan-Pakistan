import React from "react";
import { useLocation } from "react-router-dom";
import Slider from "../../Slider/Slider";
import styles from "./MainProduct.module.css";

const MainProduct = () => {
  const loacation = useLocation();
  const data = loacation?.state;
  //   console.log(loacation?.state);
  return (
    <>
      <div className={styles.main_product}>
        <Slider image={data?.images?.nodes} />
        <div className={styles.details}>
          <div className={styles.title}>{data?.title}</div>
          <div className={styles.des}>{data?.description}</div>
          <div className={styles.variants}>
            {data?.variants?.nodes &&
              data?.variants?.nodes.map((e, i) => {
                return (
                  <button
                    key={i}
                    className={styles.btn}
                    onClick={() => alert(e.id)}
                  >
                    {e.title}
                  </button>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainProduct;
