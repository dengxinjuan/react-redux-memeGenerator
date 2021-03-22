import React from "react";

/* this is a single meme that will render every single meme*/
const Meme = ({ removeMeme, topText, bottomText, url, id }) => {
  function remove() {
    removeMeme(id);
  }
  return (
    <div>
      <div>
        <p>{topText}</p>
        <img src={url} alt="meme" />
        <p>{bottomText}</p>
        <button onClick={remove}>Remove!</button>
      </div>
    </div>
  );
};

export default Meme;
