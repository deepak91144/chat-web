import PersonIcon from "@mui/icons-material/Person";
import CommonButton from "../UI/CommonButton";
const NotificationItem = (props: any) => {
  const { sender, _id, handler } = props;
  return (
    <>
      <div className="flex mt-5  relative border">
        <PersonIcon />
        <div className="ml-2">{sender.name}</div>
        <div className=" cursor-pointer ml-12" onClick={handler}>
          <CommonButton text="Accept" onClickAction={handler} />
          <span className="ml-5">
            <CommonButton text="Reject" onClickAction={handler} />
          </span>
        </div>
      </div>
    </>
  );
};

export default NotificationItem;
