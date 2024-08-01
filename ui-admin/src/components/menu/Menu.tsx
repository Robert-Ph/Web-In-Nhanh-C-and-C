// ui-admin/src/components/menu/Menu.tsx
import "./menu.scss";
import { Link } from "react-router-dom";
import { menu } from "../../data.ts";

const Menu = () => {
    return (
        <div className="menu">
            {menu.map((item) => (
                <div className="item" key={item.id}>
                    <Link to={item.url} className="listItem">
                        <img src={item.icon} alt={item.title} />
                        <span className="listitemTitle">{item.title}</span>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Menu;
