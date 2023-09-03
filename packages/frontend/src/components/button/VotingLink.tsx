import { Link } from "react-router-dom";

function VotingLink() {
  return (
    <h4 className="rounded-lg h-14 border-2 border-primary-red text-primary-red">
      <Link to={"/front/voting"} className="w-full h-full flex justify-center items-center">
        Voting
      </Link>
    </h4>
  );
}

export default VotingLink;
