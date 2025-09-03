import React, { useState } from "react";
import { jwtDecode } from "jwt-decode";

const JwtDecoderUI = () => {
    const [token, setToken] = useState("");
    const [error, setError] = useState("");
    const [Datatoken, setDatatoken] = useState({});
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!token) {
            setError(" Enter a token above");
            return;
        }

        try {
            const data = jwtDecode(token); // will throw if invalid
            console.log("Decoded Token:", data);

            setDatatoken(data);
            setError(""); 
            setToken("")
        } catch (err) {
            console.error("Invalid JWT:", err.message);
            setError(" Invalid JWT Token");
            setDatatoken(null); 
        }
    };
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-6 flex flex-col">


                <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center text-gray-800">
                    🔑 JWT Decoder
                </h1>


                <form onSubmit={handleSubmit}>
                    <textarea
                        value={token}
                        onChange={(e) => setToken(e.target.value)}
                        className="w-full h-32 sm:h-40 p-3 border rounded-lg shadow-sm 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                        placeholder="Paste your JWT token here..."
                    />


                    <button
                    type="submit"
                        className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg 
                     hover:bg-blue-700 transition text-sm sm:text-base"
                    >
                        Decode JWT
                    </button>
                </form>


                <p className="text-red-600 mt-3  text-sm sm:text-base">
                        {error}
                    </p>
                <div className="mt-6 space-y-4 flex-1">
                    <div>
                        <h2 className="font-semibold text-gray-700 mb-2">Payload</h2>
                        <pre className="bg-gray-900 text-yellow-300 p-3 rounded-lg overflow-auto 
                            max-h-40 text-xs sm:text-sm">
                            {`${JSON.stringify(Datatoken, null, 2)}`}
                        </pre>
                    </div>
                </div>


                <footer className="mt-6 text-center text-gray-500 text-xs sm:text-sm">
                    Built by <span className="font-semibold text-blue-600">Kiran</span> •{" "}
                    <a
                        href="https://kirran-dev.onrender.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        kiran.dev
                    </a>
                </footer>
            </div>
        </div>
    );
};

export default JwtDecoderUI;
