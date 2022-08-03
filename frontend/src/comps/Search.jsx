import React, { useState, useEffect } from "react";
import axios from "axios";
import GameCard from "./GameCard";

function Search() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  function handleInput(e) {
    setInput(e.target.value);
    console.log(input);
  }

  useEffect(() => {
    const delayDebounce = setTimeout(async () => {
      console.log("input: " + input);
      if (input.length > 0) {
        console.log("Making Axios Call");

        const axiosRes = async () => {
          const searchApiRes = await axios.get(`api/search/${input}`);
          return searchApiRes.data;
        };
        const resp = await axiosRes();

        setResults(resp);
      } else {
        console.log("input is blank, api request not made");
      }
    }, 1000);

    return () => {
      clearTimeout(delayDebounce);
    };
  }, [input]);

  const cardsDeploy = results.map((result, i) => {
    console.log(result);
    return <GameCard key={i} game={result} />;
  });

  return (
    <div>
      <p>
        for raw output see these: <br />
        /api/search/"query keywords"
        <br /> /api/id/"appId of game"
      </p>
      <h1>Search</h1>
      <input type="text" value={input} onChange={handleInput} />
      {cardsDeploy}
    </div>
  );
}

export default Search;
