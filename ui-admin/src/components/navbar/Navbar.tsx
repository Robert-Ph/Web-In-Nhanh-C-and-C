import "./navbar.scss"

const Navbar = () =>{
    return (
        <div className="navbar">
            <div className="logo">
                <img className="img" src="../../../public/VFLT.png" alt=""/>
            </div>
            <div className="icons">
                <div className="notification">
                    <img src="/notifications.svg" alt=""/>
                    <span>1</span>
                </div>

                <div className="user">
                <img src="/user.svg" alt=""/>
                    <span>VFLT</span>
                </div>
                <img src="/setting.svg" alt="" className="icon"/>
                
            </div>
        </div>
    )
}

export default  Navbar