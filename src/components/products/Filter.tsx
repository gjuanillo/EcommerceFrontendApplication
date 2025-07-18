import { FormControl, IconButton, InputLabel, MenuItem, Select, Tooltip, type SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";
import { RiFilterOffLine, RiSearch2Line, RiSortAsc, RiSortDesc } from "react-icons/ri";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

type Category = {
    categoryId: number,
    categoryName: string
}

type FilterProps = {
    categories: Category[]
}

const Filter = ({ categories }: FilterProps) => {
    const [searchParams] = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const pathName = useLocation().pathname;
    const navigate = useNavigate();

    const [category, setCategory] = useState<string>("all");
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
    const [searchTerm, setSearchTerm] = useState<string>("");

    useEffect(() => {
        const currentCategory = searchParams.get("category") || "all";
        const currentSortOrder = (searchParams.get("sortby") as "asc" | "desc") || "asc";
        const currentSearchTerm = searchParams.get("keyword") || "";
        setCategory(currentCategory);
        setSortOrder(currentSortOrder);
        setSearchTerm(currentSearchTerm);
    }, [searchParams]);

    useEffect(() => {
        const handler = setTimeout(() => {
            if (searchTerm) {
                searchParams.set("keyword", searchTerm);
            } else {
                searchParams.delete("keyword");
            }
            navigate(`${pathName}?${searchParams.toString()}`)
        }, 600);
        return () => {
            clearTimeout(handler);
        };
    }, [searchParams, searchTerm, navigate, pathName]);

    const handleCategoryChange = (event: SelectChangeEvent): void => {
        const selectedCategory = event.target.value;
        if (selectedCategory === "all") {
            params.delete("category");
        } else {
            params.set("category", selectedCategory);
        }
        navigate(`${pathName}?${params}`)
        setCategory(selectedCategory);
    };

    const handleClearFilters = (): void => {
        navigate({ pathname: window.location.pathname });
    }

    const toggleSortOrder = (): void => {
        setSortOrder((prev) => {
            const newOrder: "asc" | "desc" = prev === "asc" ? "desc" : "asc";
            params.set("sortby", newOrder);
            navigate(`${pathName}?${params}`)
            return newOrder
        });
    }

    return (
        <div className="flex lg:flex-row flex-col-reverse lg:justify-between justify-center items-center gap-4">
            {/* Search Bar */}
            <div className="relative flex items-center 2xl:w-[450px] sm:w-[420px] w-full">
                <input type="text" placeholder="Looking for something?" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
                    className="border border-gray-400 text-slate-800 rounded-md py-2 pl-10 pr-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-400" />
                <RiSearch2Line className="absolute left-3 text-slate-800 size={20}" />
            </div>

            {/* Category Selector */}
            <div className="flex sm:flex-row flex-col gap-4 items-center">
                <FormControl variant="outlined" size="small"
                    className="text-slate-800 border-slate-700">
                    <InputLabel id="category-select-label">Category</InputLabel>
                    <Select labelId="category-select-label" label="Category" value={category} onChange={handleCategoryChange}
                        className="min-w-[120px] text-slate-800 border-slate-700">
                        <MenuItem value="all">All</MenuItem>
                        {categories.map((category: Category) => (
                            <MenuItem key={category.categoryId} value={category.categoryName}>{category.categoryName}</MenuItem>
                        ))}
                    </Select>
                </FormControl>

                {/* Sort & Filter */}
                <Tooltip title="Sorted by price: asc">
                    <IconButton size="small" onClick={toggleSortOrder}
                        className="flex items-center gap-2 h-10">
                        {sortOrder === "asc" ?
                            <RiSortAsc /> : <RiSortDesc />
                        }
                    </IconButton>
                </Tooltip>
                <Tooltip title="Clear Filter">
                    <IconButton size="small" onClick={handleClearFilters}
                        className="flex items-center gap-2 h-10">
                        <RiFilterOffLine />
                    </IconButton>
                </Tooltip>
            </div>
        </div >
    )
}

export default Filter;
