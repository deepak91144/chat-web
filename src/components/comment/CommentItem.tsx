const CommentItem = ({ comment }: any) => {
  return (
    <>
      <div className="flex flex-col mt-5">
        <div className="text-[1rem] font-semibold">{comment.user.name}:</div>
        <div className="pl-5">{comment.comment}</div>
      </div>
    </>
  );
};

export default CommentItem;
