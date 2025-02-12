import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

interface IPost {
  title: string;
  body: string;
  author: string;
  date: string;
  imageUrl: string; // Added for the featured image URL
}

const SingleBlog: React.FC = () => {
  const [post, setPost] = useState<IPost | null>(null);

  const { id } = useParams();

  // Fetch the post details by ID
  const fetchPost = async () => {
    try {
      const res = await axios.get(`https://dummyjson.com/posts/${id}`);
      setPost(res.data);
    } catch (error) {
      console.error("Error fetching the post:", error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [id]);

  return (
    <Layout>
      <div className="md:px-6 md:py-12 px-4 py-8">
        {post ? (
          <div className="max-w-4xl mx-auto  text-white md:p-8 ">
            {/* Featured Image Section */}
            <div className="mb-8">
              <img
                src={
                  post.imageUrl ||
                  "https://thumbs.dreamstime.com/b/blogging-blog-concepts-ideas-worktable-blogging-blog-concepts-ideas-white-worktable-110423482.jpg"
                } // Fallback to placeholder if no image URL
                alt={post.title}
                className="w-full h-72 object-cover rounded-lg sm:h-96"
              />
            </div>

            {/* Post Title */}
            <h1 className="text-3xl sm:text-4xl font-semibold text-gray-100 mb-4">
              {post.title}
            </h1>

            {/* Post Metadata */}
            <div className="flex items-center text-sm text-gray-400 mb-6">
              <span className="mr-4">By {post.author}</span>
              <span>Posted on {new Date(post.date).toLocaleDateString()}</span>
            </div>

            {/* Post Content */}
            <div className="text-lg text-gray-300 mb-8">
              <p>{post.body}</p>
            </div>

            {/* Footer with Navigation */}
            <div className="flex flex-col sm:flex-row justify-between items-center text-gray-400">
              <Link to={"/posts"}>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition mb-4 sm:mb-0">
                  Go to Blog List
                </button>
              </Link>
              <div className="flex space-x-3">
                <button className="px-4 py-2 bg-gray-700 text-gray-300 rounded-md hover:bg-gray-600 transition">
                  Share
                </button>
                <button className="px-4 py-2 bg-gray-700 text-gray-300 rounded-md hover:bg-gray-600 transition">
                  Comment
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center text-lg text-gray-500">
            <p>Loading...</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default SingleBlog;
