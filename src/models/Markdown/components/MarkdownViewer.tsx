import "@/models/Markdown/style.scss";
import { FC } from "react";
import { Content } from "../type";
import { markdownToHtml } from "@/models/Markdown/parser";

type Props = {
  content: Content;
};

export const MarkdownViewer: FC<Props> = ({ content }) => {
  const html = markdownToHtml(content);

  return (
    <div className="markdown" dangerouslySetInnerHTML={{ __html: html }} />
  );
};
