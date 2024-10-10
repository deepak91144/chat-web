import GroupuserItem from "./GroupuserItem";

const GroupUserList = ({
  members,
  group,
  selectUser,
  deSelectUser,
  selectedMembers,
  showingMembersList = false,
}: any) => {
  return (
    <>
      <div>
        {members?.map((member: any) => {
          if (!group.members?.includes(member._id) || showingMembersList)
            return (
              <>
                <GroupuserItem
                  member={member}
                  selectUser={selectUser}
                  deSelectUser={deSelectUser}
                  isSelected={selectedMembers?.includes(member._id)}
                  showingMembersList={showingMembersList}
                />
              </>
            );
        })}
      </div>
    </>
  );
};

export default GroupUserList;
