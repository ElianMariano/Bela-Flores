import React from 'react'
import styled from 'styled-components'

interface InputProps {
    width?: string;
    height?: string;
    fontSize?: string;
}

const Input = styled.input`
    width: ${(props: InputProps) => {return (props.width !== undefined) ? props.width : 'auto'}};
    height: ${(props: InputProps) => {return (props.height !== undefined) ? props.height : '4.0vh'}};
    background-color: var(--white);
    border-radius: 0.4vh;
    color: var(--color-grey);
    border-width: 0;
    margin: 1.2vh 0 1.2vh 0;
    font-family: Roboto, sans-serif;
    font-weight: bold;
    font-size: ${(props: InputProps) => {return (props.fontSize !== undefined) ? props.fontSize : '16px'}}
`;

export default Input;