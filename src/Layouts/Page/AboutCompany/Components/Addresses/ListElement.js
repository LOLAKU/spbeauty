import styled from 'styled-components';
import SecondaryButton from '../../../../../Components/SecondaryButton';
import EditIcon from '../../../../../Icons/EditIcon';
import RemoveIcon from '../../../../../Icons/RemoveIcon';
import IconOnlyButton from '../../../../../Components/IconOnlyButton.js';

const Option = styled.div`
margin-right: 24px;
`;

function ListElement(props) {
    return (
        <div className='d-flex flex-row align-self-stretch gap-2 justify-content-space-between'>
            <Option className='flex-grow-1 p-2'>{props.children}</Option>
            <IconOnlyButton icon={<EditIcon/>}/>
            <IconOnlyButton icon={<RemoveIcon/>}/> 
        </div>
    );
}

export default ListElement;