// src/components/QueryPanel.jsx
import React, { useState } from 'react';
import axios from 'axios';

const QueryPanel = ({ onResult }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:8100/api/query', {
                sql: query
            });
            onResult(response.data);
        } catch (err) {
            console.error(err);
            onResult({ success: false, error: err.message });
        }
    };

    return (
        <div className="w-full h-full bg-black text-white p-6 border-r border-white font-terminal">
            <h2 className="text-xl text-purple-300 mb-10 mt-10">Enter your SQL query below:</h2>
            <textarea
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full h-64 p-4 mb-10 bg-black text-white border border-white rounded resize-none font-mono text-sm shadow-[0_0_10px_rgba(255,255,255,0.1)]"
                placeholder="e.g. SELECT * FROM Locations;"
            />
            <div className="flex justify-end mt-4">
                <buttonnpm
                    onClick={handleSubmit}
                    className="bg-white text-black font-bold px-6 py-2 rounded hover:bg-gray-300 transition-all shadow hover:shadow-lg"
                >
                    Run Query
                </buttonnpm>
            </div>
        </div>
    );
};

export default QueryPanel;
