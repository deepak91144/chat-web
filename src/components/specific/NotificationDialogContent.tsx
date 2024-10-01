import { sampleNotification } from "../../constants/sampleData";
import NotificationItem from "../shared/NotificationItem";

const NotificationDialogContent = () => {
  const notificationActionHandler = () => {
    alert("fewf");
  };
  return (
    <>
      <div>
        {sampleNotification.map((item) => {
          return (
            <>
              <NotificationItem
                sender={item.sender}
                _id={item._id}
                handler={notificationActionHandler}
              />
            </>
          );
        })}
      </div>
    </>
  );
};

export default NotificationDialogContent;
