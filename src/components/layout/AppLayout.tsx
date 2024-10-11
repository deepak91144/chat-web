import { isMobile } from "react-device-detect";
import Title from "../shared/Title";
import Footer from "./Footer";
import Header from "./Header";
import MobileMenu from "./MobileMenu";
import { primary } from "../../constants/Colors";

const AppLayout = () => (WrapedComponent: any) => {
  return (props: any) => {
    return (
      <>
        <div className={`bg-[${primary}]`}>
          <Title />

          <MobileMenu />

          <Header />

          <div className="md:mt-20 mt-12">
            <WrapedComponent {...props} />
          </div>
          {!isMobile && (
            <>
              <Footer />
            </>
          )}
        </div>
      </>
    );
  };
};

export default AppLayout;
