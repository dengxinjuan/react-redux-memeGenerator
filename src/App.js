import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Meme from "./Meme";
import AddMemeForm from "./AddMemeForm";

function App() {
  let memes = useSelector((store) => store.memes); // pull in memes from react-redux
  const dispatch = useDispatch();
  /*ADD/remove new MEME By using dispatch*/
  function add(newMeme) {
    dispatch({ type: "ADD_MEME", meme: newMeme });
  }
  function remove(id) {
    dispatch({ type: "REMOVE_MEME", id });
  }

  /*map the memes redux and create all the memes*/
  const allMeme = memes.map((m) => (
    <Meme
      key={m.id}
      topText={m.topText}
      bottomText={m.bottomText}
      url={m.url}
      removeMeme={() => remove(m.id)} // single meme will herite remove function here
    />
  ));

  return (
    <div className="App">
      <AddMemeForm add={add} />
      {allMeme}
    </div>
  );
}

export default App;
