import React, { useState } from "react";
import Banner from "../components/banner";

import { useQuery } from "@apollo/client";
import { ACTIVITIES } from "../utils/queries";
import Auth from "../utils/auth";
import [UPDATEUSERPOINTS]
import BoxContainer from "../components/BoxContainer";
import { UPDATEUSERPOINTS } from "../utils/mutations";
//display activities if logged in
const Home = () => {
  const { loading, data } = useQuery(ACTIVITIES);
  const [selectValue, setSelectValue] = useState("");
  const activityData = data?.activity || [];

  const token = Auth.loggedIn() ? Auth.getToken() : null;

  console.log(activityData);
  console.log(token);
  const handleDropdownChange = (e) => {
    const { name, value } = e.target;
    setSelectValue(value);
  };
  console.log(selectValue);
  return (
    <div>
      <div>
        <select id="dropdown" onChange={handleDropdownChange}>
          {activityData.length
            ? activityData.map((activity, idx) => (
                <option>{activity.activity}</option>
              ))
            : ""}
        </select>
      </div>
    </div>
  );
};
//   return (
//     <>
//       <Banner />

//       {activityData.length ? (
//         activityData.map((activity, idx) => (
//           <BoxContainer
//             key={idx}
//             // name={activity.activity}
//             // description={activity.description}
//             // points={activity.points}
//           />
//         ))
//       ) : (
//         <h1>loading</h1>
//       )}
//     </>
//   );

export default Home;
