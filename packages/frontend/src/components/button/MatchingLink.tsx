import { Link } from "react-router-dom";

function MatchingLink() {
  return (
    <h4 className="rounded-lg h-14 bg-primary-red font-medium text-white">
      <Link to={"/"} className="w-full h-full  flex justify-center items-center">
        Matching
      </Link>
    </h4>
  );
}

export default MatchingLink;
