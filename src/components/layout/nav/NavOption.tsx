import { NavLink } from "react-router-dom";
import cn from "classnames";
import styles from "./NavOption.module.css";
import Icon, { IconType } from "../../ui/Icon/Icon";

interface NavOptionProps {
  text: string;
  to: string;
  icon: IconType;
}

export default function NavOption({ text, to, icon }: NavOptionProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(styles.option, isActive ? styles.isActive : "")
      }
    >
      <Icon icon={icon} />
      {text}
    </NavLink>
  );
}
