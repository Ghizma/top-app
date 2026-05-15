import { JSX, useState } from "react";
import { RatingProps } from "./Rating.props";
import styles from "./Rating.module.css";
import Image from "next/image";
import cn from "classnames";

export const Rating = ({
  isEditable = false,
  rating,
  setRating,
  className,
  ...props
}: RatingProps): JSX.Element => {
  const [displayRating, setDisplayRating] = useState<number>(rating);

  const changeDisplay = (i: number) => {
    if (!isEditable) {
      return;
    }

    setDisplayRating(i);
  };

  const resetDisplay = () => {
    setDisplayRating(rating);
  };

  const onClick = (i: number) => {
    if (!isEditable || !setRating) {
      return;
    }

    setRating(i);
    setDisplayRating(i);
  };

  return (
    <div
      className={cn({
        [styles.editable]: isEditable,
      })}
      {...props}
    >
      {new Array(5).fill(null).map((_, index: number) => (
        <span
          key={index}
          onMouseEnter={() => isEditable && changeDisplay(index + 1)}
          onMouseLeave={() => isEditable && resetDisplay()}
          onClick={() => onClick(index + 1)}
          onKeyDown={(e) => {
            if (isEditable && (e.key === "Enter" || e.key === " ")) {
              onClick(index + 1);
            }
          }}
          tabIndex={isEditable ? 0 : -1}
          role={isEditable ? "button" : undefined}
        >
          <Image
            className={styles.star}
            src={index < displayRating ? "/FilledStar.svg" : "/Star.svg"}
            alt="Star"
            width={20}
            height={20}
          />
        </span>
      ))}
    </div>
  );
};
