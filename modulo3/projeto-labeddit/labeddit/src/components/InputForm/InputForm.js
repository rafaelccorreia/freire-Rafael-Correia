import React from 'react'
import { InputContainer } from './styled'

const InputForm = (props) => {
    return (
        <InputContainer 
            name={props.placeHolder}
            onChange={props.onChange}
            placeholder={props.placeHolder}
            type={props.type}
            value={props.value}
        />
    )
}

export default InputForm