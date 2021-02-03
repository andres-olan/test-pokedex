import { useContext, useEffect, useState } from 'react'
import Context from '../components/Context'
import Navbar from '../components/Navbar';
import Axios from 'axios';

function Pokemon() {
    const context = useContext(Context)
    const [item,setItem] = useState({})
    const [itemDamage,setItemDamage] = useState({})

    useEffect(() => {
        Axios.get('https://pokeapi.co/api/v2/pokemon/'+context.state)
            .then((response) => {
                setItem(response.data)
            })
    },[]);

    useEffect(() => {
        const damage = []
        if(Object.keys(item).length > 0)
        {
            item.types.map((object,keyObject) => {
                Axios.get('https://pokeapi.co/api/v2/type/'+object.type.name)
                    .then((response) => {
                        damage.push(response.data.damage_relations)
                    })
                   
            })
        }
        setItemDamage(damage)
    },[item]);
    

    return(
        <div>
            <Navbar />
            <div className='container'>
                <div className='row'>
                    <div className='col-3'>
                        {
                            Object.keys(item).length > 0
                            ?
                            <div>
                                <div className="row text-center">
                                    <div className='card mb-3' style={{backgroundColor:'hsla(0,0%,50.2%,.5)'}}>
                                        <div className='card-title'>Normal</div>
                                        <div className="row">
                                            <div className="col-6">
                                                <img src={item.sprites.front_default}/>
                                            </div>
                                            <div className="col-6">
                                                <img src={item.sprites.back_default}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row text-center">
                                    <div className='card' style={{backgroundColor:'rgba(128,0,128,.5)'}}>
                                        <div className='card-title'>Shiny</div>
                                        <div className="row">
                                            <div className="col-6">
                                                <img src={item.sprites.front_shiny}/>
                                            </div>
                                            <div className="col-6">
                                                <img src={item.sprites.back_shiny}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            : null
                        }
                    </div>
                    <div className='col-5'>
                        <div className="row">
                            <div className="col">
                                <h5>Pokedex</h5>
                                <div className='d-block rounded p-1' style={{backgroundColor:'lightgray',fontSize:20}}>{item.id}</div>
                                <br />
                                <h5>Height</h5>
                                <div className='d-block rounded p-1' style={{backgroundColor:'lightgray',fontSize:20}}>{item.height}</div>
                            </div>
                            <div className="col">
                                <h5>Name</h5>
                                <div className='d-block rounded p-1' style={{backgroundColor:'lightgray',fontSize:20}}>{item.name}</div>
                                <br />
                                <h5>Weight</h5>
                                <div className='d-block rounded p-1' style={{backgroundColor:'lightgray',fontSize:20}}>{item.weight}</div>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-5">
                                <h5>Types</h5>
                                {
                                    Object.keys(item).length > 0
                                    ?
                                    item.types.map((object,keyObject) => {
                                        switch (object.type.name) {
                                            case 'grass':
                                                return(
                                                    <span className='badge h5 text-uppercase mx-3' style={{fontSize:24,backgroundColor:'green'}}>{object.type.name}</span>
                                                )
                                            case 'fire':
                                                return(
                                                    <span className='badge h5 text-uppercase mx-3' style={{fontSize:24,backgroundColor:'red'}}>{object.type.name}</span>
                                                )
                                            case 'water':
                                                return(
                                                    <span className='badge h5 text-uppercase mx-3' style={{fontSize:24,backgroundColor:'#0059ff'}}>{object.type.name}</span>
                                                )
                                            case 'bug':
                                                return(
                                                    <span className='badge h5 text-uppercase mx-3' style={{fontSize:24,backgroundColor:'#84b458'}}>{object.type.name}</span>
                                                )
                                            case 'normal':
                                                return(
                                                    <span className='badge h5 text-uppercase mx-3' style={{fontSize:24,backgroundColor:'#775221'}}>{object.type.name}</span>
                                                )
                                            case 'poison':
                                                return(
                                                    <span className='badge h5 text-uppercase mx-3' style={{fontSize:24,backgroundColor:'#680268'}}>{object.type.name}</span>
                                                )
                                            case 'flying':
                                                return(
                                                    <span className='badge h5 text-uppercase mx-3' style={{fontSize:24,backgroundColor:'#5b5bf3'}}>{object.type.name}</span>
                                                )
                                            case 'electric':
                                                return(
                                                    <span className='badge h5 text-uppercase mx-3' style={{fontSize:24,backgroundColor:'#ff0'}}>{object.type.name}</span>
                                                )
                                            case 'ground':
                                                return(
                                                    <span className='badge h5 text-uppercase mx-3' style={{fontSize:24,backgroundColor:'#e6bb6b'}}>{object.type.name}</span>
                                                )
                                            case 'fairy':
                                                return(
                                                    <span className='badge h5 text-uppercase mx-3' style={{fontSize:24,backgroundColor:'pink'}}>{object.type.name}</span>
                                                )
                                            case 'fighting':
                                                return(
                                                    <span className='badge h5 text-uppercase mx-3' style={{fontSize:24,backgroundColor:'#da5a11'}}>{object.type.name}</span>
                                                )
                                            case 'psychic':
                                                return(
                                                    <span className='badge h5 text-uppercase mx-3' style={{fontSize:24,backgroundColor:'#db7093'}}>{object.type.name}</span>
                                                )
                                            default:
                                                break;
                                        }
                                    })
                                    : null
                                }
                            </div>
                            <div className='col'>
                                <h5>Abilities</h5>
                                <ul>
                                    {
                                        Object.keys(item).length > 0
                                        ?
                                        item.abilities.map((object,keyObject) => {
                                            return(
                                                <li key={keyObject}>{object.ability.name}</li>
                                            )
                                        })
                                        : null
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className='row'>
                            <div className="col">
                                <h5>Double Damage To</h5>
                                {
                                    itemDamage.length > 0
                                    ?
                                    itemDamage.map((object,keyobject) => {
                                        return(
                                            <div key={keyobject}>{JSON.stringify(object.damage_relations)}</div>
                                        )
                                    })
                                    : null
                                }
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col">
                                <h5>Double Damage From</h5>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col">
                                <h5>Half Damage To</h5>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col">
                                <h5>Half Damage From</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className='col-4'>
                        <h5>Games Where Appears</h5>
                        {
                            Object.keys(item).length > 0
                            ?
                            <ul>
                                {
                                    item.game_indices.map((object,keyObject) => {
                                        return(
                                            <li key={keyObject}>{object.version.name}</li>
                                        )
                                    })
                                }
                            </ul>
                            : null
                        }
                    </div>
                    <div className='col-8'>
                        <h5>Moves</h5>
                        <div className='d-flex justify-content-between' style={{flexWrap:'wrap'}}>
                            {
                                Object.keys(item).length > 0
                                ?
                                item.moves.map((object,keyObject) => {
                                    return(
                                        <div key={keyObject} className='m-1 p-1 text-uppercase rounded' style={{fontSize:12,backgroundColor:'lightgray'}}>{object.move.name}</div>
                                    )
                                })
                                : null
                            }
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pokemon;