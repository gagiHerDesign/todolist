import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTable } from 'react-table';

const MyTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.tvmaze.com/search/shows?q=snow');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  console.log("data", data);

  const columns = [
    {
      Header: 'Show',
      accessor: 'show.name',
    },
    {
      Header: 'Language',
      accessor: 'show.language',
    },
    {
      Header: 'Type',
      accessor: 'show.type',
    },
  ];

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  // return (
  //   <table {...getTableProps()} className="table">
  //     <thead>
  //       {headerGroups.map(headerGroup => (
  //         <tr {...headerGroup.getHeaderGroupProps()} key={i}>
  //           {headerGroup.headers.map(column => (
  //             <th {...column.getHeaderProps()}>{column.render('Header')}</th>
  //           ))}
  //         </tr>
  //       ))}
  //     </thead>
  //     <tbody {...getTableBodyProps()}>
  //       {rows.map(row => {
  //         prepareRow(row);
  //         return (
  //           <tr {...row.getRowProps()}>
  //             {row.cells.map(cell => (
  //               <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
  //             ))}
  //           </tr>
  //         );
  //       })}
  //     </tbody>
  //   </table>
  // );
};

export default MyTable;
