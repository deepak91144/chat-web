import { isMobile } from "react-device-detect";
import Title from "../shared/Title";
import Footer from "./Footer";
import Header from "./Header";
import MobileMenu from "./MobileMenu";

const AppLayout = () => (WrapedComponent: any) => {
  return (props: any) => {
    return (
      <>
        <Title />
        {isMobile ? (
          <>
            <>
              <MobileMenu />
            </>
          </>
        ) : (
          <>
            <Header />
          </>
        )}

        <div className="relative top-16">
          <WrapedComponent {...props} />
        </div>
        {!isMobile && (
          <>
            <Footer />
          </>
        )}
      </>
    );
  };
};

export default AppLayout;
