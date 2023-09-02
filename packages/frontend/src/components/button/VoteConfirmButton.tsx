import React from 'react'
import User from '../../contexts/User'

function VoteConfirmButton() {
    const userContext = React.useContext(User)

    const score = 2
    const concatenatedString = '19956572772455018780246306805621194674908973384354363528920936428008378165712-18448505118976501253383815225132306452466341370182979849663200524067016667172-63518133501528511474817280993876742183223042373476118221608189952-0_10693257173464602821023530322157848458646264234756058901501103000590055796883-2761430213247435997394203971709947157882255837589704609332711714585102792072-5039846102519488520480654447491091550764414525938477072194615821367621755857-9264339846814434356154396326319552537385370254473801198851966416442930711851-12064638415044148852102460639219702013930427934176935142717653989122022487840-7284644003829846347420229970473753229557777794045166585460091502352549998106-20061749872164458298017413500207689878503210274402862931326565394781348469838-8870599569336945982978412915241632340366619415451732683319919291596893444054'
    const concatenatedPubSig = concatenatedString.split('_')[0]
    const concatenatedProof = concatenatedString.split('_')[1]
    const pubSig = concatenatedPubSig.split('-').map(b => BigInt(b))
    const proof = concatenatedProof.split('-').map(b => BigInt(b))


    const onClickVote = async () => {
        if (
            userContext.userState &&
            userContext.userState.sync.calcCurrentEpoch() !==
            (await userContext.userState.latestTransitionedEpoch())
        ) {
            // throw new Error('Needs transition')
            console.log('Current epoch', userContext.userState.sync.calcCurrentEpoch())
            console.log('Needs transition')
            await userContext.stateTransition()
            console.log('Transitioned')
        }

        const reqData = {
            [0]: score
        };

        await userContext.requestData(
            pubSig,
            proof,
            reqData
        )

        console.log(userContext.data)
    }

    return (
        <div
            className="mt-10 w-80 h-14 text-center rounded-lg bg-gray-200 text-white p-4"
            onClick={onClickVote}
        >
            Vote
        </div>
    );
}

export default VoteConfirmButton;