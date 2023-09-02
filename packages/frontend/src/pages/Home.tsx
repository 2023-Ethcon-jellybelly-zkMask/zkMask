import { useContext, useEffect, useState } from "react";
import UploadPhotoFrame from "../components/UploadPhotoFrame";
import MatchingLink from "../components/button/MatchingLink";
import VotingLink from "../components/button/VotingLink";
import ConfirmUploadImage from "../components/ConfirmUploadImage";
import Logo from "../components/Logo";
import User from "../contexts/User";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

export default observer(() => {
  const userContext = useContext(User);
  const [imgSrc, setImgSrc] = useState<File | null>(null);
  const [score, setScore] = useState<bigint | null>(null);
  const [remainingTime, setRemainingTime] = useState<number | string>(0);

  const updateTimer = () => {
    if (!userContext.userState) {
      setRemainingTime("Loading...");
      return;
    }
    const time = userContext.userState.sync.calcEpochRemainingTime();
    setRemainingTime(time);
  };

  useEffect(() => {
    (async () => {
      try {
        const data = userContext.data[0];
        console.log(`data: `, data);
        setScore(data);
      } catch (error) {
        console.error("An error occurred:", error);
      }
    })();

    const intervalId = setInterval(() => {
      updateTimer();
    }, 1000);

    return () => {
      console.log("clear");
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <Logo />
      <div>
        <Link to="/front/validate">밸리데이트</Link>
        {/* 이게 voting 점수입니다 */}
        Score: {score ? score.toString() : 0}
      </div>
      <div>RemainingTiming: {remainingTime}</div>

      {remainingTime === 0 ? (
        <>
          <div className="mb-16 mt-20">
            <h1 className="text-center text-[26px]">
              To generate a DID
              <br /> Get your photo voted on
            </h1>
          </div>
          <UploadPhotoFrame setThumbnail={setImgSrc} />
        </>
      ) : (
        <>
          <div className="mb-16 mt-20 text-center">
            <h1 className="text-[26px]">Your photo is being voted</h1>
            <h3 className="text-gray-200 text-[18px]">Vote for other people's photos too</h3>
          </div>
          <div className="mx-auto h-48 w-72 rounded-2xl bg-gray-100 py-16 text-center">
            <p className="rounded-full border-2 border-gray-200 w-40 h-14 mx-auto py-4 font-medium text-[16px]">
              Generating
            </p>
          </div>
        </>
      )}

      <div className="flex flex-col gap-4 mt-[123px]">
        <VotingLink />
        <MatchingLink />
      </div>
      {imgSrc && <ConfirmUploadImage imgSrc={imgSrc} setImgSrc={setImgSrc} />}
    </>
  );
});
