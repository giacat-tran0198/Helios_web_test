import React, { Suspense } from "react";
import Nav from "./components/nav";
import Loading from "./components/loading";

const Staff = React.lazy(() => import("./components/staff"));

const App = () => (
  <>
    <Nav />
    <div className="container mt-4">
      <Suspense fallback={<Loading isLoading={true} />}>
        <Staff />
      </Suspense>
    </div>
  </>
);

export default App;
