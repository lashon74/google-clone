import React from "react";
import "../styles/SearchPage.css";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";

function SearchPage() {
  // Uses the term dispatched in the search component
  const [{ term }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term);

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <h1>{term}</h1>
      </div>
      <div className="searchPage__results"></div>
    </div>
  );
}

export default SearchPage;
