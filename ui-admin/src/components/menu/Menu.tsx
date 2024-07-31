import "./menu.scss"
import {Link} from "react-router-dom";
import {menu} from "../../data.ts";

const Menu = () =>{
    return (
        <div className="menu">
            {menu.map((item) => (
                <div className="item">
                    <Link to="/" className="listItem" key={item.id}>
                        <img src={item.icon} alt=""/>
                        <span className="listitemTitle">{item.title}</span>
                    </Link>

                </div>
            ))
            }

        </div>
    )
}

export default Menu