import React from 'react'
import { useHistory } from 'react-router';

const Card = ({id, name, img = ''}) => {
    
    const history = useHistory();
    
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        history.push(`/details/${id}`)
    }
    
    // To fix error with imgs. Temporal fix maybe?
    const imgKey = "/revision/latest?cb="
    const fixOrReplaceImg = img.includes(imgKey) ? img.split(imgKey)[0] : "/assets/imageNotAvailable.png"
    
    return (
        <div className="card">
            <img className="card-img-top" src={fixOrReplaceImg} alt={`${name}'s preview`}/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <button onClick={handleClick} className="btn btn-dark">Read more</button>
            </div>
        </div>
    )
}

export default Card
