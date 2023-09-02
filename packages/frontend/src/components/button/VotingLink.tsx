import { Link } from "react-router-dom";

function VotingLink() {
  return (
    <Link
      to={"/voting"}
      className="mt-32 rounded-lg w-80 h-12 text-center text-lg border-2 border-primary-red text-primary-red p-2"
    >
      Voting
    </Link>
  );
}

export default VotingLink;
