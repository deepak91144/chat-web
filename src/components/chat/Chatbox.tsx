import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";
import { Input, Menu, MenuItem } from "@mui/material";
import MessageBox from "./MessageBox";
import { sampleMessage } from "../../constants/sampleData";
import { useState } from "react";
const Chatbox = () => {
  const user = { _id: "dwefw", name: "deepak" };
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className="h-[92vh]  relative">
        <div className=" flex flex-col h-[83vh] overflow-scroll	">
          {sampleMessage.map((message, index) => {
            return (
              <>
                <MessageBox message={message} user={user} index={index} />
              </>
            );
          })}
        </div>
        <div className=" w-[100%] bg-slate-400 absolute flex bottom-[0] h-[5rem] justify-between items-center pl-2 pr-2">
          <div>
            <AttachFileIcon
              style={{ cursor: "pointer" }}
              onClick={handleClick}
            />
          </div>
          <div className="w-[80%]">
            <Input
              type="text"
              className="w-[100%] h-[100%] border-none"
              placeholder="Type here"
            />
          </div>
          <div>
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
        <MenuItem onClick={handleClose}>Image</MenuItem>
        <MenuItem onClick={handleClose}>Video</MenuItem>
        <MenuItem onClick={handleClose}>File</MenuItem>
      </Menu>
    </>
  );
};

export default Chatbox;
