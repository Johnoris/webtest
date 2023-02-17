import Feature from "components/cards/feature";
import { AppContext } from "context/appContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { DELEGATE_STAFF, LOGO, MANAGE_BUSINESS, MONITOR_EARNINGS, PASSWORD_BLUR, PASSWORD_VISIBLE } from "../../assets/icons";

const Login = () => {
    //states
    const [ passwordVisible, setPasswordVisible ] = useState<boolean>(false);
    const [ username, setUsername ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');

    //hooks
    const router = useNavigate();
    const appContext = useContext(AppContext);
    const setAuth = appContext?.setAuth

    const handleSubmit = () => {
        //check if here is both username and password
        if(username !== '' && password !== ''){
            //check if the username is in the allower users
            if(appContext?.allowedUser?.username === username){
                //check if the password is correct
                if(appContext?.allowedUser?.password === password){
                    setAuth ? setAuth(username) : console.error('Context error');
                    router('/')
                    toast.success('Sign in successful')
                }
                else{
                    toast.error('Password invalid')
                }
            }
            else{
                toast.error('Invalid username')
            }
        }
        else{
            toast.error('Username and password is required')
        }
    }

    return(
        <div className="login">
            <section className="login__content">
                <div className="wrapper">
                    <div className="login__content__logo">
                        <LOGO/>
                    </div>
                    <div className="login__content__main">
                        <h1>Hi there, see what’s new</h1>
                        <h4>Here’s how Foodcourt helps you manage your daily operations and ensure your riders are efficient</h4>
                        <div className="login__content__main__features">
                            <Feature img={<MONITOR_EARNINGS/>} title="Monitor your Earnings" text="Easily see how much your busineses are earning  on each transaction and watch your earnings rise."/>
                            <Feature img={<MANAGE_BUSINESS/>} title="Manage your Businesses" text="Easily see how much your businesses are earning  on each transaction and watch your earnings rise. "/>
                            <Feature img={<DELEGATE_STAFF/>} title="Delegate to Staff" text="Easily see how much your businesses are earning  on each transaction and watch your earnings rise." isSelected={true}/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="login__main">
                <div className="login__main__container">
                    <div className="wrapper">
                        <h2>Login to your dashboard</h2>
                        <h4>Provide details to login to your account </h4>
                        <form className="login__main__container__form">
                            <div className="login__main__container__form__input">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="text"
                                    className="input-wrapper"
                                    placeholder="Enter your email"
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div className="login__main__container__form__input">
                                <label htmlFor="password">Password</label>
                                <div className="input-wrapper">
                                    <input
                                        type={passwordVisible ? "text" : "password"}
                                        placeholder="Enter your password"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <div className="control-password-visibility" onClick={() => setPasswordVisible(!passwordVisible)}>
                                        {
                                            passwordVisible
                                                ?
                                                <PASSWORD_VISIBLE/>
                                                :
                                                <PASSWORD_BLUR/>
                                        }
                                    </div>
                                </div>
                            </div>
                            <button onClick={() => handleSubmit()}>Login</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Login;