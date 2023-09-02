import { useRef } from "react";
import GeneratePhotoLabel from "./voting/GeneratePhotoLabel";

type Props = {
  setThumbnail: React.Dispatch<React.SetStateAction<File | null>>;
};

function UploadPhotoFrame({ setThumbnail }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDivClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <div
      className="mx-auto h-48 w-72 rounded-2xl bg-gray-200 py-16 text-center"
      onClick={handleDivClick}
    >
      <input
        type="file"
        ref={inputRef}
        multiple={false}
        className="hidden"
        onChange={(e) => {
          e.target.files ? setThumbnail(e.target.files[0]) : setThumbnail(null);
        }}
      />
      <GeneratePhotoLabel />
    </div>
  );
}

export default UploadPhotoFrame;
