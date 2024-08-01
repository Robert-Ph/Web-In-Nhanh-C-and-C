// ui-admin/src/pages/users/Users.tsx
import "./users.scss"
import ItemUser from "../../components/itemUser/ItemUser.tsx";

const Users = () =>{
    return (
        <div className="users">
            <h1>Users</h1>


            <button className="add">Thêm Mới</button>

            <div className="container">
                <div className="box box1">
                    <ItemUser/>
                </div>
                <div className="box box2"><ItemUser/></div>
                <div className="box box3"><ItemUser/></div>
                <div className="box box4"><ItemUser/></div>
                <div className="box box5"><ItemUser/></div>
                <div className="box box6"><ItemUser/></div>
                <div className="box box7"><ItemUser/></div>
                <div className="box box8"><ItemUser/></div>
            </div>


        </div>
    )
}

export default Users