import { createContext, useEffect, useState } from "react"

export const ShowContext = createContext();

const ShowProvider = ({children}) => {
    const [shows, setShows] = useState([]);
  
    useEffect(() => {
      fetch("https://api.tvmaze.com/search/shows?q=all")
        .then((res) => res.json())
        .then((data) => setShows(data));
    }, []);
  return (
    <ShowContext.Provider value={{shows}}>
        {children}
    </ShowContext.Provider>
  )
}

export default ShowProvider