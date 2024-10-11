import { Avatar, IconButton, Tooltip } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../utils/auth";
import { clearChatReducer } from "../../store/slices/chatClice";
import { clearFriendRequestReducer } from "../../store/slices/friendRequestSlice";
import {
  clearUserReducer,
  fetchProfileDetails,
  updateUser,
} from "../../store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { getAccessToken, removeUserId } from "../../utils/localstorage-utils";
import { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import EditprofileDialog from "../profile/EditprofileDialog";
import toast from "react-hot-toast";
import { white } from "../../constants/Colors";

const ProfileForMobile = () => {
  const [editProfileDialog, setEditProfileDialog] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    user: { profile },
  } = useSelector((store) => store);

  const fetchProfile = async () => {
    const token = getAccessToken();
    if (token) {
      dispatch(fetchProfileDetails(token));
    }
  };
  useEffect(() => {
    fetchProfile();
  }, []);

  const logOutUser = async () => {
    logout();
    removeUserId();
    await dispatch(clearChatReducer());
    await dispatch(clearFriendRequestReducer());
    await dispatch(clearUserReducer());
    navigate("/login");
  };
  const closeEditProfielDialog = () => {
    setEditProfileDialog(false);
  };

  const updateProfile = async (userDtails: any) => {
    const payload = {
      ...userDtails,
      userId: profile?._id,
    };
    delete payload.userPhoto;
    const result = await dispatch(updateUser(payload));
    if (result.error) {
      toast.error("something went wrong");
      return;
    }
    fetchProfile();
    toast.success("User Updated Successfully");
    setEditProfileDialog(false);
  };
  const openEditProfileDialog = () => {
    setEditProfileDialog(true);
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div>
          <Avatar
            src={profile?.avatar?.url}
            sx={{ width: "100%", height: 120, borderRadius: "50%" }}
          />
        </div>
        <div className={`mt-2 text-2xl capitalize text-[${white}]`}>
          {profile?.userName}
        </div>
        <div
          className="flex justify-center mt-2 cursor-pointer"
          onClick={openEditProfileDialog}
        >
          <Tooltip title="Update Profile">
            <IconButton>
              <EditIcon sx={{ color: white }} />
            </IconButton>
          </Tooltip>
        </div>
        <div
          className={`mt-5 text-2xl cursor-pointer text-white`}
          onClick={logOutUser}
        >
          Logout
        </div>
      </div>

      {editProfileDialog && (
        <EditprofileDialog
          editProfileDialog={editProfileDialog}
          closeEditProfielDialog={closeEditProfielDialog}
          handleSubmit={updateProfile}
        />
      )}
    </>
  );
};

export default ProfileForMobile;
