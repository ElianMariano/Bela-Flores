import styled from 'styled-components';

interface ButtonProps {
    width?: string;
    height?: string;
    fontSize?: string;
}

// Roboto. 12
const Button = styled.button`
    width: ${(props: ButtonProps) => {return (props.width !== undefined) ? props.width : 'auto'}};
    height: ${(props: ButtonProps) => {return (props.height !== undefined) ? props.height : '4.5vh'}};
    background-color: var(--color-green);
    border-width: 0;
    color: var(--white);
    font-family: Roboto, sans-serif;
    font-weight: bold;
    font-size: ${(props: ButtonProps) => {return (props.fontSize !== undefined) ? props.fontSize : '12px'}};
    margin-top: 0.7vh;
    margin-bottom: 0.7vh;
    margin-left: 0;
    margin-right: 0;
    padding: 0;
    border-radius: 1vh;
    transition: .6s opacity;

    &:hover{
        opacity: 0.9;
    }
`;

export default Button;