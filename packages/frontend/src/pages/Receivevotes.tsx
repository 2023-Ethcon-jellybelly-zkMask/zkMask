import UploadedPhotoFrame from "../components/UploadedPhotoFrame";
import ZkMask from "../components/ZkMask";
import MatchingLink from "../components/button/MatchingLink";
import VotingLink from "../components/button/VotingLink";

function Receivevotes() {
    return(
        <>
            <ZkMask />
            <div className="mt-20 mb-16 font-bold text-3xl mx-9 top-0 left-0">
                <h1 className="text-center">Voting on a photo</h1>
            </div>
            <UploadedPhotoFrame />
            <VotingLink />
            <MatchingLink />
        </>
    )
}

export default Receivevotes;