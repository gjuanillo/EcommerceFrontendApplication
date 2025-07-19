import type { Description } from "@headlessui/react";
import ProductCard from "./shared/ProductCard";
import { products } from "./TempData";

const About = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-slate-800 text-4xl font-bold text-center mb-12">
                About Us
            </h1>
            <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <p className="text-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="w-full md:w-1/2 mb-6 md:mb-0">
                    <img src="https://placehold.co/600x400" alt="About Us"
                        className="w-full h-auto rounded-lg shadow-lg transform 
                        transition-transform duration-300 hover:scale-105" />
                </div>
            </div>
            <div>
                <h1 className="text-slate-800 text-4xl font-bold text-center mb-12">
                    Our Products
                </h1>
                <div className="grid grid-cols-1 mb:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product, i) => (
                        <ProductCard key={i} image={product.image}
                            productName={product.productName}
                            description={product.description}
                            specialPrice={product.specialPrice} price={product.price}
                            productId={product.productId} quantity={product.quantity}
                            discount={product.discount} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default About;
