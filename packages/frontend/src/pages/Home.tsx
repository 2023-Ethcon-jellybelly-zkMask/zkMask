import { useContext, useEffect, useState } from "react";
import UploadPhotoFrame from "../components/UploadPhotoFrame";
import MatchingLink from "../components/button/MatchingLink";
import VotingLink from "../components/button/VotingLink";
import ConfirmUploadImage from "../components/ConfirmUploadImage";
import Logo from "../components/Logo";
import User from "../contexts/User";
import { observer } from "mobx-react-lite";
import { cls } from "../utils";

export default observer(() => {
  const userContext = useContext(User);
  const [imgSrc, setImgSrc] = useState<File | null>(null);

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
      {/* <div>RemainingTiming: {remainingTime}</div> */}

      {/* {false ? (
        <>
          <div className="mb-16 mt-20 text-center">
            <h1>
              To generate a DID
              <br /> Get your photo voted on
            </h1>
          </div>
          <UploadPhotoFrame setThumbnail={setImgSrc} />
        </>
      ) : (
        <>
          <div className="mb-16 mt-20 text-center">
            <h1>Your photo is being voted</h1>
            <h3 className="text-gray-200">Vote for other people's photos too</h3>
          </div>
          <div className="relative mx-auto h-48 w-72 rounded-2xl bg-gray-100 py-16 text-center">
            <svg
              width="259"
              height="190"
              viewBox="0 0 259 190"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <g id="Vector" filter="url(#filter0_f_120_369)">
                <path
                  d="M228.125 80.4956C228.125 50.3982 203.778 26 173.749 26C155.519 26 139.433 35.0182 129.563 48.8022C119.693 35.0182 103.606 26 85.3817 26C55.3472 26 31 50.3927 31 80.4956C31 84.759 31.5401 88.8898 32.4659 92.8715C40.0159 139.884 92.1766 189.481 129.563 203.1C166.943 189.481 219.109 139.884 226.648 92.877C227.585 88.8953 228.125 84.7645 228.125 80.4956Z"
                  fill="url(#paint0_linear_120_369)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_120_369"
                  x="0.961876"
                  y="-4.03812"
                  width="257.202"
                  height="237.176"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur stdDeviation="15.0191" result="effect1_foregroundBlur_120_369" />
                </filter>
                <linearGradient
                  id="paint0_linear_120_369"
                  x1="129.924"
                  y1="203.1"
                  x2="129.924"
                  y2="40.8186"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FD484F" />
                  <stop offset="1" stopColor="#FFCFD7" />
                </linearGradient>
              </defs>
            </svg>

            <p className="relative rounded-full border-2 border-white text-white w-40 h-14 mx-auto py-4 font-medium text-[16px] z-10">
              Generating
            </p>
          </div>
        </>
      )} */}

      <>
        <div className="mb-16 mt-20 text-center whitespace-pre">
          <h1>{"Your score is ready!\nApply for a match\nwith your ZKmask score"}</h1>
          {/* <h3 className="text-gray-200">Vote for other people's photos too</h3> */}
        </div>
        <div className="relative mx-auto h-48 w-72 rounded-2xl bg-gray-100 flex justify-center items-center text-center">
          <svg
            width="259"
            height="190"
            viewBox="0 0 259 190"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <g id="Vector" filter="url(#filter0_f_120_369)">
              <path
                d="M228.125 80.4956C228.125 50.3982 203.778 26 173.749 26C155.519 26 139.433 35.0182 129.563 48.8022C119.693 35.0182 103.606 26 85.3817 26C55.3472 26 31 50.3927 31 80.4956C31 84.759 31.5401 88.8898 32.4659 92.8715C40.0159 139.884 92.1766 189.481 129.563 203.1C166.943 189.481 219.109 139.884 226.648 92.877C227.585 88.8953 228.125 84.7645 228.125 80.4956Z"
                fill="url(#paint0_linear_120_369)"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_120_369"
                x="0.961876"
                y="-4.03812"
                width="257.202"
                height="237.176"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="15.0191" result="effect1_foregroundBlur_120_369" />
              </filter>
              <linearGradient
                id="paint0_linear_120_369"
                x1="129.924"
                y1="203.1"
                x2="129.924"
                y2="40.8186"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FD484F" />
                <stop offset="1" stopColor="#FFCFD7" />
              </linearGradient>
            </defs>
          </svg>

          <p className={cls("relative  text-white mx-auto z-10 font-heading", userContext.data[0] ? 'text-[80px]' : 'text-[20px]')}>
            {userContext.data[0] ? `${userContext.data[0].toString()}.0` : "pending.."}
          </p>
        </div>
      </>

      <div className="flex flex-col gap-4 mt-[123px]">
        <VotingLink />
        <MatchingLink />
      </div>
      {imgSrc && <ConfirmUploadImage imgSrc={imgSrc} setImgSrc={setImgSrc} />}
    </>
  );
});
