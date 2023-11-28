export type IconType =
  | "chart-line"
  | "database"
  | "users"
  | "taxi"
  | "money-check-dollar"
  | "gauge-high"
  | "circle-info"
  | "circle-exclamation"
  | "circle-dollar-to-slot";

interface IconProps {
  icon: IconType;
  onClick?: () => void;
}

export default function Icon({ icon, onClick }: IconProps) {
  return <i className={`fa-solid fa-${icon}`} onClick={onClick}></i>;
}
