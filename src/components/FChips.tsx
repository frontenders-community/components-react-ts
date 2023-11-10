import { FunctionComponent, ReactElement } from "react";
import "./Fchips.css";

interface ChipsProps {
  label: string;
  size: "small" | "medium" | "large";
  rounded: boolean;
  icon?: ReactElement;
  type?: "primary" | "success" | "error" | "warning" | "info";
  appearance?: "solid" | "outline";
}

const Chips: FunctionComponent<ChipsProps> = ({
  label,
  icon,
  type = "primary",
  appearance = "solid",
  size,
  rounded = false,
}) => {
  return (
    <div
      className="chip"
      data-type={type}
      data-appearance={appearance}
      data-size={size}
      data-rounded={rounded ? "round" : null}
    >
      {icon}
      {label}
    </div>
  );
};

export default Chips;
