import GroupItem from "./GroupItem";

const GroupList = ({ myGroups = [], chatId, selectGroup }: any) => {
  return (
    <>
      <div>
        <div className="md:hidden text-center">My Groups</div>
        {myGroups.length > 0 ? (
          myGroups.map((group: any) => {
            return (
              <>
                <GroupItem
                  group={group}
                  chatId={chatId}
                  selectGroup={selectGroup}
                />
              </>
            );
          })
        ) : (
          <>
            <div className="absolute top-[50%] left-[40%]">No Groups Found</div>
          </>
        )}
      </div>
    </>
  );
};

export default GroupList;
