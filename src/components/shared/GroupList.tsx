import GroupItem from "./GroupItem";

const GroupList = ({ width = "100%", myGroups = [], chatId }: any) => {
  return (
    <>
      <div>
        {myGroups.length > 0 ? (
          myGroups.map((group: any) => {
            return (
              <>
                <GroupItem group={group} chatId={chatId} />
              </>
            );
          })
        ) : (
          <>
            <div>No Groups Found</div>
          </>
        )}
      </div>
    </>
  );
};

export default GroupList;
