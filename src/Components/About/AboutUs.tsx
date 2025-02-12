import React from "react";
import { motion } from "framer-motion";
import Layout from "../Layout/Layout";

const AboutUs: React.FC = () => {
  return (
    <Layout>
      <div>
        {/* Section 1: Title and Introduction */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl font-bold text-indigo-500 mb-4">About Us</h1>
          <p className="text-xl text-gray-300">
            We are a passionate team of tech enthusiasts building amazing
            products!
          </p>
        </motion.div>

        {/* Section 2: Team */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {/* Team Member 1 */}
          <div className="bg-gray-700 rounded-lg p-6">
            <motion.img
              src="https://thumbs.dreamstime.com/b/blogging-blog-concepts-ideas-worktable-blogging-blog-concepts-ideas-white-worktable-110423482.jpg"
              alt="Team Member"
              className="w-full h-48 object-cover rounded-lg mb-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <h2 className="text-2xl font-semibold mb-2">John Doe</h2>
            <p className="text-gray-400">CEO & Co-Founder</p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-gray-700 rounded-lg p-6">
            <motion.img
              src="https://thumbs.dreamstime.com/b/blogging-blog-concepts-ideas-worktable-blogging-blog-concepts-ideas-white-worktable-110423482.jpg"
              alt="Team Member"
              className="w-full h-48 object-cover rounded-lg mb-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <h2 className="text-2xl font-semibold mb-2">Jane Smith</h2>
            <p className="text-gray-400">Lead Developer</p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-gray-700 rounded-lg p-6">
            <motion.img
              src="https://thumbs.dreamstime.com/b/blogging-blog-concepts-ideas-worktable-blogging-blog-concepts-ideas-white-worktable-110423482.jpg"
              alt="Team Member"
              className="w-full h-48 object-cover rounded-lg mb-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <h2 className="text-2xl font-semibold mb-2">Michael Brown</h2>
            <p className="text-gray-400">Product Designer</p>
          </div>
        </motion.div>

        {/* Section 3: Our Mission */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-xl text-gray-400">
            At POLYTECHUB, our mission is to innovate, educate, and create
            solutions that positively impact the tech world. We aim to provide
            accessible resources, cutting-edge solutions, and community-driven
            knowledge.
          </p>
        </motion.div>

        {/* Section 4: Values */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <h2 className="text-3xl font-semibold mb-6">Our Values</h2>
          <div className="flex flex-wrap justify-center gap-8 overflow-x-hidden">
            {/* Value 1 */}
            <motion.div
              className="bg-gray-700 p-6 rounded-lg shadow-lg w-64"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold mb-4">Innovation</h3>
              <p className="text-gray-400">
                We believe in constant innovation to stay ahead in the tech
                world.
              </p>
            </motion.div>

            {/* Value 2 */}
            <motion.div
              className="bg-gray-700 p-6 rounded-lg shadow-lg w-64"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold mb-4">Community</h3>
              <p className="text-gray-400">
                Our strength lies in a strong, supportive community that fosters
                growth.
              </p>
            </motion.div>

            {/* Value 3 */}
            <motion.div
              className="bg-gray-700 p-6 rounded-lg shadow-lg w-64"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold mb-4">Education</h3>
              <p className="text-gray-400">
                We aim to empower individuals with knowledge and skills to
                thrive.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default AboutUs;
