import "./styles.css";
import React, { useState, useEffect, Fragment } from "react";
import states from "./states";

const App = () => {
  console.log("render");
  const [search, setSearch] = useState("");
  const [filteredStates, setFilteredStates] = useState(states);

  // using the concpt of debounce in useEffects

  useEffect(() => {
    const timer = setTimeout(() => {
      const filter = states.filter((state) => {
        return state.author.toLowerCase().includes(search.toLowerCase());
      });

      setFilteredStates(filter);
    }, 3000);

    return () => clearTimeout(timer);
  }, [search]);

  return (
    <Fragment>
      <div>
        Start Typing The Author Name In The Search Bar And It Will Filter The
        Details.
      </div>
      Search:-
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      <ul>
        {filteredStates &&
          filteredStates.map((state) => {
            return (
              <li key={state.author}>
                <ul>Isbn :{state.isbn}</ul>
                <ul>Title: {state.title}</ul>
                <ul>Subtitle: {state.subtitle}</ul>
                <ul>Author: {state.author}</ul>
                <br></br>
              </li>
            );
          })}
      </ul>
    </Fragment>
  );
};

export default App;
