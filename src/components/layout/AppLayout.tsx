import Title from "../shared/Title";
import Footer from "./Footer";
import Header from "./Header";

const AppLayout = () => (WrapedComponent: any) => {
  return (props: any) => {
    return (
      <>
        <Title />
        <Header />
        <div className="relative top-16">
          <WrapedComponent {...props} />
        </div>
        <Footer />
      </>
    );
  };
};

export default AppLayout;
