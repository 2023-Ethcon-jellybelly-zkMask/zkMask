import { useState } from "react";
import UploadPhotoFrame from "../components/UploadPhotoFrame";
import ZkMask from "../components/ZkMask";
import MatchingLink from "../components/button/MatchingLink";
import VotingLink from "../components/button/VotingLink";
import ConfirmUploadImage from "../components/ConfirmUploadImage";

function Home() {
  const [imgSrc, setImgSrc] = useState<File | null>(null);

  return (
    <>
      <ZkMask />
      <div className="mx-9 mb-16 mt-20">
        <h1 className="text-center">
          To generate a DID
          <br />
          Get your photo voted on
        </h1>
      </div>
      <UploadPhotoFrame setThumbnail={setImgSrc} />
      <VotingLink />
      <MatchingLink />
      {imgSrc && <ConfirmUploadImage imgSrc={imgSrc} setImgSrc={setImgSrc} />}
    </>
  );
}

export default Home;
