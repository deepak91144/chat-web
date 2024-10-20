import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";
import { Input, Menu, MenuItem } from "@mui/material";
import MessageBox from "./MessageBox";
import * as io from "socket.io-client";
import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearMessageAlertOfAChat,
  fetchMessagesByChatId,
} from "../../store/slices/messageSlice";
import FileUpload from "../file-upload/FileUpload";
import { uploadFile } from "../../API/fileupload";
import { setLoading } from "../../store/slices/uploadFileSlice";
const socket = io.connect("http://localhost:8000");

const Chatbox = () => {
  const [message, setMessage] = useState("");
  const [allMsg, setAllMsg]: any = useState([]);
  const [fileType, setFileType] = useState("");
  const fileInputRef: any = useRef(null);
  const scrollToBottomRef: any = useRef(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const { chatId } = useParams();
  const {
    user: { profile },
    chatReducer: { chat },
    messageReducer: { messages },
    fileReducer: { isLoading },
  } = useSelector((store: any) => store);
  const dispatch = useDispatch();
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOnChange = (e: any) => {
    setMessage(e.target.value);
  };
  useEffect(() => {
    dispatch(fetchMessagesByChatId(chatId));
  }, []);
  useEffect(() => {
    const paylaod = {
      roomId: chatId,
      user: {
        _id: profile._id,
        name: profile.name,
      },
    };

    socket.emit("joinRoom", paylaod);

    socket.on("rcvMsg", (payload: any) => {
      setAllMsg((prev: any) => {
        return [...prev, payload.message];
      });
    });
  }, []);

  useEffect(() => {
    dispatch(clearMessageAlertOfAChat(chatId));
    return () => {
      dispatch(clearMessageAlertOfAChat(chatId));
    };
  }, [chatId]);

  useEffect(() => {
    scrollToBottomRef?.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [allMsg]);

  const handleSend = (attachment: any = "") => {
    console.log("attachment", attachment);
    const fileDetails = attachment
      ? {
          publicId: "",
          url: attachment?.location,
        }
      : null;

    const payload = {
      content: message,

      _id: profile._id,
      sender: {
        _id: profile._id,
        name: profile.name,
      },
      members: chat.members,
      roomId: chatId,
      createdAt: new Date(),
      file: fileDetails,
    };
    setMessage("");

    socket.emit("sendMessage", payload);
  };
  const handleEnterKeyPress = (e: any) => {
    if (e.keyCode === 13) {
      handleSend();
    }
  };

  const selectFile = (type: string) => {
    setFileType(type);
    setTimeout(() => {
      fileInputRef.current.click();
    }, 500);
  };

  const handleFileOnChange = async (e: any) => {
    handleClose();
    const fileDetails = e.target.files[0];
    const formData = new FormData();
    formData.append("photo", fileDetails);
    dispatch(setLoading(true));
    const result = await uploadFile(formData);

    console.log("result", result);

    if (result?.success) {
      dispatch(setLoading(false));
      handleSend(result.file);
    }
  };

  return (
    <>
      <div className="relative">
        <div className=" h-[82vh] flex flex-col  overflow-scroll	">
          {messages.map((message: any, index: number) => {
            return (
              <>
                <MessageBox message={message} user={profile} index={index} />
              </>
            );
          })}
          {allMsg.map((message: any, index: number) => {
            return (
              <>
                <MessageBox message={message} user={profile} index={index} />
              </>
            );
          })}
          <div ref={scrollToBottomRef}></div>
        </div>

        <div className=" w-[100%] bg-slate-400 fixed flex bottom-[0] h-[5rem] justify-between items-center pl-2 pr-2">
          <div>
            <AttachFileIcon
              style={{ cursor: "pointer" }}
              onClick={handleClick}
            />
          </div>
          <div className="fixed z-0 bottom-12 left-[42%] text-white">
            {isLoading && "Sending..."}
          </div>
          <div className="w-[80%]  bottom-0">
            <Input
              type="text"
              className="w-[100%] h-[100%] border-none"
              placeholder="Type here"
              value={message}
              onChange={handleOnChange}
              onKeyDown={handleEnterKeyPress}
            />
          </div>
          <div
            onClick={() => {
              handleSend();
            }}
          >
            <SendIcon
              style={{ marginLeft: "1rem", color: "red", cursor: "pointer" }}
            />
          </div>
        </div>
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => {
            selectFile("image");
          }}
        >
          Image
        </MenuItem>
        <MenuItem
          onClick={() => {
            selectFile("audio");
          }}
        >
          Audio
        </MenuItem>
        <MenuItem
          onClick={() => {
            selectFile("video");
          }}
        >
          Video
        </MenuItem>
        <MenuItem
          onClick={() => {
            selectFile("file");
          }}
        >
          File
        </MenuItem>
        {fileType === "image" && (
          <>
            <FileUpload
              accept="image/*"
              fileInputRef={fileInputRef}
              handleFileOnChange={handleFileOnChange}
            />
          </>
        )}
        {fileType === "video" && (
          <>
            <FileUpload
              accept="video/*"
              fileInputRef={fileInputRef}
              handleFileOnChange={handleFileOnChange}
            />
          </>
        )}
        {fileType === "audio" && (
          <>
            <FileUpload
              accept="audio/mpeg3"
              fileInputRef={fileInputRef}
              handleFileOnChange={handleFileOnChange}
            />
          </>
        )}
        {fileType === "file" && (
          <>
            <FileUpload
              accept="file"
              fileInputRef={fileInputRef}
              handleFileOnChange={handleFileOnChange}
            />
          </>
        )}
      </Menu>
    </>
  );
};

export default Chatbox;
