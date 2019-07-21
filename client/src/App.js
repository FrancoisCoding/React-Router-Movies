import React, { useState } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

const App = () => {
  const [savedList, setSaveList] = useState([]);

  function addToSavedList(movie) {
    setSaveList([...savedList, movie]);
  }

  return (
    <div>
      <Route to="/" component={MovieList} />
      <SavedList list={savedList} />
      <div>Replace this Div with your Routes</div>
    </div>
  );
};

export default App;
