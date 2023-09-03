import React from "react";
import { useState, useEffect } from "react";
import Logo from "../components/Logo";
import User from "../contexts/User";
import { observer } from "mobx-react-lite";

type ProofInfo = {
  publicSignals: string[]
  proof: string[]
  valid: boolean
}


export default observer(() => {
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const [isValidated, setIsValidated] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [repProof, setRepProof] = React.useState<ProofInfo>({
    publicSignals: [],
    proof: [],
    valid: false,
  })

  useEffect(() => {
    if (repProof.valid) {
      setIsValidated(true)
    }
  }
    , [repProof])

  const userContext = React.useContext(User)

  if (!isSubmit) {
    return (
      <div className="flex flex-col justify-center items-center">
        <Logo />
        <h1 className="mt-[211px]">Is it more than?</h1>
        <input className="mt-6 w-[130px] h-[56px] text-black bg-white border-2 rounded-lg border-gray-200 focus:outline-none"
          onChange={(e) => {
            setScore(Number(e.target.value));
          }
          }
        />

        <button
          onClick={async () => {
            if (
              userContext.userState &&
              userContext.userState.sync.calcCurrentEpoch() !==
              (await userContext.userState.latestTransitionedEpoch())
            ) {
              // throw new Error('Needs transition')
              console.log("Current epoch", userContext.userState.sync.calcCurrentEpoch());
              console.log("Needs transition");
              await userContext.stateTransition();
              console.log("Transitioned");
            }


            const proveData = {
              [0]: score,
            };

            const proof =
              await userContext.proveData(
                proveData
              )
            setRepProof(proof)
            // TODO: isvalidated state boolean 변경되도록!
          }}
          className="mt-[83px] w-full h-[56px] bg-secondary-blue flex justify-center items-center rounded-lg text-white"
        >
          <h4>Verfiy</h4>
        </button>
      </div>
    );
  }

  return isValidated ? (
    <div className="flex flex-col justify-center items-center">
      <Logo />
      <svg
        className="mt-[158px] mb-[35px]"
        width="170"
        height="170"
        viewBox="0 0 170 170"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Badge">
          <g id="Badge / User / Normal vision / ON" opacity="0.1">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M56.8201 16.9678C62.1682 6.87853 72.7757 0 85 0C97.2243 0 107.832 6.87853 113.18 16.9678C124.096 13.6152 136.46 16.252 145.104 24.8959C153.748 33.5398 156.385 45.9043 153.032 56.8201C163.121 62.1682 170 72.7757 170 85C170 97.2243 163.121 107.832 153.032 113.18C156.385 124.096 153.748 136.46 145.104 145.104C136.46 153.748 124.096 156.385 113.18 153.032C107.832 163.121 97.2243 170 85 170C72.7757 170 62.1681 163.121 56.8201 153.032C45.9043 156.385 33.5398 153.748 24.8959 145.104C16.2521 136.46 13.6153 124.096 16.9679 113.18C6.87854 107.832 0 97.2243 0 85C0 72.7757 6.87853 62.1682 16.9678 56.8201C13.6152 45.9043 16.252 33.5398 24.8959 24.8959C33.5398 16.252 45.9043 13.6152 56.8201 16.9678ZM125.481 63.6699C126.103 64.2923 126.103 65.3014 125.481 65.9238L75.1438 116.261C74.5214 116.883 73.5123 116.883 72.8899 116.261L45.0918 88.4628C44.4694 87.8404 44.4694 86.8313 45.0918 86.2089L54.1074 77.1933C54.7298 76.5709 55.7389 76.5709 56.3613 77.1933L72.8899 93.7219C73.5123 94.3443 74.5214 94.3443 75.1438 93.7219L114.211 54.6543C114.834 54.0319 115.843 54.0319 116.465 54.6543L125.481 63.6699Z"
              fill="#07B1EF"
            />
            <path
              d="M125.481 65.9238C126.103 65.3014 126.103 64.2923 125.481 63.6699L116.465 54.6543C115.843 54.0319 114.834 54.0319 114.211 54.6543L75.1438 93.7219C74.5214 94.3443 73.5123 94.3443 72.8899 93.7219L56.3613 77.1933C55.7389 76.5709 54.7298 76.5709 54.1074 77.1933L45.0918 86.2089C44.4694 86.8313 44.4694 87.8404 45.0918 88.4628L72.8899 116.261C73.5123 116.883 74.5214 116.883 75.1438 116.261L125.481 65.9238Z"
              fill="white"
            />
          </g>
          <g id="Badge / User / Normal vision / ON_2">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M65.1083 36.9773C68.8834 29.8554 76.3711 25 85 25C93.6289 25 101.117 29.8554 104.892 36.9773C112.597 34.6107 121.325 36.472 127.426 42.5736C133.528 48.6752 135.389 57.403 133.023 65.1083C140.145 68.8834 145 76.3711 145 85C145 93.6289 140.145 101.117 133.023 104.892C135.389 112.597 133.528 121.325 127.426 127.426C121.325 133.528 112.597 135.389 104.892 133.023C101.117 140.145 93.6289 145 85 145C76.371 145 68.8834 140.145 65.1083 133.023C57.4031 135.389 48.6751 133.528 42.5736 127.426C36.4721 121.325 34.6108 112.597 36.9773 104.892C29.8554 101.117 25 93.6289 25 85C25 76.3711 29.8554 68.8834 36.9773 65.1083C34.6107 57.403 36.472 48.6752 42.5736 42.5736C48.6752 36.472 57.4031 34.6108 65.1083 36.9773ZM113.575 69.9435C114.014 70.3828 114.014 71.0951 113.575 71.5345L78.0427 107.067C77.6034 107.506 76.8911 107.506 76.4517 107.067L56.8295 87.4444C56.3902 87.005 56.3902 86.2927 56.8295 85.8534L63.1935 79.4894C63.6328 79.0501 64.3451 79.0501 64.7845 79.4894L76.4517 91.1567C76.8911 91.596 77.6034 91.596 78.0427 91.1567L105.62 63.5795C106.059 63.1402 106.772 63.1402 107.211 63.5795L113.575 69.9435Z"
              fill="#07B1EF"
            />
            <path
              d="M113.575 71.5345C114.014 71.0951 114.014 70.3828 113.575 69.9435L107.211 63.5795C106.772 63.1402 106.059 63.1402 105.62 63.5795L78.0427 91.1567C77.6034 91.596 76.8911 91.596 76.4517 91.1567L64.7845 79.4894C64.3451 79.0501 63.6328 79.0501 63.1935 79.4894L56.8295 85.8534C56.3902 86.2927 56.3902 87.005 56.8295 87.4444L76.4517 107.067C76.8911 107.506 77.6034 107.506 78.0427 107.067L113.575 71.5345Z"
              fill="white"
            />
          </g>
        </g>
      </svg>

      <h1 className="">Verified!</h1>
    </div>
  ) : (
    <div className="flex flex-col justify-center items-center">
      <Logo />

      <svg
        className="mt-[158px] mb-[35px]"
        width="160"
        height="160"
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle opacity="0.1" cx="80" cy="80" r="80" fill="#FD484F" />
        <circle cx="80" cy="80" r="52" fill="#FD484F" />
        <path d="M98 62L62 98M62 62L98 98" stroke="white" strokeWidth="9" strokeLinecap="square" />
      </svg>

      <h1 className="">Unverified!</h1>
    </div>
  );
})
