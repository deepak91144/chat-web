import PageNotFoundImage from "../assets/images/pagenotfound.jpg";

const PageNotFound = () => {
  const redirectToHome = () => {
    window.location.href = "/";
  };
  return (
    <>
      <div className="w-screen h-screen bg-blue-400 flex justify-center items-center text-2xl text-red-600">
        <img
          onClick={redirectToHome}
          src={PageNotFoundImage}
          alt="page not found image"
          className="w-[100%] h-[100%] object-cover cursor-pointer"
        />
      </div>
    </>
  );
};

export default PageNotFound;
