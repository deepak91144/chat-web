import { useLocation, useParams, useSearchParams } from "react-router-dom";
import GroupList from "../components/shared/GroupList";
import { sampleData } from "../constants/sampleData";
import GroupDetails from "../components/shared/GroupDetails";
import AppLayout from "../components/layout/AppLayout";
import Profile from "./Profile";

const Group = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const chatId = searchParams.get("group");

  return (
    <>
      <div className="flex w-screen ">
        <div className="w-[30%] border">
          <GroupList myGroups={sampleData} chatId={chatId} />
        </div>
        <div className="w-[50%] flex flex-col items-center">
          <GroupDetails />
        </div>
        <Profile />
      </div>
    </>
  );
};
export default AppLayout()(Group);
