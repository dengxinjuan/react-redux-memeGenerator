import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // get uuid

const AddMemeForm = ({ add }) => {
  /**send value to parent and clear form **/
  const INITIAL_STATE = { topText: "", bottomText: "", url: "" };
  const [form, setForm] = useState(INITIAL_STATE);

  /*handle add function, which herited from parent App*/
  function handleSubmit(e) {
    e.preventDefault();
    add({ ...form, id: uuidv4() });
    setForm(INITIAL_STATE);
  }
  /*handle change when capturing the value*/
  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  return (
    <div>
      <h2>Make a New Meme</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="url">Image URL</label>
        <input
          type="text"
          name="url"
          id="form_url"
          onChange={handleChange}
          value={form.url}
        />
        <label htmlFor="topText">Top Text</label>
        <input
          type="text"
          name="topText"
          id="form_topText"
          onChange={handleChange}
          value={form.topText}
        />
        <label htmlFor="bottomText">Bottom Text</label>
        <input
          type="text"
          name="bottomText"
          id="form_bottomText"
          onChange={handleChange}
          value={form.bottomText}
        />
        <button type="submit" id="form_submit">
          Generate Meme!
        </button>
      </form>
    </div>
  );
};

export default AddMemeForm;
