import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Components/Home/HomePage";
import PageNotFound from "./Components/Page_Not_Found/PageNotFound";
import AboutUs from "./Components/About/AboutUs";
import ContactUs from "./Components/ContactUs/ContactUs";
import SingleBlog from "./Components/BlogDeatils/SingleBlog";
import GetAllBlogs from "./Components/AllBlogs/GetAllBlogs";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/post/:id" element={<SingleBlog />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/posts" element={<GetAllBlogs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
