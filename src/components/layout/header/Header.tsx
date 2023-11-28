import cn from "classnames";
import logo from "/logo.svg";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <>
      <a href="/">
        <img src={logo} alt="tinybird logo" />
      </a>
      <i className={cn(styles.avatar, "fa-regular fa-circle-user")}></i>
    </>
  );
}
