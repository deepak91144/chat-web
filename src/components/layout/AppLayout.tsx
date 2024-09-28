import Title from "../shared/Title";
import Footer from "./Footer";
import Header from "./Header";

const AppLayout = () => (WrapedComponent: any) => {
  return (props: any) => {
    return (
      <>
        <Title />
        <Header />
        <WrapedComponent {...props} />
        <Footer />
      </>
    );
  };
};

export default AppLayout;
