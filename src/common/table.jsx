const components = {
  types: {
    table: ({ value }) => {
    

      const { rows } = value;
      if (!Array.isArray(rows) || rows.length === 0) return null;

      return (
        <div className="overflow-x-auto my-6">
          <table className="min-w-full border border-gray-300 text-sm">
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {(row.cells || []).map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className={`px-4 py-2 border border-gray-300 text-left ${
                        rowIndex === 0 ? 'font-bold text-black' : ''
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  }
};

export default components;
