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

  const rows = Array.isArray(result.data) ? result.data : null;


    // Case 1: Not an array or null return
    if (!rows || !Array.isArray(rows) || rows.length === 0 || typeof rows[0] !== 'object') {
        const meta = result.data;
        return (
            <div className="w-full bg-black text-white p-6 border-l border-white font-terminal">
                <h2 className="text-lg font-bold mb-2 text-green-300">Query Executed Successfully</h2>
                <ul className="text-sm leading-relaxed">
                    {meta?.message && <li><span className="text-cyan-300">Message:</span> {meta.message}</li>}
                    {meta?.affectedRows !== undefined &&
                        <li><span className="text-cyan-300">Affected Rows:</span> {meta.affectedRows}</li>}
                    {meta?.insertId !== undefined &&
                        <li><span className="text-cyan-300">Insert ID:</span> {meta.insertId}</li>}
                    {(!meta?.message && !meta?.affectedRows && !meta?.insertId) && (
                        <li className="italic text-gray-400">No additional details returned.</li>
                    )}
                </ul>
            </div>
        );
    }


    // Case 2: table
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
