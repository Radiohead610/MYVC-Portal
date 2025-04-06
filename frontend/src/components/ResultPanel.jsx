import React from 'react';

const ResultPanel = ({ result }) => {
    if (!result) {
        return (
            <div className="w-full bg-black text-white p-6 font-terminal">
                <p className="text-gray-400 italic">Query results will appear here...</p>
            </div>
        );
    }

    if (!result.success) {
        return (
            <div className="w-full bg-black text-red-400 p-6 border-l border-white font-terminal">
                <h2 className="text-lg font-bold mb-2">Error</h2>
                <p>{result.error}</p>
            </div>
        );
    }

    const rows = Array.isArray(result.data) && Array.isArray(result.data[0])
        ? result.data[0]
        : result.data;


    // Case 1: Not an array
    if (!Array.isArray(rows)) {
        return (
            <div className="w-full bg-black text-white p-6 border-l border-white font-terminal">
                <h2 className="text-lg font-bold mb-2 text-green-300">Query Executed Successfully</h2>
                <pre className="bg-black text-white text-sm p-4 border border-white rounded overflow-auto">
                    {JSON.stringify(rows, null, 2)}
                </pre>
            </div>
        );
    }

    // Case 2: Empty array
    if (rows.length === 0) {
        return (
            <div className="w-full bg-black text-white p-6 border-l border-white font-terminal">
                <p className="text-yellow-300">No results returned.</p>
            </div>
        );
    }

    // Case 3: table
    const columns = Object.keys(rows[0]);

    return (
        <div className="w-full bg-black text-white p-6 overflow-auto border-l border-white font-terminal">
            <table className="table-auto w-full border border-white">
                <thead>
                <tr className="bg-white text-black">
                    {columns.map((col) => (
                        <th key={col} className="px-4 py-2 border border-black">
                            {col}
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {rows.map((row, rowIndex) => (
                    <tr key={rowIndex} className="hover:bg-gray-800">
                        {columns.map((col) => (
                            <td key={col} className="px-4 py-2 border border-white text-sm">
                                {String(row[col])}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ResultPanel;
