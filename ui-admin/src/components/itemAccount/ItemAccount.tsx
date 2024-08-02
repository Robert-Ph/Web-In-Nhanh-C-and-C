// ui-admin/src/components/itemAccount/ItemAccount.tsx
import { useNavigate } from "react-router-dom";
import "./itemAccount.scss";

interface Account {
    id: number;
    name: string;
    phone: string;
    category: string;
    role: number;
}

interface ItemAccountProps {
    account: Account;
}

const ItemAccount = ({ account }: ItemAccountProps) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/account/${account.id}`);
    };

    return (
        <div className="itemAccount" onClick={handleClick}>
            <img src="/public/icons/account.png" className="img" alt="Account" />
            <div className="info">
                <label className="label">{account.name}</label>
                <label className="label">{account.phone}</label>
            </div>
        </div>
    );
};

export default ItemAccount;
