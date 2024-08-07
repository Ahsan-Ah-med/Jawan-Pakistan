import React, { useState } from "react";
import GetData from "../../client/Client";
import Card from "./cards/Card";

const ProductList = () => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const queryData = `
            query ProductQuery{
                products(first: 50){
                nodes{
                id
                title
                handle
                description
                images(first:10){
                  nodes{
                    url
                  }
                }
                variants(first:5){
                    nodes{
                    title
                    id
                    }
                }
                }
            }
            }
          `;
  console.log(data);
  console.log(error);

  return (
    <>
      <div>
        <div className="heading">Welcome to Our Products</div>
        <GetData
          query={queryData}
          queryDatas={setData}
          queryErrors={setError}
        />
        <div className="product_grid">
          {data &&
            data?.products?.nodes.map((e, i) => {
              return (
                <Card
                  key={i}
                  title={e?.title}
                  image={e?.images?.nodes[0]?.url}
                  mainlink={`/products/${e.handle}`}
                  data={e}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default ProductList;
