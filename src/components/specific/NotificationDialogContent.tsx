import NotificationItem from "../shared/NotificationItem";

const NotificationDialogContent = ({
  notifications = [],
  friendRequestActionHandler,
}: any) => {
  return (
    <>
      <div>
        {notifications.length > 0 ? (
          notifications.map((item: any) => {
            return (
              <>
                <NotificationItem
                  friendRequestActionHandler={friendRequestActionHandler}
                  sender={item.sender}
                  _id={item._id}
                />
              </>
            );
          })
        ) : (
          <>
            <div>No notification found</div>
          </>
        )}
      </div>
    </>
  );
};

export default NotificationDialogContent;
