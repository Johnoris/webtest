import { LOGO, TIMER_ICON } from "assets/icons";
import Notification from "components/cards/notification";
import { AppContext } from "context/appContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { $api } from "services";


interface ICompanyInfo {
    name: string,
    ceo: string,
    cto: string,
}

const Profile = () => {
    //state
    const [ companyInfo, setCompanyInfo ] = useState<ICompanyInfo>({
        name: '',
        ceo: '',
        cto: ''
    })

    //hooks
    const router = useNavigate();
    const appContext = useContext(AppContext);
    const setAuth = appContext?.setAuth;

    useEffect(() => {
        const LogoutInterval = setInterval(() => {
            toast.error('Session timed out')
            setAuth ? setAuth('') : console.log('Context error')
            router('/login')
        },120000)
        return () => {
            clearInterval(LogoutInterval)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const query =`
        query exampleQuery {
            company {
                ceo
                cto
                name
            }
        }
    `

    useEffect(() => {
        fetchCompanyInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const fetchCompanyInfo = async() => {
        const response = await $api.post('', query)
        if($api.isSuccessful(response)){
            console.log(response)
            setCompanyInfo({
                name: response?.data?.data?.company?.name,
                ceo: response?.data?.data.company?.ceo,
                cto: response?.data?.data?.company?.cto,
            })
        }
        else{
            toast.error("Couldn't fetch company info")
        }
    }

    return(
        <div className="profile">
            <nav className="profile__nav">
                <LOGO/>
            </nav>
            <section className="profile__main">
                <div className="profile__main__content">
                    <div className="profile__main__content__company">
                        <div className="profile__main__content__company__logo"><h2>{companyInfo.name.charAt(0).toUpperCase()}</h2></div>
                        <div className="profile__main__content__company__name">
                            <h2>{companyInfo.name}</h2>
                        </div>
                    </div>
                    <div className="profile__main__content__position">
                        <p>CEO</p>
                        <h4>{companyInfo.ceo}</h4>
                    </div>
                    <div className="profile__main__content__position">
                        <p>CTO</p>
                        <h4>{companyInfo.cto}</h4>
                    </div>
                </div>
                <div className="profile__main__notifications">
                    <div className="profile__main__notifications__content">
                        <div className="profile__main__notifications__content__coming-soon">
                            <TIMER_ICON/>
                            <h5>Coming soon</h5>
                        </div>
                        <div className="profile__main__notifications__content__body">
                            <Notification emoji="🎉"/>
                            <Notification emoji="✨"/>
                            <Notification emoji="💥"/>
                        </div>
                        <div className="profile__main__notifications__content__text">
                            <h2>📫 Notifications</h2>
                            <h4>Receive notifcations about your rider performance, efficiency reviews and a lot more</h4>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Profile;