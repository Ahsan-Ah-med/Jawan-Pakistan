import React from "react";
import Styles from "./CardStyles.module.css";
import { NavLink, useNavigate } from "react-router-dom";

const Card = ({ title, price, image, mainlink, data }) => {
  const navigate = useNavigate();
  // console.log(data);
  const handleNav = () => {
    navigate(mainlink, { state: data });
  };
  return (
    <div className={Styles.card} onClick={handleNav}>
      {/* <NavLink to={mainlink}>goto</NavLink> */}
      <div className={Styles.card__img}>
        {image ? (
          <img src={image} />
        ) : (
          <svg
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            viewBox="0 0 128 128"
          >
            <rect
              y="24.7"
              x="13.1"
              width="101.2"
              transform="matrix(0.9761 0.2175 -0.2175 0.9761 15.4391 -12.3278)"
              height="78.6"
              className={Styles.st1}
            ></rect>
            <rect
              y="24.7"
              x="13.1"
              width="101.2"
              transform="matrix(0.9761 0.2175 -0.2175 0.9761 15.4391 -12.3278)"
              height="78.6"
              className={Styles.st53}
            ></rect>
            <polygon
              points="116,62 116,35.4 38.1,18 22.1,18 5.8,91.3 76.2,107 106,107"
              className={Styles.st16}
            ></polygon>
            <polygon
              points="97.2,23 10,23 10,102 111,102 111,36.8"
              className={Styles.st1}
            ></polygon>
            <polygon
              points="97.2,23 10,23 10,102 111,102 111,36.8"
              className={Styles.st53}
            ></polygon>
            <g>
              <rect
                y="34"
                x="20"
                width="80"
                height="58"
                className={Styles.st7}
              ></rect>
              <g>
                <polygon
                  points="100.2,92 73.1,44.2 51.2,75.5 40,58.7 20.2,92 39.7,92"
                  className={Styles.st9}
                ></polygon>
                <circle r="11" cy="52" cx="57" className={Styles.st18}></circle>
                <polygon
                  points="40,58.5 31.6,72.6 34.6,78.2 37.9,75.2 43.5,79.9 47,78.2 51,75.2"
                  className={Styles.st1}
                ></polygon>
                <path
                  d="M57.7,66c0,0,4.1,7.2,4.3,6.6c0.2-0.6,6.1-5.6,6.1-5.6l6.9,3.6l1.5-10.3L88.9,72L73.1,44.1L57.7,66z"
                  className={Styles.st1}
                ></path>
                <polygon
                  points="73.1,44.2 83.6,92 100.2,92"
                  className={Styles.st15}
                ></polygon>
                <polyline
                  points="100.2,91.9 73.1,44.1 39.7,91.9"
                  className={Styles.st2}
                ></polyline>
                <polyline
                  points="51.2,75.4 40,58.5 20.2,91.9"
                  className={Styles.st2}
                ></polyline>
                <polygon
                  points="51.2,75.4 40,58.5 47,81.3"
                  className={Styles.st15}
                ></polygon>
                <polyline
                  points="51.5,91.9 67.1,70.5 80.4,91.9"
                  className={Styles.st2}
                ></polyline>
                <polygon
                  points="72.3,92 67.1,70.7 80.4,92"
                  className={Styles.st15}
                ></polygon>
              </g>
              <rect
                y="34"
                x="20"
                width="80"
                height="58"
                className={Styles.st53}
              ></rect>
            </g>
            <polygon
              points="111,37 97,37 97,23"
              className={Styles.st18}
            ></polygon>
            <polygon
              points="111,37 97,37 97,23"
              className={Styles.st53}
            ></polygon>
          </svg>
        )}
      </div>
      {/* <div className={Styles.card__subtitle}>Type of work</div> */}
      <div className={Styles.card__wrapper} onClick={handleNav}>
        <div className={Styles.card__title}>{title}</div>
        <div className={Styles.card__icon} onClick={handleNav}>
          <svg
            color="rgb(224, 223, 220)"
            style={{
              userSelect: "none",
              width: "100%",
              height: "100%",
              display: "inline-block",
              fill: "rgb(224, 223, 220)",
              flexShrink: 0,
              cursor: "auto",
            }}
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g color="rgb(224, 223, 220)">
              <circle opacity="0.2" r="96" cy="128" cx="128"></circle>
              <circle
                strokeWidth="16"
                strokeMiterlimit="10"
                stroke="rgb(224, 223, 220)"
                fill="none"
                r="96"
                cy="128"
                cx="128"
              ></circle>
              <polyline
                strokeWidth="16"
                strokeLinejoin="round"
                strokeLinecap="round"
                stroke="rgb(224, 223, 220)"
                fill="none"
                points="134.1 161.9 168 128 134.1 94.1"
              ></polyline>
              <line
                strokeWidth="16"
                strokeLinejoin="round"
                strokeLinecap="round"
                stroke="rgb(224, 223, 220)"
                fill="none"
                y2="128"
                x2="168"
                y1="128"
                x1="88"
              ></line>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Card;
