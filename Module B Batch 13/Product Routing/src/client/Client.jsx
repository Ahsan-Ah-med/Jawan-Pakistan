import { createStorefrontApiClient } from "@shopify/storefront-api-client";
import React, { useEffect, useState } from "react";

const GetData = ({ query, variables = null, queryDatas, queryErrors }) => {
  useEffect(() => {
    const fatchData = async () => {
      const client = createStorefrontApiClient({
        storeDomain: "aleena-practice.myshopify.com",
        apiVersion: "2024-04",
        publicAccessToken: "de673763d1f7c0da2d7b9219dc033225",
      });
      const productQuery = query;
      try {
        const { data, errors } = await client.request(
          productQuery,
          variables && variables
          //   {
          //     variables: {
          //       handle: "ice-tank",
          //     },
          //   }
        );

        if (data) {
          queryDatas(data);
          queryErrors();
        }
        if (errors) {
          queryErrors(errors);
        }
      } catch (error) {
        if (error) {
          queryErrors(error);
        }
      }
    };
    fatchData();
  }, []);
  return (
    <>
      {/* <h1>Hello Data</h1>
      <Card /> */}
    </>
  );
};

export default GetData;
