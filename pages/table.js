import * as React from 'react';
import { useState, useEffect } from 'react'
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID' },
  { field: 'name', headerName: 'Name', width: 100 },
  { field: 'description', headerName: 'Description', width: 300 },
  { field: 'created_at', headerName: '創建時間' },
  { field: 'updated_at', headerName: '更新時間' },
  { field: 'is_completed', headerName: '完成' }
]


export default function DataTable() {
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



  return (
    <div style={{ height: 400, width: '100%', color: 'white' }}>
      <DataGrid
        rows={tableData}
        columns={columns}
        getRowId={(data) => data.id}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
      {/* 印出回傳值 */}

      <Button onClick={getData}>重新取得資料</Button>

      {
        tableData.map((item, i) => {
          return (
            <ul key={i}>
              <li>{tableData[i].id}</li>
              <li>{tableData[i].name}</li>
              <li>{tableData[i].description}</li>
            </ul>
          )
        })
      }
    </div>
  );
}


