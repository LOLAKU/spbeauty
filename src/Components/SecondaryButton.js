import Clickable from "./Clickable";
import styled from "styled-components";

function SecondaryButton(props) {
    // Здесь устанавливается минимальная ширина для кнопки
    let minWidth = props.minWidth === undefined ? '217px' : props.minWidth;
    const Button = styled.div`
            background: #FFFF;
            border-radius: 20px;
            border: 1px solid #64748B;
            box-shadow: inset 0px 1px 2px rgba(10, 15, 26, 0.08);
            min-width: ${minWidth};
            color: #64748B;
        &:hover {
             background: #E2E8F0;
             }
         &:active {
             background: #94A3B8;
             }
`;

    return (
        <Clickable >
            <Button className='p-2 text-rg bottom_style'>
                {props.children}
            </Button>
        </Clickable>
        
    );
}

export default SecondaryButton;