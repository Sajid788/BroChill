import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { FaArrowLeft, FaSpinner } from "react-icons/fa6";
import Footer from "../components/Footer";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/blogs/${id}`)
      .then((res) => setBlog(res.data));
  }, [id]);

  if (!blog)
    return (
      <div className="flex justify-center items-center h-screen">
        <FaSpinner className="text-4xl text-gray-600 animate-spin" />
      </div>
    );

  return (
    <div>
      <div className=" p-4">
        <Link to="/">
          <button className="p-2 rounded-full bg-gray-200">
            <FaArrowLeft />
          </button>
        </Link>
        <img
          src={blog.imageUrl}
          alt={blog.title}
          className="w-full lg:h-[35rem] h-full object-cover rounded-md mt-2"
        />
        <p className="text-gray-500 mt-4">By {blog.author}</p>
        <h1 className="text-2xl font-bold mt-2">{blog.title}</h1>
        <p className="text-gray-600 mt-2">{blog.content}</p>
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetails;
