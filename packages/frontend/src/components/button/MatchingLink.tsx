import { Link } from "react-router-dom";

function MatchingLink() {
  return (
    <h4 className="rounded-lg h-14 bg-primary-red font-medium text-white flex justify-center items-center">
      <Link to={"/"}>Matching</Link>
    </h4>
  );
}

export default MatchingLink;
