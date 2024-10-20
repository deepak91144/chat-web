import { memo } from "react";
import { fileFormat } from "../../lib/feature";
import RenderAttachment from "../shared/RenderAttachment";
import moment from "moment";

const MessageBox = ({ message, user, index }: any) => {
  const { sender, content, attachments = [], createdAt } = message;
  const sameSender = sender?._id === user?._id;
  // var duration = moment.duration(moment().diff(moment(createdAt)));

  return (
    <>
      <div
        style={{
          alignSelf: sameSender ? "flex-end" : "flex-start",
          background: sameSender ? "#1B4D3E" : "#004953",
          borderRadius: "8px",
          color: "white",
          padding: "1rem",
          maxWidth: "80%",
          marginTop: index === 0 ? "0px" : "10px",
        }}
      >
        {!sameSender && (
          <>
            <div className="text-blue-400">{sender?.name}</div>
          </>
        )}
        {content && <div>{content}</div>}

        {attachments.length > 0 &&
          attachments.map((attachment: any) => {
            const url = attachment.url;
            const file = fileFormat(url);
            return (
              <>
                <a href={url} target="_blank">
                  {RenderAttachment(file, url)}
                </a>
              </>
            );
          })}
        {createdAt && (
          <>
            {/* <div className="text-gray-300 text-sm mt-2">{minutes} min ago</div> */}
          </>
        )}
      </div>
    </>
  );
};

export default memo(MessageBox);
