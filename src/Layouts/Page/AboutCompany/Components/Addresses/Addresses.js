import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
function Addresses(props) {
    return (
        <div className='d-inline-flex flex-column gap-2 mt-4'>
            <div className='title'>Адреса заведений</div>
            <div className='d-inline-flex flex-column gap-3'>
                <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
                <PrimaryButton>Добавить филиал</PrimaryButton>
            </div>
        </div>
    );
}

export default Addresses;