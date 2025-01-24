import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <div
                className="
flex
items-center
justify-center
w-screen
h-screen

"
            >
                <div className=" ">
                    <div className="flex flex-col items-center">
                        <h1 className="font-bold text-green-400 text-9xl">404</h1>

                        <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
                            <span className="text-red-500">Oops!</span> Page not found
                        </h6>

                        <p className="mb-8 text-center text-gray-500 md:text-lg">
                            The page you're looking for doesn't exist.
                        </p>

                        <Link to='/' className='bg-green-400 py-2 px-4 rounded font-bold text-white hover:bg-green-600'> GOHome</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;