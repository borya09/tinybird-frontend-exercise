import { PropsWithChildren } from "react";
import styles from "./Card.module.css";
import Icon, { IconType } from "../Icon";
import Message from "../Message";

interface CardProps {
  title: string;
  icon: IconType;
  loading?: boolean;
  error?: string | null | undefined;
}

export default function Card({
  title,
  icon,
  loading,
  error,
  children,
}: PropsWithChildren<CardProps>) {
  return (
    <article className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          <Icon icon={icon} />
          {title}
        </h1>
      </header>
      <div className={styles.content}>
        {!error ? children : <Message text={error} type="error" />}
      </div>
      {loading && <div className={styles.loading}></div>}
    </article>
  );
}
