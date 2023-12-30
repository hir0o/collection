"use client";
import { FC, useState } from "react";
import { css } from "../../../styled-system/css";
import { match, P } from "ts-pattern";

type Props = {};

export const Counter: FC<Props> = ({}) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((c) => c + 1);
  };

  return (
    <button
      className={css({
        fontSize: 24,
        bgColor: "tomato",
        color: "Scrollbar",
      })}
      onClick={handleClick}
    >
      count:{" "}
      {match(count)
        .with(0, (c) => `${c} is zero`)
        .with(
          P.when((c) => c % 2 === 0),
          (c) => `${c} is even`,
        )
        .otherwise((c) => `${c} is odd`)}
    </button>
  );
};
