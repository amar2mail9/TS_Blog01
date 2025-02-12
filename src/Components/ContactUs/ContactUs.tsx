import React from "react";
import Layout from "../Layout/Layout";
import { motion } from "framer-motion"; // Import motion from framer-motion

const ContactUs: React.FC = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold text-indigo-600 text-center mb-12">
          Contact Us
        </h1>

        <motion.form
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 50 }} // Slide in and fade-in effect for the form
          className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg mx-auto"
        >
          <div className="mb-4">
            <label className="block text-lg font-semibold text-white">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg font-semibold text-white">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg font-semibold text-white">
              Message
            </label>
            <textarea
              name="message"
              required
              className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none"
            ></textarea>
          </div>

          <motion.button
            type="button" // Changed from submit to button since it's UI-only
            className="w-full p-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send
          </motion.button>
        </motion.form>
      </motion.div>
    </Layout>
  );
};

export default ContactUs;
