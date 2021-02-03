import { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Axios from 'axios';
import Thumbnail from "../components/Thumbnail";
import Context from '../components/Context';
import { Redirect } from 'react-router-dom'

function Home() {
    const [pokedex, setPokedex] = useState([]);
    const [pokemon, setPokemon] = useState([]);
    const [redirect,setRedirect] = useState(false);
    const context = useContext(Context);

    useEffect(() => {
        Axios.get('https://pokeapi.co/api/v2/pokedex/1/')
            .then((response) => {
                setPokedex(response.data.pokemon_entries)
            })
    },[])

    useEffect(() => {
        const pokemonList = [];

        if(pokedex.length > 0)
        {
            pokedex.map((pokedexList,keyPokedexList) => {
                if(keyPokedexList < 100)
                {
                    Axios.get('https://pokeapi.co/api/v2/pokemon/'+pokedexList.entry_number+'/')
                        .then((response) => {
                            pokemonList.push(response.data)
                        })
                }
            })
        }
        
        setTimeout(() => {
            const order = pokemonList.sort((a, b) => a['order'] - b['order']);

            setPokemon(order)
        },1000)
    },[pokedex])

    function clickPokemon(data) {
        context.setContext(data);
        setRedirect(true);
    }

    return(
        redirect === false
        ?
        <div>
            <Navbar />
            <div className='container'>
                <div className='row'>
                    {
                        pokemon.length > 0
                        ?
                        pokemon.map((item,keyItem) => {
                            return(
                                <div className='col-2' key={keyItem+1} onClick={() => {clickPokemon(item.id)}}>
                                    <Thumbnail data={item}  />
                                </div>
                            )
                        })
                        : null
                    }
                </div>
            </div>
        </div>
        : 
        <Redirect to='/pokemon'/>
    )
}

export default Home;