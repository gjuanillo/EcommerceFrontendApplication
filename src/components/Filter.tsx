import { Button, FormControl, InputLabel, MenuItem, Select, Tooltip } from "@mui/material";
import { useState, type ChangeEvent } from "react";
import { FiRefreshCw } from "react-icons/fi";
import { FaArrowUp, FaSearch } from "react-icons/fa";

type Category = {
    categoryId: number,
    categoryName: string
}

const Filter = () => {
    const categories: Category[] = [
        { categoryId: 1, categoryName: "Central Processing Unit (CPU)" },
        { categoryId: 2, categoryName: "Graphics Processing Unit (GPU)" },
        { categoryId: 3, categoryName: "Motherboard" },
        { categoryId: 4, categoryName: "Memory" },
        { categoryId: 5, categoryName: "Solid State/Hard Disk Drives (SSD/HDD)" },
        { categoryId: 6, categoryName: "CPU Cooler/Fans" },
        { categoryId: 7, categoryName: "Power Supply Unit (PSU)" },
        { categoryId: 8, categoryName: "PC Case" },
    ];
    const [category, setCategory] = useState<string>("all");
    const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setCategory(event.target.value)
    };
    return (
        <div className="flex lg:flex-row flex-col-reverse lg:justify-between justify-center items-center gap-4">
            {/* Search Bar */}
            <div className="relative flex items-center 2xl:w-[450px] sm:w-[420px] w-full">
                <input type="text" placeholder="Looking for something?"
                    className="border border-gray-400 text-slate-800 rounded-md py-2 pl-10 pr-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-400" />
                <FaSearch className="absolute left-3 text-slate-800 size={20}" />
            </div>

            {/* Category Selector */}
            <div className="flex sm:flex-row flex-col gap-4 items-center">
                <FormControl variant="outlined" size="small"
                    className="text-slate-800 border-slate-700">
                    <InputLabel id="category-select-label">Category</InputLabel>
                    <Select labelId="category-select-label" label="Category" value={category} onChange={() => handleCategoryChange}
                        className="min-w-[120px] text-slate-800 border-slate-700">
                        <MenuItem value="all">All</MenuItem>
                        {categories.map((category: Category) => (
                            <MenuItem key={category.categoryId} value={category.categoryName}>{category.categoryName}</MenuItem>
                        ))}
                    </Select>
                </FormControl>

                {/* Sort & Filter */}
                <Tooltip title="Sorted by price: asc">
                    <Button variant="outlined" color="secondary"
                        className="flex items-center gap-2 h-10">
                        Sort By
                        <FaArrowUp />
                    </Button>
                </Tooltip>
                <Tooltip title="Clear Filter">
                    <Button variant="outlined" color="secondary"
                        className="flex items-center gap-2 h-10">
                        Clear Filter
                        <FiRefreshCw />
                    </Button>
                </Tooltip>
            </div>
        </div>
    )
}

export default Filter;
