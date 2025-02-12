import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { FcLike } from "react-icons/fc"; // Add this import
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Add this import

interface Blog {
  id: number;
  title: string;
  body: string;
  imageUrl: string;
  author: string;
  date: string;
  views: number;
  reactions: {
    likes: number;
    dislikes: number;
  };
}

const HeroSection03: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]); // Corrected state type

  const fetchBlogs = async () => {
    try {
      const res = await axios.get(`https://dummyjson.com/posts?limit=4`);
      console.log(res);
      setBlogs(res.data.posts); // Set blogs from the API response correctly
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div>
      <div className="flex items-center mt-8 justify-between">
        <h1 className="text-gray-600 text-xl font-semibold">Latest Blogs</h1>
        <h1></h1>
      </div>

      <div className="flex gap-8">
        <div>
          {blogs.length === 0 ? (
            <p className="text-center text-cyan-400">loading...</p>
          ) : (
            <div className="grid sm:grid-cols-1 mt-7 lg:grid-cols-2 gap-8">
              {blogs.map((blog, idx) => (
                <Link key={idx} to={`/post/${blog.id}`}>
                  <motion.div
                    className="bg-gray-800 hover:shadow-2xl shadow-black hover:scale-105 duration-300 text-white md:p-6 p-2 rounded-lg mb-4 flex md:flex-row flex-col gap-3 items-center"
                    initial={{ opacity: 0, y: 50 }} // Initial state - opacity 0 and moved down
                    whileInView={{ opacity: 1, y: 0 }} // Animated state - opacity 1 and moved to the original position
                    transition={{ duration: 0.5 }} // Transition time for the animation
                    viewport={{ once: true }} // Only trigger animation once when in view
                  >
                    <div className="md:w-[35%] w-full">
                      <img
                        src={
                          blog.imageUrl ||
                          "https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg?semt=ais_hybrid"
                        }
                        alt={blog.title}
                        className="md:w-48 h-48 w-full p-3 object-cover object-center md:rounded-full rounded-lg"
                      />
                    </div>
                    <div className="md:w-[65%] flex flex-col gap-3">
                      <h1 className="text-xl line-clamp-2">{blog.title}</h1>
                      <p className="text-gray-600 text-xs flex">
                        {blog.author || "UNKNOWN User"}{" "}
                        {blog.date || "01/01/2001"}
                      </p>
                      <p className="line-clamp-3 text-gray-400 text-sm">
                        {blog.body}
                      </p>

                      <div className="flex items-center justify-between">
                        <button className="flex gap-2 text-cyan-500 items-center">
                          {blog.views >= 1000
                            ? `${(blog.views / 1000).toFixed(1)}K`
                            : blog.views}
                          <FaEye />
                        </button>
                        <button className="flex gap-2 text-green-500 items-center">
                          {blog.reactions.likes >= 1000
                            ? `${(blog.reactions.likes / 1000).toFixed(1)}K`
                            : blog.reactions.likes}
                          <FcLike />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          )}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default HeroSection03;
