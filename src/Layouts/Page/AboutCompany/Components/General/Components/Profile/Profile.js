import Avatar from "./Avatar";
function Profile() {
    return (
        <div className='row'>
            <Avatar/>
            <div className='ms-3  col justify-content-center text_sprofil'>
                <div className='title mb-2'>SPBEAUTY</div>
                <div className="mb-1 caption123">Салон красоты</div>
                <div className="mb-1 caption123">Санкт-Петербург, Невский пр-т. 28</div>
            </div>                  
        </div>
    );
}

export default Profile;