// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { uploadBytes, getDownloadURL, listAll, getStorage, ref } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "jellybelly-8ceef.firebaseapp.com",
  projectId: "jellybelly-8ceef",
  storageBucket: "jellybelly-8ceef.appspot.com",
  messagingSenderId: "742199351043",
  appId: process.env.REACT_APP_FIREBASE_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

// Functions
// TODO: 이미지 파일명을 epoch_key.png로
// TODO: firebase의 전체 이미지를 가져와서 파일명 배열로 한다 ~> epoch_key의 배열이다
export const uploadImg = async (image: File, walletAddress: string) => {
  const imgRef = ref(storage, `images/${walletAddress}`);
  const snapshot = await uploadBytes(imgRef, image);

  console.log(snapshot);
  return await getDownloadURL(snapshot.ref);
};

export const getAllFileUrlsAndNames = async () => {
  // Create a reference under which you want to list
  const storageRef = ref(getStorage());
  const imagesRef = ref(storageRef, "images/");

  // Fetch the list of all items
  const res = await listAll(imagesRef);

  // Array to keep the names and URLs
  let files: { name: string; url: string }[] = [];

  // Loop over each item
  for (const itemRef of res.items) {
    // Get the name of the file
    const fileName = itemRef.name;

    // Get the download URL of the file
    const fileUrl = await getDownloadURL(itemRef);

    // Add the file info to the array
    files.push({ name: fileName, url: fileUrl });
  }

  return files;
};
