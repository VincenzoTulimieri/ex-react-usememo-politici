export default function Cards({image, name, position, biography}){
    console.log('card')
    return(
       <div className="col-4 gy-3">
              <div className="card h-100 " >
                <img src={image} className="card-img-top" alt={name} />
                <div className="card-body">
                  <p className="card-text"><strong>Name:</strong> {name}</p>
                  <p className="card-text"><strong>Political Office</strong>: {position}</p>
                  <p className="card-text"><strong>Biografy:</strong> {biography}</p>
                </div>
              </div>
            </div>
    )
}