import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import InputRadio from '../components/InputRadio';
import Table from '../components/Table';
import { useEffect } from 'react';
import Axios from 'axios';
import { useState } from 'react';

function Home() {
    const columnas = [
        {field:'idcupon',headerName:'ID'},
        {field:'codigocupon',headerName:'Codigo'},
        {field:'porcentaje',headerName:'% Descuento'},
        {field:'fechadesde',headerName:'Inicia'},
        {field:'fechahasta',headerName:'Termina'},
        {field:'nombrestatus',headerName:'Estado'}
    ];

    const [filas, setFilas] = useState([]);
    const [filasFiltro, setFilasFiltro] = useState([]);

    useEffect(() => {
        getCupons();
    },[]);

    async function getCupons() {
        const res = await Axios.post('http://35.188.155.248/bk_getCupones')
            .then((response) => {
                return response.data.resultado;
            });
        
        setFilas(res);
        setFilasFiltro(res);
    }

    const [status,setStatus] = useState('')

    function changeRadio(e) {
        setStatus(e.target.value)

        const newFilas = [];
        const prevFilas = filasFiltro;

        prevFilas.map(fila => {
            if(e.target.value === fila.nombrestatus)
            {
                return newFilas.push(fila)
            }
            else if(e.target.value === '')
            {
                return newFilas.push(fila);
            }
        })

        setFilas(newFilas)
    }

    return(
        <Container maxWidth={'lg'} style={{marginTop:40}}>
            <h1>Lista de Cupones</h1>
            <Grid container>
                <Grid item lg={2}>
                    <InputRadio value={status} onChange={changeRadio}/>
                </Grid>
                <Grid item lg={10}>
                    <Table columns={columnas} rows={filas}/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home;