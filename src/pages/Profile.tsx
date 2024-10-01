import Person4Icon from "@mui/icons-material/Person4";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AvatarCard from "../components/shared/AvatarCard";
const Profile = () => {
  return (
    <>
      <div className="fixed right-0 top-16 w-[15%]  bg-blue-400 h-screen ">
        <div className="flex flex-col p-10 mt-10  text-center">
          <div className="flex justify-center">
            <AvatarCard avatar={["https://i.pravatar.cc/150?img=3"]} />
          </div>
          <div className="mt-5">
            <div className="font-serif text-[1.4rem]">this is my bio</div>
            <div className="font-serif text-[1rem] text-gray-700">Bio</div>
          </div>
          <div className="mt-5 flex flex-col  text-center ">
            <div className="font-serif text-[1.4rem] text-center">Deepak</div>
            <div className="flex justify-center mt-1">
              <Person4Icon style={{ width: 20 }} />

              <div className="font-serif text-[1rem] text-gray-700 ml-2">
                Username
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div className="font-serif text-[1.4rem]">3 months ago</div>
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
