import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import { useEffect, useState } from 'react';

function InputRadio(props) {
    const [valueInput,setValueInput] = useState('');

    useEffect(() => {
        setValueInput(props.value)
    },[props.value]);

    return(
        <FormControl>
            <FormLabel>Estado</FormLabel>
            <RadioGroup aria-label="Estado" name="Estado" value={valueInput} onChange={props.onChange}>
                <FormControlLabel value="" control={<Radio />} label="Todo" />
                <FormControlLabel value='Activo' control={<Radio />} label="Activo" />
                <FormControlLabel value='Inactivo' control={<Radio />} label="Inactivo" />
            </RadioGroup>
        </FormControl>
    )
}

export default InputRadio;