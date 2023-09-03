import { useEffect, useState } from "react";
import Score from "../components/voting/Score";
import VotingTopBar from "../components/voting/VotingTopBar";
import VoteConfirmButton from "../components/button/VoteConfirmButton";
import { getAllFileUrlsAndNames } from "../firebase";
import CardSwap from "../components/voting/CardSwap";

const Voting = () => {
  const [score, setScore] = useState(0);
  const [fileList, setFileList] = useState<Array<{ name: string; url: string }>>([]);
  const [imgCount, setImgCount] = useState(0);

  const onClickVote = () => {
    if (!fileList) return;
    if (imgCount > fileList.length - 2) {
      alert("You've completed voting for all registered people.");
      return;
    }

    setImgCount(imgCount + 1);
  };

  useEffect(() => {
    console.log(score);
  }, [score]);

  useEffect(() => {
    (async () => {
      const result = await getAllFileUrlsAndNames();

      console.log(result);

      setFileList(result);
    })();
  }, []);

  return (
    <>
      <VotingTopBar />
      {/* <CardSection /> */}
      <div className="relative mt-20 mb-[47px]" style={{ width: "313px", height: "313px" }}>
        {fileList.length > 0 ? (
          <CardSwap url={fileList[imgCount].url} />
        ) : (
          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2">
            <Spinner />
          </div>
        )}
      </div>
      <Score score={score} setScore={setScore} />
      <VoteConfirmButton
        setCount={onClickVote}
        concatenatedString={fileList.length > 0 ? fileList[imgCount].name : null}
        score={score}
      />
    </>
  );
};

function Spinner() {
  return (
    <svg
      className="text-primary-red h-10 w-10 animate-spin"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
}

export default Voting;
