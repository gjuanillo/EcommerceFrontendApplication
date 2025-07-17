import { Skeleton } from "@mui/material";

const ProductSkeletonLoader = () => {
    return (
        <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-y-6 gap-x-6 pt-14 pb-6">
            {Array.from({ length: 8 }).map((_, idx) => (
                <div key={idx} className="rounded-lg shadow-xl overflow-hidden transition-shadow duration-300">
                    {/* Image Skeleton */}
                    <div className="w-full overflow-hidden aspect-[3/2]">
                        <Skeleton variant="rectangular" width="100%" height="100%" />
                    </div>

                    {/* Text & Button Skeleton */}
                    <div className="p-4 space-y-2">
                        <Skeleton variant="text" height={28} width="60%" />
                        <Skeleton variant="text" height={20} width="100%" />
                        <Skeleton variant="text" height={20} width="90%" />
                        <div className="flex items-center justify-between pt-4">
                            <div className="flex flex-col space-y-1">
                                <Skeleton variant="text" height={20} width={60} />
                                <Skeleton variant="text" height={28} width={80} />
                            </div>
                            <Skeleton variant="rectangular" width={144} height={36} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductSkeletonLoader;
