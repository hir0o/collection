import MarkdownIt from "markdown-it";
import { sanitize } from "./sanitizer";
import { R } from "../../common/lib/remeda";

const md = MarkdownIt("zero", {
  breaks: true,
  linkify: true,
});

md.enable("emphasis");
md.enable("link");
md.enable("list");
md.enable("newline");
md.enable("linkify");
md.enable("image");
md.enable("heading");
md.enable("paragraph");
md.enable("blockquote");
md.enable("code");
md.enable("fence");
md.enable("hr");
md.enable("html_block");
md.enable("html_inline");
md.enable("table");
md.enable("text");

export const markdownToHtml = (text: string): string => {
  if (R.isEmpty(text)) return "";

  return sanitize(md.render(text));
};
