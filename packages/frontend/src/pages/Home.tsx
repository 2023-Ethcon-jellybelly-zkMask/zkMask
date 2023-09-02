import { useState } from "react";
import UploadPhotoFrame from "../components/UploadPhotoFrame";
import MatchingLink from "../components/button/MatchingLink";
import VotingLink from "../components/button/VotingLink";
import ConfirmUploadImage from "../components/ConfirmUploadImage";
import Logo from "../components/Logo";

function Home() {
  const [imgSrc, setImgSrc] = useState<File | null>(null);

  return (
    <>
      <Logo />
      <div className="mx-9 mb-16 mt-20">
        <h1 className="text-center">
          To generate a DID Get your photo voted on
        </h1>
      </div>
      <UploadPhotoFrame setThumbnail={setImgSrc} />
      <div className="flex flex-col gap-4 mt-[123px]">
        <VotingLink />
        <MatchingLink />
      </div>
      {imgSrc && <ConfirmUploadImage imgSrc={imgSrc} setImgSrc={setImgSrc} />}
    </>
  );
}

export default Home;
