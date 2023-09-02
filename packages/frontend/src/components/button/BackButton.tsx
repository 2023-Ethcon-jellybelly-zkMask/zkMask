import BackArrowIcon from '../../assets/BackIcon.svg';

function BackButton() {
    return(
        <div className="absolute rounded-full border border-gray-200 w-10 h-10 p-2">
            <img src={BackArrowIcon}></img>
        </div>
    )
}

export default BackButton;