import { useEffect, useState } from "react";
import Score from "../components/voting/Score";
import VotingTopBar from "../components/voting/VotingTopBar";
import CardSection from "../components/voting/CardSection";
import GenderSection from "../components/voting/GenderSection";
import VoteConfirmButton from "../components/button/VoteConfirmButton";
import { collection, getDocs, query } from "firebase/firestore";
import { getAllFileNames } from "../firebase";

const Voting = () => {
  const [score, setScore] = useState(0);

  useEffect(() => {
    console.log(score);
  }, [score]);

  useEffect(() => {
    (async () => {
      const result = await getAllFileNames();

      console.log(result);
    })();
  }, []);

  return (
    <>
      <VotingTopBar />
      <CardSection />
      <GenderSection />
      <Score score={score} setScore={setScore} />
      <VoteConfirmButton />
    </>
  );
};

export default Voting;
