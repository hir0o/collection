import { FC, ReactNode } from "react";
import { css } from "../../../../styled-system/css";

export const TabTrigger: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <span
      className={css({
        "[aria-selected='true'] &": {
          color: "blue.500",
        },
      })}
    >
      {children}
    </span>
  );
};
