import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import QueryPanel from '../components/QueryPanel';
import ResultPanel from '../components/ResultPanel';


const QueryPage = () => {
    const [result, setResult] = useState(null);

    return (
        <div className="min-h-screen flex flex-col bg-black text-white font-terminal">
            <div
                className="w-full bg-black text-white px-10 py-6 border-b-4 border-white text-3xl font-bold text-center shadow-[0_0_12px_rgba(0,255,255,0.4)] tracking-widest glitch z-10"
            >
                <Link to="/" className="hover:text-purple-300 transition duration-300">
                    MONTREAL YOUTH VOLLEYBALL CLUB
                </Link>
            </div>

            <main className="flex-grow grid grid-cols-1 lg:grid-cols-3">
                <div className="lg:col-span-1">
                    <QueryPanel onResult={setResult}/>
                </div>
                <div className="lg:col-span-2">
                    <ResultPanel result={result}/>
                </div>
            </main>

            <Footer/>
        </div>
    );
};

export default QueryPage;
