import { useState, useMemo, useEffect } from 'react'

async function fetchJson(url) {
  const response = await fetch(url)
  const obj = response.json()
  return obj;
}
function App() {
  const [politicans, setPoliticans] = useState(null)

  useEffect(() => {
    async function promise() {
      const politicans = await fetchJson('http://localhost:3333/politicians')
      return politicans
    }
    (async () => {
      const politicans = await promise()
      return setPoliticans(politicans)
    })()
  }, [])



  return (
    <>
      <div class="container text-center">
        <div class="row">
          <div class="col">
            Column
          </div>
          <div class="col">
            Column
          </div>
          <div class="col">
            Column
          </div>
        </div>
      </div>
    </>
  )
}

export default App
