import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 text-center">
            <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
            <p className="text-xl text-gray-600 mb-6">Oops! The page you're looking for doesn't exist.</p>
            <Link
                to="/"
            >
                <button
                    className="font-semibold w-[300px] py-2 px-4 border border-[#3E5F44] text-[#3E5F44] hover:bg-[#3E5F44] hover:text-white transition duration-300 flex items-center justify-center gap-2 rounded-sm">
                    Return to Home
                </button>
            </Link>
        </div>
    );
};

export default NotFound;
