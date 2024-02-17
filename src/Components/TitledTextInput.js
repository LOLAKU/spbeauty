import styled from "styled-components";

const Input = styled.input`
    outline: none;
    border-radius: 20px;
    border: solid #E2E8F0 1px;
    background-color: #F8FAFC;
    color: #0F172A;
    &:hover {
        background-color: #E2E8F0;
    }
`;


function TitledTextInput({title, def}) {
    const Title = title === undefined ? 
        (<div class = 'caption' ></div>) : 
        (<div class = 'caption'>{title}</div>);
    return (
        <div className='d-flex flex-column gap-2'>
            {Title}
            <Input className='p-2 small_margin' defaultValue={def} ></Input>
        </div>
    );
}

export default TitledTextInput;