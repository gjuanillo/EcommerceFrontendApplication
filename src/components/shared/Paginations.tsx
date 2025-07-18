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

    const onChangeHandler = (_event: React.ChangeEvent<unknown>, value: number) => {
        params.set("page", value.toString());
        navigate(`${pathName}?${params.toString()}`);
    };
    return (
        <div className="flex items-center justify-between mt-8 flex-wrap">
            <p className="text-sm text-gray-400 mt-2 sm:mt-0 sm:ml-4">
                Showing page {paramValue} of {pageNumber} &mdash; Total {productNumber} items 
            </p>
            <Pagination onChange={onChangeHandler} page={paramValue} count={pageNumber} shape="rounded" defaultPage={1} siblingCount={2} />
        </div>
    );
}

export default Paginations;
