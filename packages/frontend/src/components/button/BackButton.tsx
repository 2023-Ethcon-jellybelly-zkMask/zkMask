// import BackArrowIcon from '../../assets/BackIcon.svg';
import { Link } from "react-router-dom";

function BackButton() {
    return (
        <Link to={"/front"}>
            <div className="absolute rounded-full border border-gray-200 w-10 h-10 p-2">
                {/* <img src={BackArrowIcon}></img> */}
                {"<"}
            </div>
        </Link>
    )
}

export default BackButton
