import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import Swal from 'sweetalert2'
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
    margin-top:20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    cursor: pointer;
    margin-bottom:20px;
    &:hover {
        background-color: #7A7DFD;
        
    }
`

const Formulario = ({setMonedas}) => {

    const [criptos, setCriptos ] = useState([])

    const [ moneda, SelectMonedas ] = useSelectMonedas('Elige tu Moneda', monedas)
    const [ criptomoneda, SelectCriptomonedas ] = useSelectMonedas('Elige tu Criptomoneda', criptos)

    useEffect( () => {
        const consultarAPI = async () => {
            try {
                const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"

                const respuesta = await fetch(url)
                const resultado = await respuesta.json()

                const arrayCriptos = resultado.Data.map( cripto => {

                    const objeto = {
                        id: cripto.CoinInfo.Name,
                        nombre: cripto.CoinInfo.FullName
                    }
                    return(objeto)
                })

                setCriptos(arrayCriptos)
            } catch (error) {
                console.log(error)
            }
        }

        consultarAPI()
    },[])

    const handleSubmit = (e) => {
        e.preventDefault()
        if([moneda, criptomoneda].includes('')){
            Swal.fire({
                title: 'Los campos son obligatorios',
                text: 'Debes elegir una moneda y una criptomoneda',
                icon: 'error'
            })
            return
        }
        setMonedas({
            moneda,
            criptomoneda
        })

    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            <SelectMonedas />
            <SelectCriptomonedas />

            {/* <SelectCriptomonedas /> */}
            <InputSumbit 
                type='submit' 
                value='Cotizar'
            />
        </form>
  )
}

export default Formulario