import { Pagination } from "@mui/material";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

type PaginationProps = {
    pageNumber: number,
    productNumber: number
}
const Paginations = ({ pageNumber, productNumber }: PaginationProps) => {
    const [searchParams] = useSearchParams();
    const pathName = useLocation().pathname;
    const params = new URLSearchParams(searchParams);
    const navigate = useNavigate();
    const paramValue = searchParams.get("page") ? Number(searchParams.get("page")) : 1;

    const onChangeHandler = (event, value) => {
        params.set("page", value.toString())
        navigate(`${pathName}?${params.toString()}`)
    }
    return (
        <>
            <Pagination onChange={onChangeHandler} page={paramValue} count={pageNumber} shape="rounded" defaultPage={1} siblingCount={2} />
        </>
    );
}

export default Paginations;
