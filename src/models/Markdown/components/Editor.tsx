import { FC, ReactNode } from "react";
import { css } from "../../../../styled-system/css";
import * as Tabs from "@radix-ui/react-tabs";
import { hstack } from "../../../../styled-system/patterns";
import { TabTrigger } from "./TabTrigger";

type Props = {
  editor: ReactNode;
  preview: ReactNode;
  footer: ReactNode;
};

export const Editor: FC<Props> = ({ editor, preview, footer }) => {
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
        <Tabs.Content value="editor">{editor}</Tabs.Content>
        <Tabs.Content value="preview">{preview}</Tabs.Content>
      </div>
      <hr
        className={css({
          border: "none",
          borderTop: "1px solid",
          borderColor: "gray.600",
        })}
      />
      <div>{footer}</div>
    </Tabs.Root>
  );
};
