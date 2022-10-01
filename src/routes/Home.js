import React, { useState } from "react";
import { dbService } from "fbase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const Home = () => {
  const [nweet, setNweet] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(`서브밋 하는 느윗:${nweet}`);
    await addDoc(collection(dbService, "nweets"), {
      nweet,
      createdAt: serverTimestamp(),
    });
    setNweet("");
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNweet(value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={nweet}
          onChange={onChange}
          type="text"
          placeholder="What's on your mind?"
          maxLength={120}
        />
        <input type="submit" value="Nweet" />
      </form>
    </div>
  );
};
export default Home;
