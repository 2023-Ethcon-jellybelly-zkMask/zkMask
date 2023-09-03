import React, { useEffect, useRef } from "react";
import User from "../../contexts/User";
import { cls } from "../../utils";

type Props = {
  setCount: () => void;
  score: number;
  concatenatedString: string | null;
};

<<<<<<< HEAD
    const score = 2
    const concatenatedString = '14297736175024501840128917587206408166406988140698957819377602769639959468095-5415514325574826067115133667486850915212911009883727218585145984766005418457-15587322846788914583993914432852372622133833891579810696524726272-0_19451004871464860333657070108405939238361934542219251692097985847545658152371-9215162702524865576906676779614786086563980343196805948413648188909459783882-10871683806720338198927014354483306036431020999493083442339945143393459884268-213160328242854365246236280129348826210042910411059878680390944707616484109-10226472467851111067616623370223481246333341144368127837004319393891534098316-18374719346204397703391949879411506957086584923994074363766094491553610862297-2649874887343382536988360437692790436029759872283230727651887326759857435523-1794570877027874157665833905323879330761595132687725474619216289240086196111'
    const concatenatedPubSig = concatenatedString.split('_')[0]
    const concatenatedProof = concatenatedString.split('_')[1]
    const pubSig = concatenatedPubSig.split('-').map(b => BigInt(b))
    const proof = concatenatedProof.split('-').map(b => BigInt(b))
=======
function VoteConfirmButton({ setCount, concatenatedString, score }: Props) {
  const userContext = React.useContext(User);
  const [pubSig, setPubSig] = React.useState<Array<bigint>>([]);
  const [proof, setProof] = React.useState<Array<bigint>>([]);
>>>>>>> 9da1c363c328ca1045bd601272c75df186ebafa1

  useEffect(() => {
    console.log(concatenatedString);
    if (!concatenatedString) return;
    const pubSigTemp = concatenatedString.split("_")[0];
    const prrofTemp = concatenatedString.split("_")[1];
    setPubSig(pubSigTemp.split("-").map((b) => BigInt(b)));
    setProof(prrofTemp.split("-").map((b) => BigInt(b)));
  }, [concatenatedString]);

  const onClickVote = async () => {
    if (!concatenatedString || pubSig.length === 0 || proof.length === 0) return;

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

    const reqData = {
      [0]: score,
    };

    await userContext.requestData(pubSig, proof, reqData);

    console.log(userContext.data);
    setCount();
  };

  return (
    <div
      className={cls(
        "mt-[87px] w-80 h-14 rounded-lg flex justify-center items-center text-white",
        score > 0 ? "bg-primary-red" : "bg-gray-200",
      )}
      onClick={score > 0 ? onClickVote : undefined}
    >
      Vote
    </div>
  );
}

export default VoteConfirmButton;
