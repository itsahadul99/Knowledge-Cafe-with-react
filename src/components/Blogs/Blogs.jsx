import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'
const Blogs = ({handleBookmarks, handlerMarkAsReading}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    // console.log(blogs);
    return (
        <section>
            <div className="w-full">
                {
                    blogs.map(blog => <Blog
                    key={blog.id}
                    blog={blog}
                    handleBookmarks ={handleBookmarks}
                    handlerMarkAsReading = {handlerMarkAsReading}
                    ></Blog>)
                }
            </div>
        </section>
    );
};
Blogs.propTypes = {
    handleBookmarks: PropTypes.func.isRequired,
    handlerMarkAsReading: PropTypes.func.isRequired
}
export default Blogs;