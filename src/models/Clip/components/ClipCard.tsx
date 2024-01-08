import { FC } from "react";
import { css } from "../../../../styled-system/css";
import { markdownToHtml } from "@/models/Markdown/parser";
import { MarkdownViewer } from "@/models/Markdown/components/MarkdownViewer";

type Props = {
  content: string;
};

export const ClipCard: FC<Props> = ({ content }) => {
  return (
    <div
      className={css({
        bgColor: "gray.700",
        padding: 3,
        width: "100%",
        color: "gray.100",
      })}
    >
      <MarkdownViewer content={content} />
    </div>
  );
};
