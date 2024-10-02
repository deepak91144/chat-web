import Person4Icon from "@mui/icons-material/Person4";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AvatarCard from "../components/shared/AvatarCard";
import { useEffect, useState } from "react";
import { getProfileDetails } from "../API/auth";
import { getAccessToken } from "../utils/localstorage-utils";
import { dateDifference } from "../utils/date-utils";
const Profile = () => {
  const [profileDetails, setProfileDetails] = useState({});
  const [profilePic, setProfilePic] = useState<any>([]);
  const fetchProfile = async () => {
    const token = getAccessToken();
    if (token) {
      const result = await getProfileDetails(token);
      setProfileDetails(result?.user);
      let profilePhoto = [];
      profilePhoto.push(result?.user?.avatar?.url);
      setProfilePic(profilePhoto);
    }
  };
  useEffect(() => {
    fetchProfile();
  }, []);
  console.log("profilePic_", profilePic);

  return (
    <>
      <div className="fixed right-0 top-16 w-[15%]  bg-blue-400 h-screen ">
        <div className="flex flex-col p-10 mt-10  text-center">
          <div className="flex justify-center">
            <AvatarCard avatar={profilePic} width={100} height={100} />
          </div>
          <div className="mt-5">
            <div className="font-serif text-[1.4rem]">this is my bio</div>
            <div className="font-serif text-[1rem] text-gray-700">Bio</div>
          </div>
          <div className="mt-5 flex flex-col  text-center ">
            <div className="font-serif text-[1.4rem] text-center">
              {profileDetails?.userName}
            </div>
            <div className="flex justify-center mt-1">
              <Person4Icon style={{ width: 20 }} />

              <div className="font-serif text-[1rem] text-gray-700 ml-2">
                Username
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div className="font-serif text-[1.4rem]">
              {dateDifference(profileDetails?.createdAt, new Date())}
            </div>
            <div className="flex justify-center mt-1">
              <CalendarMonthIcon style={{ width: 20 }} />
              <div className="font-serif text-[1rem] text-gray-700 ml-2">
                Joined
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
