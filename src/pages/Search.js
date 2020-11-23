import React, { useState } from "react";
import "../styles/Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function Search({ hideButtons = false }) {
    // First takes a state and allow you to break it down but it isn't needed dispatch allows you to change the data layer 
  const [{}, dispatch] = useStateValue();
//   Tracks the input term so it can 
  const [input, setInput] = useState("");
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();

    // Use object so they can match with obj in reducer uses the input above to dispatch into the data layer so it can be 
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });
    // Pushes used to search page and sends search term to data layer and the search term can be pulled from the search component
    history.push("/search");
  };

  return (
    //   Change to a form and make button a submit which will trigger the object
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
        />
        <MicIcon />
      </div>

      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search__buttons">
          <Button
            className="search__buttonsHidden"
            type="submit"
            onClick={search}
            variant="outlined"
          >
            Google Search
          </Button>
          <Button className="search__buttonsHidden" variant="outlined">
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
