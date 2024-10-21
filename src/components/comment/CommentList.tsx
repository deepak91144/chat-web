import CommentItem from "./CommentItem";

const CommentList = ({ comments = [] }: any) => {
  return (
    <>
      <div className="mt-5">Comment section</div>

      {comments.map((comment: any) => {
        return (
          <>
            <CommentItem comment={comment} />
          </>
        );
      })}
    </>
  );
};

export default CommentList;
