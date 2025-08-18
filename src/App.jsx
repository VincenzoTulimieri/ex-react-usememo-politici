import { useState, useMemo, useEffect } from 'react'

async function fetchJson(url) {
  const response = await fetch(url)
  const obj = response.json()
  return obj;
}
function App() {
  const [politicans, setPoliticans] = useState([])
  const [search, setSearch] = useState('')

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


  const filteredPoliticans = useMemo(()=>{
    return politicans.filter((politican)=>{
      const isInName = politican.name.toLowerCase().includes(search.toLocaleLowerCase())
      const isInBio = politican.biography.toLowerCase().includes(search.toLocaleLowerCase())
      return isInName || isInBio
    })
  },[search, politicans])

  return (
    <>
      <h1 className='text-center'>Lista dei politici</h1>
      <div className="container d-flex justify-content-end p-2">
          <div className="col-auto">
            <input type="text" className="form-control" placeholder="Cerca" value={search} onChange={(e)=>setSearch(e.target.value)} />
          </div>
      </div>
      <div className="container text-center">
        <div className="row">
          {filteredPoliticans && filteredPoliticans.map(politican => (
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