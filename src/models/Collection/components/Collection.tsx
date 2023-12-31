"use client";
import { FC } from "react";
import { css } from "../../../../styled-system/css";
import TextIcon from "@/../public/text-icon.png";
import Image from "next/image";
import { hstack, vstack } from "../../../../styled-system/patterns";

type Props = {
  title: string;
  count: number;
  thumbnail?: string;
};

export const Collection: FC<Props> = ({ title, count, thumbnail }) => {
  return (
    <section
      className={hstack({
        width: "100%",
        cursor: "pointer",
        backgroundColor: "gray.600",
        gap: 2,
        padding: 3,
        alignItems: "flex-start",
      })}
    >
      <div
        className={css({
          height: "100px",
          width: "150px",
          bgColor: "gray.500",
        })}
      >
        <Image
          className={css({
            width: "100%",
            height: "100%",
            objectFit: "contain",
            padding: 2,
          })}
          src={TextIcon}
          alt="text-icon"
        />
      </div>
      <div>
        <h2
          className={css({
            fontSize: "2xl",
            fontWeight: "bold",
            color: "white",
          })}
        >
          {title}
        </h2>
        <p
          className={css({
            fontSize: "sm",
            color: "gray.100",
          })}
        >
          {count}個の項目
        </p>
      </div>
    </section>
  );
};
