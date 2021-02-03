import { useEffect, useState } from "react"

function Thumbnail(props) {
    const [item,setItem] = useState(props.data)

    useEffect(() => {
        setItem(Object.assign({},props.data))
    },[props.data]);

    return(
        <div className="card mb-4 text-center">
            <img src={item.sprites.front_default} className="card-img-top" alt={item.sprites.front_default} />
            <div className="card-body">
                <span style={{fontSize:12}}>
                    Pokedex Number: <b>#{item.id}</b>
                </span>
                <hr />
                <h6 className="card-title text-capitalize">{item.name}</h6>
                {
                    item.types.map((object,keyObject) => {
                        switch (object.type.name) {
                            case 'grass':
                                return(
                                    <span className='badge text-uppercase mx-3' style={{backgroundColor:'green'}}>{object.type.name}</span>
                                )
                            case 'fire':
                                return(
                                    <span className='badge text-uppercase mx-3' style={{backgroundColor:'red'}}>{object.type.name}</span>
                                )
                            case 'water':
                                return(
                                    <span className='badge text-uppercase mx-3' style={{backgroundColor:'#0059ff'}}>{object.type.name}</span>
                                )
                            case 'bug':
                                return(
                                    <span className='badge text-uppercase mx-3' style={{backgroundColor:'#84b458'}}>{object.type.name}</span>
                                )
                            case 'normal':
                                return(
                                    <span className='badge text-uppercase mx-3' style={{backgroundColor:'#775221'}}>{object.type.name}</span>
                                )
                            case 'poison':
                                return(
                                    <span className='badge text-uppercase mx-3' style={{backgroundColor:'#680268'}}>{object.type.name}</span>
                                )
                            case 'flying':
                                return(
                                    <span className='badge text-uppercase mx-3' style={{backgroundColor:'#5b5bf3'}}>{object.type.name}</span>
                                )
                            case 'electric':
                                return(
                                    <span className='badge text-uppercase mx-3' style={{backgroundColor:'#ff0'}}>{object.type.name}</span>
                                )
                            case 'ground':
                                return(
                                    <span className='badge text-uppercase mx-3' style={{backgroundColor:'#e6bb6b'}}>{object.type.name}</span>
                                )
                            case 'fairy':
                                return(
                                    <span className='badge text-uppercase mx-3' style={{backgroundColor:'pink'}}>{object.type.name}</span>
                                )
                            case 'fighting':
                                return(
                                    <span className='badge text-uppercase mx-3' style={{backgroundColor:'#da5a11'}}>{object.type.name}</span>
                                )
                            case 'psychic':
                                return(
                                    <span className='badge text-uppercase mx-3' style={{backgroundColor:'#db7093'}}>{object.type.name}</span>
                                )
                            default:
                                break;
                        }
                    })
                }
            </div>
        </div> 
    )
}

export default Thumbnail;