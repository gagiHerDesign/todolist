import { useState, useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';



export default function SimpleTable() {
  const [tableData, setTableData] = useState([])

  // 取得資料
  const getData = async () => {
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_WEB_TASK)
      const data = await res.json()
      console.log("data", (data))
      setTableData(data)
    } catch (error) {
      console.log("error", error)
    }
  }

  useEffect(() => {
    fetch("https://wt-tp-service.wanin.tw/WebClientInterview/task")
      .then((data) => data.json())
      .then((data) => setTableData(data))
  }, [])

  return (<>
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              ID
            </TableCell>
            <TableCell align="right">
              NAME
            </TableCell>
            <TableCell align="right">
              Description
            </TableCell>
            <TableCell align="right">
              創建時間
            </TableCell>
            <TableCell align="right">
              更新時間
            </TableCell>
            <TableCell align="right">
              完成
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((item) => (
            <TableRow
              key={item.id}
              sx={{
                '&:last-child td, &:last-child th':
                  { border: 0 }
              }}
            >
              <TableCell component="th" scope="row">
                {item.id}
              </TableCell>
              <TableCell align="right">
                {item.name}
              </TableCell>
              <TableCell align="right">
                {item.description}
              </TableCell>
              <TableCell align="right">
                {item.created_at}
              </TableCell>
              <TableCell align="right">
                {item.updated_at}
              </TableCell>
              <TableCell align="right">
                {(item.is_completed) ? "是" : "否"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <button onClick={getData}>getData</button>
  </>
  );
}
