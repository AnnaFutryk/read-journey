import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../common/Loader/Loader";
import Header from "../modules/Header/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
