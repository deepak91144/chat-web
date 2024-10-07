import PersonIcon from "@mui/icons-material/Person";
import CommonButton from "../UI/CommonButton";
const NotificationItem = (props: any) => {
  const { sender, _id, friendRequestActionHandler } = props;
  return (
    <>
      <div className="flex mt-5  relative border items-center">
        <PersonIcon />
        <div className="ml-2">{sender.name}</div>
        <div className=" cursor-pointer ml-12">
          <CommonButton
            text="Accept"
            onClickAction={() => {
              friendRequestActionHandler(_id, true);
            }}
          />
          <span className="ml-5">
            <CommonButton
              text="Reject"
              onClickAction={() => {
                friendRequestActionHandler(_id, false);
              }}
            />
          </span>
        </div>
      </div>
    </>
  );
};

export default NotificationItem;
