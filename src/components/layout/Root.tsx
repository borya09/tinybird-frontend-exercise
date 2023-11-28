import { PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import styles from "./Root.module.css";
import Nav from "./nav";
import Header from "./header";

export default function Root({ children }: PropsWithChildren) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Header />
      </header>
      <nav className={styles.nav}>
        <Nav />
      </nav>
      <main className={styles.main}>{children || <Outlet />}</main>
    </div>
  );
}
