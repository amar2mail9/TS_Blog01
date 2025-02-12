import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

interface IProps {
  children: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <main>
      <Navbar />
      <section className=" px-lg:[10%] md:px-[8%] px-4">{children}</section>
      <Footer />
    </main>
  );
};

export default Layout;
