import { useEffect, useState } from "react";
import { uploadImg } from "../firebase";

const CheckIcon = () => {
  return (
    <svg width="40" height="37" viewBox="0 0 40 37" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="on">
        <g id="Group 581">
          <circle id="Circle" cx="19.9998" cy="18.3338" r="18.3333" fill="#01DF85" />
          <path
            id="&#244;&#128;&#134;&#133;"
            d="M18.1589 26.8944C17.6082 26.8944 17.144 26.6623 16.7664 26.1982L11.9638 20.2155C11.8143 20.0346 11.7081 19.8615 11.6452 19.6963C11.5822 19.5232 11.5508 19.3462 11.5508 19.1653C11.5508 18.7641 11.6845 18.4337 11.952 18.1741C12.2195 17.9066 12.5617 17.7729 12.9786 17.7729C13.4427 17.7729 13.8321 17.9735 14.1468 18.3747L18.1117 23.4723L25.7817 11.271C25.9627 11.0035 26.1475 10.8147 26.3363 10.7046C26.5251 10.5866 26.7611 10.5276 27.0444 10.5276C27.4534 10.5276 27.7878 10.6574 28.0474 10.917C28.3148 11.1687 28.4486 11.4952 28.4486 11.8964C28.4486 12.0537 28.421 12.215 28.366 12.3802C28.3188 12.5454 28.2362 12.7185 28.1182 12.8994L19.5513 26.1628C19.2209 26.6505 18.7567 26.8944 18.1589 26.8944Z"
            fill="white"
          />
        </g>
      </g>
    </svg>
  );
};

const Spinner = () => {
  return (
    <svg
      className="text-primary-red h-10 w-10 animate-spin"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
};

type Props = {
  imgSrc: File;
  setImgSrc: React.Dispatch<React.SetStateAction<File | null>>;
};

const ConfirmUploadImage = ({ imgSrc, setImgSrc }: Props) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onClickUploadImage = async () => {
    if (!imgSrc) {
      console.log("no img");
      return;
    }

    if (loading) {
      console.log("loading");
      return;
    }

    setLoading(true);
    try {
      console.log("call");
      await uploadImg(imgSrc, "0xEA644e61a026c4f7c9D8499Ea772cA6e53E8A1a6");

      alert("사진 등록에 성공했습니다")

      setImgSrc(null);
    } catch (error) {
      console.log(error);
      alert("에러 발생");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // 스크롤 방지
    document.body.style.overflow = "hidden";
    const reader = new FileReader();

    reader.onloadend = () => {
      setPreview(reader.result as string);
    };

    reader.readAsDataURL(imgSrc);
    // 컴포넌트가 언마운트될 때 스크롤을 원상태로 복구
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [imgSrc]);

  return (
    <div className="fixed left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-black/70">
      <div className="w-custom relative flex flex-col items-center rounded-[20px] bg-white py-[34px]">
        {loading && (
          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2">
            <Spinner />
          </div>
        )}

        <CheckIcon />
        <h1 className="mt-[17px]">Upload a photo?</h1>
        {preview && (
          <img
            width="160"
            height="160"
            src={preview}
            className="mt-4 h-[160px] w-[160px] rounded-lg"
          />
        )}
        <div className="mt-[30px] flex gap-4">
          <button
            className="h-[56px] w-[130px] rounded-lg border-2 border-gray-200 text-gray-200"
            onClick={loading ? undefined : () => setImgSrc(null)}
          >
            Cancel
          </button>
          <button
            className="bg-primary-red h-[56px] w-[130px] rounded-lg  text-white"
            onClick={loading ? undefined : onClickUploadImage}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmUploadImage;
