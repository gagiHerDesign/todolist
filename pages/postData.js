export default function PostInfo() {
  // postData到
  // https://wt-tp-service.wanin.tw/WebClientInterview/task
  const postData = async () => {
    try {
      const res = await fetch("https://wt-tp-service.wanin.tw/WebClientInterview/task", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "name": "test",
          "description": "test"
        })
      })
      const data = await res.json()
      console.log("data", (data))
    } catch (error) {
      console.log("error", error)
    }
  }


  return (
    <div>
      <h1>postData</h1>
      <button onClick={postData}>postData</button>
    </div>
  )
}