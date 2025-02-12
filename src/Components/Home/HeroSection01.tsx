import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

interface IPost {
  id: number;
  title: string;
  body: string;
  imageUrl?: string;
}

const HeroSection01: React.FC = () => {
  const [posts, setPosts] = useState<IPost[]>([]); // Array to hold posts

  const fetchPosts = async (endPoint: string) => {
    try {
      const res = await axios.get<{ posts: IPost[] }>(
        `https://dummyjson.com${endPoint}`
      );
      if (res) {
        setPosts(res.data.posts); // Directly set the posts array
      }
    } catch (error) {
      console.error("Error fetching posts", error);
    }
  };

  useEffect(() => {
    fetchPosts("/posts?limit=5"); // Fetch posts on component mount
  }, []);

  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rounded-2xl md:w-[80%] w-full"
      >
        {posts.length > 0 ? (
          posts.map((post, idx) => (
            <SwiperSlide key={idx} className="mt-6 rounded-2xl ">
              <img
                src={
                  post.imageUrl ||
                  "https://thumbs.dreamstime.com/b/blogging-blog-concepts-ideas-worktable-blogging-blog-concepts-ideas-white-worktable-110423482.jpg"
                } // Assuming each post has an 'imageUrl' property
                alt={post.title}
                className=" w-full relative md:h-[65vh] rounded-lg  object-cover"
              />
              <div className="w-full h-full absolute bg-[#121212ad] top-0 rounded-md"></div>

              <div className="text-white absolute text-xl  bottom-10 left-10 text-center">
                <h3 className="text-4xl mb-8">{post.title}</h3>
                <p className="text-gray-400 line-clamp-3">{post.body}</p>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <div className="w-full h-64 flex justify-center items-center bg-gray-600">
              <p className="text-white">Loading...</p>
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
};

export default HeroSection01;
