import Person4Icon from "@mui/icons-material/Person4";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AvatarCard from "../components/shared/AvatarCard";
import { useEffect, useState } from "react";
import { getAccessToken } from "../utils/localstorage-utils";
import { dateDifference } from "../utils/date-utils";
import EditIcon from "@mui/icons-material/Edit";
import EditprofileDialog from "../components/profile/EditprofileDialog";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfileDetails, updateUser } from "../store/slices/userSlice";
import toast from "react-hot-toast";
import { white } from "../constants/Colors";
import { IconButton, Tooltip } from "@mui/material";
const Profile = () => {
  const [editProfileDialog, setEditProfileDialog] = useState(false);

  const {
    user: { profile },
  } = useSelector((store: any) => store);
  const dispatch = useDispatch();
  const fetchProfile = async () => {
    const token = getAccessToken();
    if (token) {
      dispatch(fetchProfileDetails(token));
    }
  };
  useEffect(() => {
    fetchProfile();
  }, []);
  const openEditProfielDialog = () => {
    setEditProfileDialog(true);
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
  return (
    <>
      <div className="fixed right-0 top-[22%] rounded-[8px] w-[15%]  bg-blue-400 h-[60%] ">
        <div className="flex flex-col  mt-10  ">
          <div className="flex justify-center">
            <AvatarCard
              // avatar={[profile?.avatar?.url]}
              avatar={[]}
              width={100}
              height={100}
            />
          </div>
          <div
            className="flex mt-5 justify-center items-center cursor-pointer"
            onClick={openEditProfielDialog}
          >
            <div>
              <Tooltip title="Update User">
                <IconButton>
                  <EditIcon sx={{ color: white }} />
                </IconButton>
              </Tooltip>
            </div>
          </div>

          <div className="mt-5   text-center  w-[100%]">
            <div
              className={`font-serif text-[1.4rem] text-center text-[${white}]`}
            >
              {profile?.userName}
            </div>
            <div className="flex justify-center mt-1">
              <Person4Icon style={{ width: 20 }} sx={{ color: white }} />

              <div className={`font-serif text-[1rem]  ml-2 text-[${white}]`}>
                Username
              </div>
            </div>
          </div>
          <div className="mt-5  w-[100%] text-center  ">
            <div className={`font-serif text-[1.4rem] text-[${white}]`}>
              {dateDifference(profile?.createdAt, new Date())}
            </div>
            <div className="flex justify-center mt-1">
              <CalendarMonthIcon sx={{ color: white, width: 20 }} />
              <div className={`font-serif text-[1rem]  ml-2 text-[${white}]`}>
                Joined
              </div>
            </div>
          </div>
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

export default Profile;
