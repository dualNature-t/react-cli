import React, { Suspense } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

const Index = React.lazy(
  () => import(/* webpackChunkName: 'homePage' */ "../Pages/Index")
);

const RootRouter = (): JSX.Element => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default RootRouter;
