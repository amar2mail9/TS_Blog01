import React from "react";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";

const PageNotFound: React.FC = () => {
  return (
    <Layout>
      <div className="flex w-full h-[70vh] items-center justify-center ">
        <div className="md:w-4/12  w-full flex-col h-96 border border-gray-800 p-5 shadow-2xl rounded-2xl flex items-center justify-center ">
          <h1 className="text-rose-600 text-3xl text-center">404 !Error</h1>
          <p className="text-rose-200">Page Not Found</p>
          <Link to={"/"} className="bg-red-500 px-8 my-8 py-2 rounded-lg">
            back to home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default PageNotFound;
