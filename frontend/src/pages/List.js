import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import { FaHandsClapping } from "react-icons/fa6";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const List = () => {
    const [blogs, setBlogs] = useState([]);
    const [searchQuery, setSearchQuery] = useState(""); 
    const [filteredBlogs, setFilteredBlogs] = useState([]); 

    useEffect(() => {
        axios.get("https://bro-chill-henna.vercel.app/api/blogs").then((res) => {
            setBlogs(res.data);
            setFilteredBlogs(res.data); 
        });
    }, []);

    // Function to filter blogs based on search input
    const handleSearch = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);
        const filtered = blogs.filter((blog) =>
            blog.title.toLowerCase().includes(query)
        );
        setFilteredBlogs(filtered);
    };

    return (
        <div>
            <Navbar />

            {/* Search Input */}
            <div className='lg:p-6 p-4'>
                <input
                    type="text"
                    placeholder="Search by title..."
                    value={searchQuery}
                    onChange={handleSearch}
                    className="w-60 p-2  border border-gray-300 rounded-md outline-none"
                />
            </div>

            <div className="lg:px-6 px-4">
                <h1 className="text-3xl font-bold mb-6">Blogs</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredBlogs.map((blog) => (
                        <Link key={blog._id} to={`/blog/${blog._id}`} className="block hover:shadow-lg">
                            <div className="border border-neutral-200 rounded-md overflow-hidden flex gap-4 relative">
                                <img src={blog.imageUrl} alt={blog.title} className="lg:w-60 lg:h-48 w-40 h-36 object-cover rounded-md" />

                                <div className="lg:py-3 py-2">
                                    <p className="text-neutral-500 text-sm">{blog.author}</p>

                                    <div className="flex justify-between items-center text-sm text-gray-500 mb-1">
                                        <span>{blog.date}</span>
                                        <span>{blog.readTime}</span>
                                    </div>
                                    <h2 className="lg:text-lg font-semibold">{blog.title}</h2>
                                    <p className="lg:line-clamp-3 line-clamp-2 text-xs text-neutral-500 lg:mt-0 mt-1">{blog.content}</p>

                                    <div className="flex items-center gap-4 text-gray-500 text-sm lg:mt-2 mt-1">
                                        <div className="flex gap-3 items-center">
                                            <span>80.3K</span>
                                            <FaHandsClapping />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <Footer/>
        </div>
    );
};

export default List;
