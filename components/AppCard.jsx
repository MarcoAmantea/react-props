import posts from "../data/posts";



function AppCard({title, image, content, tags}) {
    const imagePath = `/img/${image}`;

  

    
    return (
        <div className= "card mb-3">
            <div >
                <img src='../hqdefault.jpg'alt="" className="card-img-top" />
            </div>
            <div>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>                    
                    { tags.map((curTag, index)=>(
                        <span key={index}>{curTag}</span>
                    ))} 
                    <p className="card-text">{content}</p>               
                <button className="btn btn-warning">
            LEGGI DI PIU
        </button>
                </div>                
            </div>
        </div>
    )
}

export default AppCard; 