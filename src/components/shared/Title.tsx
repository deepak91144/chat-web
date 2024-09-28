import { Helmet } from "react-helmet-async";

const Title = ({
  title = "Chat App",
  description = "This is the chat app",
}) => {
  return (
    <>
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
        </Helmet>
      </div>
    </>
  );
};

export default Title;
