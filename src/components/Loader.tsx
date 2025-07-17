import { CircularProgress } from "@mui/material"

const Loader = () => {
    return (
        <div className="flex justify-center items-center w-full h-[450px]">
            <div className="flex flex-col items-center gap-1">
                <CircularProgress color="primary" />
            </div>
        </div>
    )
}

export default Loader;
