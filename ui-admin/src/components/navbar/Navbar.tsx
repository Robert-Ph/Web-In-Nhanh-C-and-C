import "./navbar.scss"
import {useNavigate} from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Thực hiện các công việc đăng xuất ở đây (ví dụ: xóa token, làm sạch session, v.v.)

        // Chuyển hướng về trang login
        navigate('/admin');
    };

    return (
        <div className="navbar">
            <div className="logo">
                <img className="img" src="../../../public/VFLT.png" alt=""/>
            </div>
            <div className="icons">
                {/*<div className="notification">*/}
                {/*    <img src="/notifications.svg" alt=""/>*/}
                {/*    <span>1</span>*/}
                {/*</div>*/}

                <div className="user">
                    <img src="/icons/account.svg" alt=""/>
                    <span>Nguyen Van A</span>
                </div>
                <button onClick={handleLogout}>Log out</button>
            </div>
        </div>
    )
}

export default Navbar