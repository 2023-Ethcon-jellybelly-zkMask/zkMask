import React, { useEffect, useRef } from "react";
import User from "../../contexts/User";
import { cls } from "../../utils";

type Props = {
    setCount: () => void;
    score: number;
    concatenatedString: string | null;
};

function VoteConfirmButton({ setCount, concatenatedString, score }: Props) {
    const userContext = React.useContext(User);
    const [pubSig, setPubSig] = React.useState<Array<bigint>>([]);
    const [proof, setProof] = React.useState<Array<bigint>>([]);

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
