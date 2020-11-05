import styled from 'styled-components';

interface ButtonProps {
    width?: string;
}

// Roboto. 12
const Button = styled.button`
    width: ${(props: ButtonProps) => {return (props.width !== undefined) ? props.width : 'auto'}};
    height: 4.5vh;
    background-color: var(--color-green);
    border-width: 0;
    color: var(--white);
    font-family: Roboto, sans-serif;
    font-weight: bold;
    font-size: 12;
    margin: 0;
    padding: 0;
    border-radius: 4px;
    transition: .6s opacity;

    &:hover{
        opacity: 0.9;
    }
`;

export default Button;