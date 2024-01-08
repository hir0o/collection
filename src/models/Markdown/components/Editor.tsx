"use client";
import { FC, useState } from "react";
import { css } from "../../../../styled-system/css";
import * as Tabs from "@radix-ui/react-tabs";
import { MarkdownViewer } from "./MarkdownViewer";
import { hstack } from "../../../../styled-system/patterns";
import { TabTrigger } from "./TabTrigger";

type Props = {};

export const Editor: FC = () => {
  const [markdown, setMarkdown] = useState("");
  return (
    <Tabs.Root
      className={css({
        width: "100%",
        bgColor: "gray.700",
        color: "gray.100",
        padding: 3,
      })}
      defaultValue="editor"
    >
      <Tabs.List
        className={hstack({
          gap: 2,
        })}
      >
        <Tabs.Trigger value="editor">
          <TabTrigger>Markdown</TabTrigger>
        </Tabs.Trigger>
        <Tabs.Trigger value="preview">
          <TabTrigger>Preview</TabTrigger>
        </Tabs.Trigger>
      </Tabs.List>
      <div
        className={css({
          paddingY: 4,
        })}
      >
        <Tabs.Content value="editor">
          <textarea
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            placeholder="コメントを追加"
            className={css({
              width: "100%",
              resize: "vertical",
              bgColor: "transparent",
              padding: 2,
              _focusVisible: {
                outlineColor: "blue.500",
                outlineStyle: "solid",
                outlineWidth: "2px",
                borderRadius: "sm",
              },
            })}
          />
        </Tabs.Content>
        <Tabs.Content value="preview">
          <MarkdownViewer content={markdown} />
        </Tabs.Content>
      </div>
    </Tabs.Root>
  );
};
