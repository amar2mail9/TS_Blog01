import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import Layout from "../Layout/Layout";
import { FaEye } from "react-icons/fa";

import { FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";

// Define Blog Interface
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
interface isLoading {
  state: boolean;
}

const GetAllBlogs: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [limit, setLimit] = useState(10);
  const [loading, setLoading] = useState<isLoading>({ state: false });

  const fetchBlogs = async () => {
    setLoading({ state: true });
    try {
      const res = await axios.get<{ posts: Blog[] }>(
        `https://dummyjson.com/posts?limit=${limit}`
      );
      setBlogs(res.data.posts);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading({ state: false });
    }
  };

  const onLoadMore = () => {
    setLimit((prev) => prev + 10);
  };

  console.log(limit);

  useEffect(() => {
    fetchBlogs();
  }, [limit]);

  return (
    <Layout>
      <div className="md:px-6 md:py-12">
        {/* Title Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl font-bold text-indigo-500 mb-4">
            All Blog Posts
          </h1>
          <p className="text-xl text-gray-300">
            Browse through our latest blog posts
          </p>
        </motion.div>

        {/* Blog List Section */}

        {blogs.length === 0 ? (
          <p className="text-center text-cyan-400">loading...</p>
        ) : (
          <div className="grid sm:grid-cols-1  lg:grid-cols-2 gap-8">
            {blogs.map((blog, idx) => {
              return (
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
                        src="https://thumbs.dreamstime.com/b/blogging-blog-concepts-ideas-worktable-blogging-blog-concepts-ideas-white-worktable-110423482.jpg"
                        alt=""
                        className="md:w-48 h-48 w-full p-3 object-cover object-center md:rounded-full rounded-lg"
                      />
                    </div>
                    <div className="md:w-[65%] flex flex-col gap-3">
                      <h1 className="text-xl line-clamp-2 ">{blog.title}</h1>
                      <p className="text-gray-600 text-xs flex ">
                        {blog.author || "UNKNOWN  User "}{" "}
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
              );
            })}
          </div>
        )}

        <div className="flex justify-center mt-16">
          {limit < 251 ? (
            <button
              onClick={onLoadMore}
              className="bg-gray-950 px-8 py-2 rounded-lg hover:bg-gray-800 cursor-pointer duration-300"
            >
              {loading.state ? "Loading..." : "  Load More"}
            </button>
          ) : null}
        </div>
      </div>
    </Layout>
  );
};

export default GetAllBlogs;
