// const components = {
//   types: {
//     table: ({ value }) => {
    

//       const { rows } = value;
//       if (!Array.isArray(rows) || rows.length === 0) return null;

//       return (
//         <div className="overflow-x-auto my-6">
//           <table className="min-w-full border border-gray-300 text-sm">
//             <tbody>
//               {rows.map((row, rowIndex) => (
//                 <tr key={rowIndex}>
//                   {(row.cells || []).map((cell, cellIndex) => (
//                     <td
//                       key={cellIndex}
//                       className={`px-4 py-2 border border-gray-300 text-left ${
//                         rowIndex === 0 ? 'font-bold text-black' : ''
//                       }`}
//                     >
//                       {cell}
//                     </td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       );
//     }
//   }
  
// };

// export default components;
import { urlForImage } from '@/sanityConfig';

const components = {
  types: {
    // ✅ table block
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
    },

    // ✅ image block
    image: ({ value }) => {
      if (!value?.asset) return null;
      const src = urlForImage(value).auto('format').fit('max').url();
      const alt = value.alt || 'Blog image';
      return (
        <img
          src={src}
          alt={alt}
          style={{
            maxWidth: '100%',
            height: 'auto',
            borderRadius: '8px',
            margin: '1rem 0',
          }}
        />
      );
    },
  },
};

export default components;

