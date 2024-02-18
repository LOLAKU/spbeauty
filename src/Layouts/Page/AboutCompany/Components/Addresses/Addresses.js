import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";


function Addresses(props) {
    return (
        <div className=' col gap-2 mt-4 address_border address_padding address_style padding123'>
            <div className='title'>Адреса заведений</div>
            <div className='d-inline-flex flex-column gap-3 padding124'>
                <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
                    <div className='d-inline-flex flex-column gap-3 justify-content: start'>
                        <SecondaryButton>Добавить филиал</SecondaryButton>
                    </div>
            </div>
        </div>
    );
}

export default Addresses;