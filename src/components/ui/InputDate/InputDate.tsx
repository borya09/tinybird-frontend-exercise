import { ChangeEvent } from "react";
import styles from "./InputDate.module.css";

interface InputDateProps {
  label: string;
  name: string;
  value: string | undefined;
  min?: string | undefined;
  max?: string | undefined;
  onChange: (date: string) => void;
}

export default function InputDate({ label, name, value, min, max, onChange }: InputDateProps) {

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <label className={styles.container}>
      {label}
      <input
        type="date"
        name={name}
        className={styles.input}
        value={value || ""}
        min={min}
        max={max}
        onChange={handleChange}
      ></input>
    </label>
  );
}
