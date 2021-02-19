
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import TableUI from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import { useEffect, useState } from 'react';

function Table(props) {
    const [columns,setColumns] = useState([]);
    const [rows,setRows] = useState([]);

    useEffect(() => {
        setColumns(props.columns);
    },[props.columns]);

    useEffect(() => {
        setRows(props.rows);
    },[props.rows]);

    return(
        <Paper>
            <TableContainer component={Paper}>
                <TableUI>
                    <TableHead>
                        <TableRow>
                            {
                                columns.map((col,keyCol) => {
                                    return(
                                        <TableCell key={keyCol}>{col.headerName}</TableCell>
                                    )
                                })
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            rows.map((row,keyRow) => {
                                return(
                                    <TableRow key={keyRow}>
                                        {
                                            columns.map((col,keyCol) => {
                                                return(
                                                    <TableCell key={keyRow+'-'+keyCol}>{row[col.field]}</TableCell>
                                                )
                                            })
                                        }
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </TableUI>
            </TableContainer>
        </Paper>
    );
}

export default Table;