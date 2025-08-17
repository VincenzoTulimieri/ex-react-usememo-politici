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
      <div className="container text-center">
        <h1>Lista dei politici</h1>
        <div className="row">
          {politicans && politicans.map(politican => (
          <div className="col-4 gy-3" key={politican.id}>
                <div className="card h-100 " >
                  <img src={politican.image} className="card-img-top" alt={politican.name} />
                  <div className="card-body">
                    <p className="card-text"><strong>Name:</strong> {politican.name}</p>
                    <p className="card-text"><strong>Political Office</strong>: {politican.position}</p>
                    <p className="card-text"><strong>Biografy:</strong> {politican.biography}</p>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
