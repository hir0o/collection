import { forwardRef } from "react";
import { css } from "../../../../styled-system/css";

export const Textarea = forwardRef<HTMLTextAreaElement>((props, ref) => {
  return (
    <textarea
      ref={ref}
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
      {...props}
    />
  );
});

Textarea.displayName = "Textarea";
