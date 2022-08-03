import React from "react";

function GameCard(props) {
  return (
    <div>
      <h2>{props.game.name}</h2>
      <p>{props.game.appid}</p>
      <img src={props.game.logo} alt={props.game.name} />
      <a href={"/id/" + props.game.appid}> !! GO TO GAME DETAILS !!</a>
    </div>
  );
}

export default GameCard;
