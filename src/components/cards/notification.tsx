import INotification from "interface/components/cards/notification";

const Notification = (props: INotification) => {
    return(
        <div className="notification">
            <div className="notification__icon">
                <h2>{props.emoji}</h2>
            </div>
            <div className="notification__content">
                <div className="notification__content__header"></div>
                <div className="notification__content__body"></div>
            </div>
        </div>
    )
}
export default Notification;