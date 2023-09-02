import { useState } from "react";
import { uploadImg } from "../firebase";

const TestUploadImg = () => {
  const [img, setImg] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const onClickUpload = async () => {
    if (loading || !img) {
      console.log("no img");
      return;
    }

    setLoading(true);
    try {
      console.log('call')
      await uploadImg(img, "0xEA644e61a026c4f7c9D8499Ea772cA6e53E8A1a6");
      alert('업로드 성공!')
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input
        type="file"
        placeholder="이미지 인풋"
        multiple={false}
        onChange={(e) => {
          e.target.files ? setImg(e.target.files[0]) : setImg(null);
        }}
      />
      <button onClick={() => onClickUpload()}>upload</button>
    </div>
  );
};

export default TestUploadImg;
