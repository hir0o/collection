import "@/common/markdown/style.scss";
import { FC } from "react";
import { css } from "../../../../styled-system/css";
import { markdownToHtml } from "@/common/markdown/parser";

type Props = {
  content: string;
};

export const ClipCard: FC<Props> = ({ content }) => {
  const html = markdownToHtml(content);

  return (
    <div
      className={css({
        bgColor: "gray.700",
        padding: 3,
        width: "100%",
        color: "gray.100",
      })}
    >
      <div className="markdown" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};
