import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Detail from "../Pages/Detail";
import Home from "../Pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="detail/:id" element={<Detail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
