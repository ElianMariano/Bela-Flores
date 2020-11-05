import React from 'react';
import styled from 'styled-components';

interface SearchInputProps {
    width?: string;
    isShown?: boolean;
}

interface InputProps {
    width?: string;
    isShown?: boolean;
}

interface InputWrapperProps {
    width?: string;
}

const BottomLine = styled.span`
    width: 0%;
    height: 0.5vh;
    background-color: var(--color-input-grey);
    transition: width .4s;
`;

const InputWrapper = styled.div`
    width: ${(props: InputWrapperProps) => {return (props.width !== undefined) ? props.width : 'auto'}};
    padding: 0;
    margin: 4px 4px 4px 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Input = styled.input`
    width: ${(props: InputProps) => {return (props.width !== undefined) ? props.width : '100%'}};
    height: 10vh;
    color: var(--color-grey);
    font-family: Roboto, sans-serif;
    font-weight: 500;
    font-size: 22px;
    background-color: var(--white);
    border-width: 0px;
    border-radius: 5px;
    display: ${function (props: InputProps) {return (props.isShown || props.isShown === undefined) ? 'block' : 'none'}};

    &:focus + span {
        width: 100%;
    }
`;

function SearchInput(props: SearchInputProps){
    const { width, isShown } = props;

    return (
        <InputWrapper width={width}>
            <Input width={width} isShown={isShown} placeholder=" PESQUISA"/>
            <BottomLine />
        </InputWrapper>
    );
}

export default SearchInput;