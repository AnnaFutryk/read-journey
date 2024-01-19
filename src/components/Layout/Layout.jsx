import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../common/Loader/Loader";

const Layout = () => {
  return (
    <>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
