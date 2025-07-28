import { CircularProgress } from "@mui/material";

interface LoaderProps {
  containerClassName?: string;
  innerClassName?: string;
  spinnerSize?: number;
  color?: "primary" | "secondary" | "inherit" | "success" | "error" | "info" | "warning";
}

const Loader: React.FC<LoaderProps> = ({
  containerClassName = "flex justify-center items-center w-full h-[450px]",
  innerClassName = "flex flex-col items-center gap-1",
  spinnerSize = 40,
  color = "primary"
}) => {
  return (
    <div className={containerClassName}>
      <div className={innerClassName}>
        <CircularProgress size={spinnerSize} color={color} />
      </div>
    </div>
  );
};

export default Loader;
