
import React, { createContext, useContext, useState, useEffect } from "react";

const FavContext = createContext();

export const FavouriteProvider = ({ children }) => {
//  const [headerTitle, setHeaderTitle] = useState('exercisedetails');
const [myApiData,setMyApiData] = useState()

useEffect(() => {
    fetch(
      "https://gps-function-get.azurewebsites.net/api/gps-get-validationerrors"
    )
      .then(response => response.json())
      .then(data => {
          setMyApiData(data)
          console.log(data)

     
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  

  

  return (
    <FavContext.Provider
      value={{
        myApiData,
        setMyApiData
      }}
    >
      {children}
    </FavContext.Provider>
  );
};

export default function useFavourite() {
  return useContext(FavContext);
}