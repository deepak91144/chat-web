import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./components/auth/PrivateRoutes";
import PageNotFound from "./pages/PageNotFound";
import { LayoutLoader } from "./components/layout/Loadeerrs";
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Chat = lazy(() => import("./pages/Chat"));
const Group = lazy(() => import("./pages/Group"));

import { Provider } from "react-redux";
import { store } from "./store/store";
const App = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Suspense fallback={<LayoutLoader />}>
            <Routes>
              <Route element={<PrivateRoutes />}>
                <Route path="/" element={<Home />} />
                <Route path="/chat/:chatId" element={<Chat />} />
                <Route path="/groups" element={<Group />} />
              </Route>

              <Route path="/login" element={<Login />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
