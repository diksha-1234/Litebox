// ContactPage.jsx
import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Mail, Phone, Send } from "lucide-react";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-500 to-pink-600 p-6">
      <motion.div
        className="max-w-3xl w-full bg-white rounded-3xl shadow-2xl p-8 space-y-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <motion.h1
          className="text-5xl font-extrabold text-center text-gradient bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-pink-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Contact Us
        </motion.h1>
        <motion.p
          className="text-center text-lg text-gray-800 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          We'd love to hear from you! Drop your queries or feedback below.
        </motion.p>

        <Card className="rounded-2xl shadow-lg border-0 bg-gradient-to-r from-indigo-100 to-pink-200">
          <CardContent className="p-6 space-y-6">
            <form className="space-y-5">
              <div>
                <label className="block mb-2 text-xl font-semibold text-gray-700">Name</label>
                <input
                  type="text"
                  className="w-full border border-indigo-300 rounded-lg p-4 shadow-md focus:ring-2 focus:ring-pink-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block mb-2 text-xl font-semibold text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full border border-indigo-300 rounded-lg p-4 shadow-md focus:ring-2 focus:ring-pink-500"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block mb-2 text-xl font-semibold text-gray-700">Message</label>
                <textarea
                  className="w-full border border-indigo-300 rounded-lg p-4 shadow-md h-36 resize-none focus:ring-2 focus:ring-pink-500"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 text-xl flex justify-center items-center gap-3">
                <Send size={20} /> Send Message
              </Button>
            </form>

            <div className="pt-5 text-sm text-gray-600 text-center">
              <div className="flex justify-center gap-4 items-center">
                <Mail size={16} /> contact@example.com
              </div>
              <div className="flex justify-center gap-4 items-center mt-3">
                <Phone size={16} /> +91 12345 67890
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default ContactPage;
