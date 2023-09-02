// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "jellybelly-8ceef.firebaseapp.com",
  projectId: "jellybelly-8ceef",
  storageBucket: "jellybelly-8ceef.appspot.com",
  messagingSenderId: "742199351043",
  appId: import.meta.env.VITE_FIREBASE_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

// Functions
// TODO: 이미지 파일명을 epoch_key.png로
// TODO: firebase의 전체 이미지를 가져와서 파일명 배열로 한다 ~> epoch_key의 배열이다
export const uploadImg = async (image: File, walletAddress: `0x${string}`) => {
  const imgRef = ref(storage, `images/${walletAddress}`);
  const snapshot = await uploadBytes(imgRef, image);

  console.log(snapshot);
  return await getDownloadURL(snapshot.ref);
};
