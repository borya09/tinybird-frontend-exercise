import styles from "./Nav.module.css";
import NavOption from "./NavOption";

export default function Nav() {
  return (
    <ul className={styles.container}>
      <li>
        <NavOption text="Invoiced Amount" to="/" icon="money-check-dollar" />
      </li>
      <li>
        <NavOption text="Other" to="/other" icon="database" />
      </li>
    </ul>
  );
}
