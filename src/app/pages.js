import { useState } from 'react'

export default function Home() {
  const [data, setData] = useState([0])

  const getData = async () => {
    try {
      const res = await fetch("https://wt-tp-service.wanin.tw/WebClientInterview/task")
      const data = await res.json()
      console.log("data", (data))
      setData(data)
    } catch (error) {
      console.log("error", error)
    }
  }


  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <button onClick={getData}>666</button>
      {/* 印出回傳值 */}
      {
        data.map((item, i) => {
          return (
            <ul key={i}>
              <li>{data[i].id}</li>
              <li>{data[i].name}</li>
              <li>{data[i].description}</li>
            </ul>
          )
        })
      }

    </div>
  )
}