import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

function HomePage() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/query');
    };

    return (
        <div className="min-h-screen bg-black text-white font-terminal flex flex-col items-center">
            <div className="w-full bg-black text-white px-10 py-6 border-b-4 border-white text-3xl font-bold text-center shadow-[0_0_12px_rgba(0,255,255,0.4)] tracking-widest glitch z-10">
                MONTREAL YOUTH VOLLEYBALL CLUB
            </div>


            <main className="flex-grow flex justify-center items-center w-full p-6">
                <div
                    className="border-2 border-white rounded-lg p-10 w-full max-w-4xl min-h-[600px] pixel-border crt-effect bg-black text-white shadow-[0_0_15px_rgba(255,255,255,0.3)]">


                    <div className="flex justify-between items-center mb-4">
                        <span className="text-s sm:text-sm text-white font-mono">Concordia University MYVC Database Portal</span>
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                    </div>


                    <hr className="border-white border-t mb-6"/>
                    <h1 className="text-4xl sm:text-4xl font-bold text-center text-purple-200 tracking-widest glitch mb-6 mt-10 pt-10">
                        Welcome to the MYVC Portal
                    </h1>

                    <p className="text-center text-lg pt-10 mt-10 mb-6 neon-glow-text">WHAT DO YOU WANT TO DO TODAY?</p>

                    <div className="flex justify-center mt-10">
                        <button
                            onClick={handleClick}
                            className="bg-white text-black font-bold px-6 py-2 rounded pixel-panel shadow hover:shadow-lg transition-all duration-300 ease-in-out
               transform hover:-translate-y-1 hover:scale-105 glow-on-hover"
                        >
                            GO TO QUERY PAGE
                        </button>
                    </div>
                </div>
            </main>

            <Footer/>
        </div>
    );
}

export default HomePage;
