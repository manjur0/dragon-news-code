import axios from "axios";
import React, { useState } from "react";

const PostPut = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [res, setRes] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // post method
  const url = "https://jsonplaceholder.typicode.com/posts";
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(url, {
        title,
        body,
        userId: 1,
      });
      setLoading(true);
      setRes(response.data);
      setTitle("");
      setBody("");
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  // clear input field

  return (
    <div>
      <h2>This a form</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="border-2 border-black input"
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />{" "}
        <br />
        <textarea
          className="border-2 border-black my-2 textarea"
          name="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Body"
          required
        ></textarea>{" "}
        <br />
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
      {loading && <h2>Loading...</h2>}
      {error && <h2>There was and error</h2>}
      {res && (
        <div>
          <h2>{res.title}</h2>
          <p>{res.body}</p>
          <p>{res.id}</p>
        </div>
      )}
    </div>
  );
};

export default PostPut;
