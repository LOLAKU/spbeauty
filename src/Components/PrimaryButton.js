import Clickable from "./Clickable";
import styled from "styled-components";

function PrimaryButton(props) {
    // Здесь устанавливается минимальная ширина для кнопки
    let minWidth = props.minWidth === undefined ? '217px' : props.minWidth; 
    const Button = styled.div`
    background: #3B82F6;
    border-radius: 20px;
    box-shadow: inset 0px 1px 2px rgba(10, 15, 26, 0.08);
    min-width: ${minWidth};
    color: #FFFF;
    &:hover {
        background: #72A4F4;
    }
    &:active {
        background: #004CC7;
    }
`;
    return (
        <Clickable>
            <Button className='p-2 text-rg'>
                {props.children}
            </Button>
        </Clickable>
        
    );
}

export default PrimaryButton;