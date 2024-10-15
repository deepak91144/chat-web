import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";
import { Input, Menu, MenuItem } from "@mui/material";
import MessageBox from "./MessageBox";
import io from "socket.io-client";
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMessagesByChatId } from "../../store/slices/messageSlice";
import FileUpload from "../file-upload/FileUpload";
import { clearFiles, uploadFiles } from "../../store/slices/uploadFileSlice";
import { uploadFile } from "../../API/fileupload";
const socket = io.connect("http://localhost:8000");

const Chatbox = () => {
  const [message, setMessage] = useState("");
  const [allMsg, setAllMsg] = useState([]);
  const [fileType, setFileType] = useState();
  const fileInputRef = useRef(null);
  const scrollToBottomRef = useRef(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const { chatId } = useParams();
  const {
    user: { profile },
    chatReducer: { chat },
    messageReducer: { messages },
    fileReducer: { files, isLoading },
  } = useSelector((store) => store);
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

    socket.on("userJoined", (payload: any) => {});

    socket.on("rcvMsg", (payload: any) => {
      console.log("payload_", payload);

      setAllMsg((prev: any) => {
        return [...prev, payload.message];
      });
    });
  }, []);

  useEffect(() => {
    scrollToBottomRef?.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [allMsg]);

  const handleSend = (attachment = "") => {
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
    // dispatch(clearFiles());
  };
  const handleEnterKeyPress = (e: any) => {
    if (e.keyCode === 13) {
      handleSend();
    }
  };

  const selectFile = (type: string) => {
    setFileType(type);
    fileInputRef.current.click();
  };

  const handleFileOnChange = async (e: any) => {
    handleClose();
    const fileDetails = e.target.files[0];
    const formData = new FormData();
    formData.append("photo", fileDetails);
    // const result = await dispatch(uploadFiles(formData));
    const result = await uploadFile(formData);

    console.log("result", result);

    if (result?.success) {
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
          {allMsg.map((message, index) => {
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
        <FileUpload
          type={fileType}
          fileInputRef={fileInputRef}
          handleFileOnChange={handleFileOnChange}
        />
      </Menu>
    </>
  );
};

export default Chatbox;
