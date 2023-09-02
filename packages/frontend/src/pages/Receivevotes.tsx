import UploadedPhotoFrame from "../components/UploadedPhotoFrame";
import ZkMask from "../components/ZkMask";
import MatchingButton from "../components/button/MatchingButton";
import VotingButton from "../components/button/VotingButton";

function Receivevotes() {
    return(
        <>
            <ZkMask />
            <div className="mt-20 mb-16 font-bold text-3xl mx-9 top-0 left-0">
                <h1 className="text-center">Voting on a photo</h1>
            </div>
            <UploadedPhotoFrame />
            <VotingButton />
            <MatchingButton />
        </>
    )
}

export default Receivevotes;