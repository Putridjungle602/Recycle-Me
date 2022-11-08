import React from "react";
import Banner from "../components/banner";

import { useQuery } from "@apollo/client";
import { ACTIVITIES } from "../utils/queries";
import Auth from "../utils/auth";
import BoxContainer from "../components/BoxContainer";

const Home = () => {
  const { loading, data } = useQuery(ACTIVITIES);

  const activityData = data?.activity || [];

  const token = Auth.loggedIn() ? Auth.getToken() : null;

  console.log(activityData);
  console.log(token);

  return (
    <>
      <Banner />

      {activityData.length ? (
        activityData.map((product, idx) => (
          <BoxContainer
            key={idx}
            name={product.activity}
            description={product.description}
            points={product.points}
          />
        ))
      ) : (
        <h1>loading</h1>
      )}
    </>
  );
};

export default Home;
