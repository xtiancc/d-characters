import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router'
import Card from '../components/Card'
import NavButtons from '../components/NavButtons'
import Loading from '../components/Loading'

import './Home.css'

const Home = () => {

    const [characters, setCharacters] = useState([]);
    const [navigator, setNavigator] = useState({});

    const {id} = useParams()

    const getCharacters = async () => {
        const response = await fetch(`https://api.disneyapi.dev/characters?page=${id}`);
        const data = await response.json()
        
        setCharacters(data.data)
        setNavigator({
            nextPage: data.nextPage,
            previousPage: data.previousPage
        })
    }

    useEffect(() => {
        getCharacters()
        // eslint-disable-next-line
    }, [id])

    return (
        <>
            <h2>D's Characters</h2>
            <hr/>
            {characters.length === 0 
                ? <Loading/>
                : ( <>
                    <div className="grid-container">
                        {
                            characters.map( char => <Card key={char._id} name={char.name} id={char._id} img={char.imageUrl} />)
                        }
                    </div>
                    <NavButtons id={id} data={navigator}/>
                </>)
                
            }
            
        </>
    )
}

export default Home
