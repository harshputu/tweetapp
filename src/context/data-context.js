import { createContext, useContext, useState } from "react";
import axios from "axios";

const DataContext = createContext();

const useData = () => useContext(DataContext);

function DataProvider({ children }) {
  const [userData, setUserData] = useState([]);
  const [tweetData, setTweetData] = useState([]);
  const [userTweets, setUserTweets] = useState([]);

  const getUsers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/tweets/users/all"
      );
      setUserData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getTweets = async () => {
    try {
      const response = await axios.get("http://localhost:8080/tweets/all");
      setTweetData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getUserTweets = async (loginId) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/tweets/${loginId}`
      );
      setUserTweets(response.data);
    } catch (error) {
      console.error(error);
    }
  };


  const createTweet = async (loginId) => {
    try {
const response = await axios.post(`http://localhost:8080/tweets/${loginId}/add`);
console.log("response",response)
    } catch (error) { 
      console.error(error);
    }
  }

  return (
    <DataContext.Provider
      value={{
        userData,
        setUserData,
        tweetData,
        setTweetData,
        userTweets,
        setUserTweets,
        getUsers,
        getTweets,
        getUserTweets,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export { useData, DataProvider };
