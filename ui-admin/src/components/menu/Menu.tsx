// ui-admin/src/components/menu/Menu.tsx
import "./menu.scss";
import { NavLink, useLocation } from "react-router-dom";
import { menu } from "../../data.ts";

const Menu = () => {
    const location = useLocation();

    return (
        <div className="menu">
            {menu.map((item) => {
                // Check if the current path matches the item url
                const isActive = location.pathname === item.url;

                return (
                    <div className="item" key={item.id}>
                        <NavLink
                            to={item.url}
                            className={isActive ? "listItem active" : "listItem"}
                        >
                            <img src={item.icon} alt={item.title} />
                            <span className="listitemTitle">{item.title}</span>
                        </NavLink>
                    </div>
                );
            })}
        </div>
    );
};

export default Menu;
