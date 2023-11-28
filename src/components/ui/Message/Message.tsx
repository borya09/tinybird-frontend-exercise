import styles from "./Message.module.css";
import Icon, { IconType } from "../Icon";
import cn from "classnames";

const Icons: Record<MessageProps["type"], IconType> = {
  error: "circle-exclamation",
  info: "circle-info",
};

interface MessageProps {
  type: "error" | "info";
  text: string;
}

export default function Message({ type, text }: MessageProps) {
  return (
    <div
      className={cn(styles.container, {
        [styles.isError]: type === "error",
        [styles.isInfo]: type === "info",
      })}
    >
      <Icon icon={Icons[type]} />
      {text}
    </div>
  );
}
