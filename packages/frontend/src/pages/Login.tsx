import { useContext } from "react";
import Logo from "../components/Logo";
import User from "../contexts/User";
import { observer } from "mobx-react-lite";

export default observer(() => {
  const userContext = useContext(User);

  console.log(userContext.userState);

  return (
    <main className="bg-custom-gradient w-full h-screen flex flex-col justify-end">
      <div className="mx-auto max-w-[313px] mt-20 mb-[152px] flex flex-col gap-[272px]">
        <Logo isLogin />

        <button
          className="w-full h-14 flex justify-center items-center border-2 border-white rounded-lg text-white"
          onClick={() => {
            if (!userContext.userState) return;
            return userContext.signup();
          }}
        >
          <h4>{userContext.userState ? "Join" : "Initializing..."}</h4>
        </button>
      </div>
    </main>
  );
});
