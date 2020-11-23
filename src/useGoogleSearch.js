import { useEffect, useState } from "react";
import REACT_APP_MY_API from "./Keys";
const { REACT_APP_CONTEXT_API } = process.env;

// Term needs to be passed in as a values
const useGoogleSearch = (term) => {
  // Changes the state of the data displayed depending upon what the user desides to search
  const [data, setData] = useState(null);
  //   use effect is dependent on the term
  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${REACT_APP_MY_API}&cx=${REACT_APP_CONTEXT_API}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };
    fetchData();
  }, [term]);
  return { data };
};

export default useGoogleSearch;
