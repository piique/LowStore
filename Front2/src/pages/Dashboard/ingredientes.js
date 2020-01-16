import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import InputAdornment from '@material-ui/core/InputAdornment';
import Autocomplete from '@material-ui/lab/Autocomplete';

const medidas = [
    { title: 'Gramas', id: 1994 },
    { title: 'Kilo', id: 1972 },
    { title: 'Litro', id: 1974 },
    { title: 'Centimetros', id: 2008 },
    { title: 'Colher de chá', id: 1957 }
];

class Ingredientes extends Component {
  render() {
    return (
        <form noValidate autoComplete="off" style={{width: '100%', margin:'3px'}}>
            <TextField 
            id="ingredientName" 
            label="Nome" 
            variant="outlined" 
            fullWidth
            style={{ marginBottom: 15 }}
            />
            <TextField 
            id="ingredientPrice" 
            label="Preço" 
            variant="outlined" 
            fullWidth
            InputProps={{
                startAdornment: <InputAdornment position="start">R$</InputAdornment>,
              }}
            style={{ marginBottom: 15 }}
            />
            <Autocomplete
            id="ingredientMeasure"
            options={medidas}
            getOptionLabel={option => option.title}
            renderInput={params => (
                <TextField {...params} label="Medida" variant="outlined" fullWidth />
            )}
            />
            <ButtonGroup color="primary" aria-label="outlined primary button group" 
            style={{float: 'right', position: 'absolute', top: '88%', left: '37%'}}>
                <Button>Cancelar</Button>
                <Button>Salvar</Button>
            </ButtonGroup>
        </form>
    );
  }
}

export default Ingredientes;