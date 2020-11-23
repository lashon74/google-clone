import { useEffect, useState } from "react";
import API_KEY from "./Keys";

const CONTEXT_API = "5837a59378e977649";

// Term needs to be passed in as a values
const useGoogleSearch = (term) => {
  // Changes the state of the data displayed depending upon what the user desides to search
  const [data, setData] = useState(null);
  //   use effect is dependent on the term
  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_API}&q=${term}`
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
