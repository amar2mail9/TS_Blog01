import React, { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { FaBlog, FaHome, FaInfoCircle } from "react-icons/fa";
import axios from "axios";

import { TbMessageCircleFilled } from "react-icons/tb";
import { TiThMenu } from "react-icons/ti";
import { Link, useLocation } from "react-router-dom";
import { IPosts } from "../models/Posts";

interface IMenu {
  icon: React.ReactNode;
  path: string;
  name: string;
}

interface IState {
  showMenu?: boolean;
  showSearch?: boolean;
  showSearchResult?: boolean;
}

const Navbar: React.FC = () => {
  const [state, setState] = useState<IState>({
    showMenu: false,
    showSearch: false,
    showSearchResult: false,
  });

  const [posts, setPosts] = useState<IPosts>({
    posts: [],
  });
  const [searchQuery, setSearchQuery] = useState({
    value: "",
  });
  const location: string | any = useLocation();

  const menuList: IMenu[] = [
    {
      icon: <FaHome />,
      path: "/",
      name: "Home",
    },
    {
      icon: <FaBlog />,
      path: "/posts",
      name: "Blog",
    },
    {
      icon: <FaInfoCircle />,
      path: "/about-us",
      name: "About",
    },
    {
      icon: <TbMessageCircleFilled />,
      path: "/contact-us",
      name: "Contact",
    },
  ];

  const handleToggleMenu = (): void => {
    setState({ showMenu: !state.showMenu });
  };

  const handleToggleSearch = (): void => {
    setState({ showSearch: !state.showSearch });
  };

  const fetchPosts = async (endPoints: string) => {
    try {
      let res = await axios.get(`https://dummyjson.com/${endPoints}?limit=0`);

      if (res) {
        setPosts({ ...posts, posts: res.data.posts });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const filterPosts = posts.posts.filter((post) => {
    return post.title.toLowerCase().includes(searchQuery.value.toLowerCase());
  });

  useEffect(() => {
    fetchPosts("posts");
  }, []);
  return (
    <>
      <nav className="w-full sticky top-0 z-50 px-lg:[10%] md:px-[8%] px-10 bg-gray-800 h-16 flex items-center justify-between">
        <h1 className="text-2xl font-medium text-indigo-500">
          POLY<span className="text-blue-500">TECHUB</span>
        </h1>

        <ul className="md:flex gap-8 hidden">
          {menuList.map((item, idx) => {
            const isActive: boolean = item.path === location.pathname;
            return (
              <li key={idx}>
                <Link
                  className={`flex gap-2 items-center ${
                    isActive
                      ? " text-white font-semibold"
                      : " text-gray-500  font-normal"
                  }`}
                  to={item.path}
                >
                  {item.icon}
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* large screen Search */}
        <div className="w-[400px] relative lg:flex hidden bg-gray-700 h-9  rounded-sm border border-cyan-800">
          <input
            value={searchQuery.value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              if (e.target.value === "") {
                setState({ showSearchResult: false });
              } else {
                setState({ showSearchResult: true });
              }
              setSearchQuery({ value: e.target.value });
            }}
            type="text"
            placeholder="Search"
            className="w-full h-full  px-2 outline-0"
          />
          <button className="w-8 h-8 cursor-pointer">
            <CiSearch className="w-full h-full p-1" />
          </button>

          {state.showSearchResult && (
            <div className="absolute w-full h-72 overflow-y-scroll  bg-gray-800 p-4 rounded-lg shadow-2xl scrollbar-hidden  top-12 flex flex-col gap-3">
              {posts.posts.length > 0 ? (
                filterPosts.map(({ title, id }, idx) => {
                  return (
                    <Link
                      onClick={() => {
                        setState({ showSearchResult: false });
                        setSearchQuery({ value: "" });
                      }}
                      key={idx}
                      to={`/post/${id}`}
                    >
                      {title}
                    </Link>
                  );
                })
              ) : (
                <p>Not Found</p>
              )}
            </div>
          )}
        </div>

        <div className="lg:hidden flex">
          <button
            onClick={handleToggleSearch}
            className="w-8 h-8 flex items-center cursor-pointer justify-center"
          >
            <CiSearch className="w-full h-full p-1" />
          </button>

          <button
            onClick={handleToggleMenu}
            className="w-8 h-8 md:hidden block cursor-pointer"
          >
            <TiThMenu className="w-full h-full p-1" />
          </button>
        </div>
      </nav>

      {/* small screen Menu */}

      {state.showMenu && (
        <div className="fixed z-50 w-full h-screen   bg-[#1212127e] top-0 right-0 md:block flex">
          <div className="w-[70%] h-full bg-gray-800 relative  px-3 py-5">
            <button
              onClick={handleToggleMenu}
              className="absolute right-5  cursor-pointer top-5 text-rose-600 text-lg"
            >
              <CgClose />
            </button>

            <div>
              <ul className="flex flex-col gap-3 mt-10 items-start">
                {menuList.map((item, idx) => {
                  const isActive: boolean = item.path === location.pathname;
                  return (
                    <li key={idx} className="w-full ">
                      <Link
                        className={`flex gap-2 px-4 py-2 rounded-lg   hover:bg-gray-600 duration-200 w-full items-center ${
                          isActive
                            ? "text-gray-500  bg-gray-700  font-semibold"
                            : "text-white  font-normal "
                        }`}
                        to={item.path}
                      >
                        {item.icon}
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div
            onClick={handleToggleMenu}
            className="bg-transparent w-[30%] h-full"
          ></div>
        </div>
      )}

      {/* small screen Search */}

      {state.showSearch && (
        <div className="fixed top-0 z-50 right-0 h-screen w-full bg-[#121212ec]">
          <div className="flex justify-end ">
            <button
              onClick={handleToggleSearch}
              className="   cursor-pointer p-5  text-rose-600 text-lg"
            >
              <CgClose />
            </button>
          </div>
          <div className="w-full px-5">
            <input
              type="text"
              value={searchQuery.value}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setSearchQuery({ value: e.target.value });
              }}
              placeholder="Search..."
              className="p-2 rounded-lg text-lg outline-0 border border-cyan-300 bg-gray-800 w-full "
            />

            <div className="py-3 px-4 flex flex-col gap-3 h-96 overflow-y-scroll scrollbar-hidden">
              {posts.posts.length > 0 ? (
                filterPosts.map((post) => (
                  <Link
                    onClick={() => {
                      setState({ showSearch: false });
                    }}
                    to={`/post/${post.id}`}
                    key={post.id}
                  >
                    {post.title}
                  </Link>
                ))
              ) : (
                <p>No results found</p> // Change the "loading..." to a message for empty results
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
