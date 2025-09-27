import axios from "axios";
import React, { useEffect, useState } from "react";

const GetMethod = () => {
  const [getData, setGetData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  //get Method
  const url = "https://jsonplaceholder.typicode.com/posts";
  const getMethod = async () => {
    try {
      const response = await axios.get(url);
      setGetData(response.data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMethod();
  }, []);

  return (
    <div>
      <h1>Get Method</h1>
      {loading && <h2>Loading...</h2>}
      {error && <h2>Something went wrong!</h2>}
      {!loading &&
        !error &&
        getData.map((item) => (
          <div key={item.id}>
            <h1 className="text-2xl font-bold">{item.title}</h1>
            <p>{item.body}</p>
          </div>
        ))}
    </div>
  );
};

export default GetMethod;
