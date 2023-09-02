import { cls } from "../../utils";

const Star = (): JSX.Element => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
      <path
        d="M18.9581 5.42623C19.5236 4.04726 21.4765 4.04726 22.0421 5.42623L24.9156 12.4324C25.155 13.0161 25.7035 13.4147 26.3326 13.462L33.8839 14.0298C35.3701 14.1416 35.9736 15.9989 34.8369 16.9629L29.0616 21.8608C28.5804 22.2689 28.3709 22.9137 28.5203 23.5266L30.3137 30.8838C30.6667 32.3318 29.0868 33.4797 27.8187 32.6965L21.3759 28.7174C20.8391 28.3859 20.1611 28.3859 19.6243 28.7174L13.1814 32.6965C11.9134 33.4797 10.3334 32.3318 10.6864 30.8838L12.4798 23.5266C12.6292 22.9137 12.4197 22.2689 11.9386 21.8608L6.16325 16.9629C5.02654 15.9989 5.63001 14.1416 7.11626 14.0298L14.6675 13.462C15.2967 13.4147 15.8451 13.0161 16.0846 12.4324L18.9581 5.42623Z"
        fill="currentColor"
      />
    </svg>
  );
};

type ScoreProps = {
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
};

const Score: React.FC<ScoreProps> = (props: ScoreProps) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-gray-200">score</p>
      <ul className="flex items-center justify-center gap-4">
        {new Array(5).fill(0).map((_, idx) => {
          return (
            <li
              key={`score-${idx}`}
              onClick={() => props.setScore(idx + 1)}
              className={cls(
                props.score >= idx + 1 ? "text-gray-300" : "text-gray-100",
                "cursor-pointer border-none outline-none",
              )}
            >
              <Star />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Score;
