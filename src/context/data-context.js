import { createContext, useContext, useState } from 'react';
import axios from 'axios';

const DataContext = createContext();

const useData = () => useContext(DataContext);

function DataProvider({ children }) {
  const [data, setData] = useState([]);

  const getUsers = async () => {
    try {
      const response = await axios.get(
        'http://localhost:8080/tweets/users/all'
      );
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(data);

  return (
    <DataContext.Provider value={{ data, setData, getUsers }}>
      {children}
    </DataContext.Provider>
  );
}

export { useData, DataProvider };
