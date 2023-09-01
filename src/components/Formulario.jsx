import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from '../data/monedas'

const InputSumbit = styled.input`
    background-color:#9497FF;
    border:none;
    width: 100%;
    padding:10px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    cursor: pointer;

    &:hover {
        background-color: #7A7DFD;
        
    }
`

const Formulario = () => {

    const [ moneda, SelectMonedas ] = useSelectMonedas('Elige tu Moneda', monedas)
    // const [ SelectCriptomonedas ] = useSelectMonedas('Elige tu Criptomoneda')

    return (
        <div>
            <SelectMonedas />

            {/* <SelectCriptomonedas /> */}
            <InputSumbit 
                type='submit' 
                value='Cotizar'
            />
        </div>
  )
}

export default Formulario