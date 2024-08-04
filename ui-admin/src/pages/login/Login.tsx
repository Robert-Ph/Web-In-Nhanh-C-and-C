// ui-admin/src/pages/system/Login.tsx
import "./login.scss";



const Login = () => {
    return(
        <div className="login">
            <div className="header">
                <div className="title text"><h1>VFLT</h1></div>
                <div className="title text_2">
                    <h1>SYSTEM <br/> MANAGMENT</h1>
                </div>


            </div>
            <div className="body">
                <h2>Username</h2>
                <input type="text"/>
                <h2 className="pass">Password</h2>
                <input type="password"/><br/>

                <button>Sign In</button>
            </div>
        </div>
    )
};

export default Login;
