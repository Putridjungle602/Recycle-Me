import React, { useState } from "react";
import Banner from "../components/banner";
import { ACTIVITIES, QUERY_ME } from "../utils/queries";
import Auth from "../utils/auth";
//Extra things added -- need the mutation syntax and the useMutation method to convert the mutation
import { UPDATEUSERPOINTS } from "../utils/mutations";
import { useMutation, useQuery } from "@apollo/client";
//-----
//display activities if logged in
const Home = () => {
  const { loading, data } = useQuery(ACTIVITIES);
  //query for me
  const userData = useQuery(QUERY_ME);
  console.log(userData);
  //Extra things added -- here adding the mutation to a variable
  const [UpdateUserPoints, { error }] = useMutation(UPDATEUSERPOINTS);
  //----
  const [selectValue, setSelectValue] = useState("");
  const activityData = data?.activity || [];
  //query for me saving the info
  const userInfo = userData.data?.me || {};
  console.log(userInfo);
  const token = Auth.loggedIn() ? Auth.getToken() : null;
  console.log(activityData);
  //Extra things added -- converting this to an async function
  const handleDropdownChange = async (e) => {
    const { name, value } = e.target;
    console.log(typeof value);
    setSelectValue(parseInt(value));
    //once we get the point value for the activity we will then add it using the mutation
    try {
      const { data } = await UpdateUserPoints({
        variables: { points: selectValue },
      });
      console.log("This is data from the mutation : ", data);
      setSelectValue("");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <div>
        <h1>
          Total accumulated points of activity <span>{userInfo.accPoints}</span>
        </h1>
        <select id="dropdown" onChange={handleDropdownChange}>
          {activityData.length
            ? activityData.map((activity, idx) => (
                <option key={idx} value={activity.points}>
                  {activity.activity}
                </option>
              ))
            : ""}
        </select>
      </div>
    </div>
  );
};

export default Home;
