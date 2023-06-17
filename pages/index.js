import { useState, useEffect } from 'react'

export default function Home() {
  const [data, setData] = useState([0])

  // 取得資料
  const getData = async () => {
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_WEB_TASK)
      const data = await res.json()
      console.log("data", (data))
      setData(data)
    } catch (error) {
      console.log("error", error)
    }
  }

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_WEB_TASK)
      .then((data) => data.json())
      .then((data) => setData(data))

  }, [])


  return (
    <div className="container h-screen mx-auto my-5 px-4 ">
      <main className="flex flex-wrap items-center">
        {/* 任務列表 */}
        <section className="flex-auto w-5/6  md:w-3/6 h-2/3 border-4">
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
        </section>
        {/* 編輯/新增 */}
        <section className="flex-auto w-5/6 md:w-3/6 h-2/3 border-4">
          <h1 className="text-3xl font-bold underline">54564564</h1>
        </section>
      </main>
    </div>
  )
}