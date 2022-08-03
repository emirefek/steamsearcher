import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function GameDetails() {
  let { gameId } = useParams();
  const [game, setGame] = useState({
    data: {
      name: "",
    },
    success: "loading",
  });
  const stringId = gameId.toString();

  const APIURL = `${window.location.origin}/api/id/${gameId}`;

  useEffect(() => {
    let resp;

    console.log("Making Axios Call");
    async function axiosRes() {
      const searchApiRes = await axios.get(APIURL);
      setGame(searchApiRes.data);
    }
    axiosRes();
  }, [gameId]);

  console.log(APIURL);
  console.log(game);

  return (
    <div>
      <h1>GameDetails</h1>
      <p>gameId: {gameId}</p>
      <p>game.success: {game.success}</p>
      <p>game.data.name: {game.data.name}</p>
      <img src={game.data.header_image} alt={game.data.name} />
    </div>
  );
}

export default GameDetails;
