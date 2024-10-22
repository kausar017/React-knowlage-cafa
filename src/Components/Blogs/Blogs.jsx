

import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'

const Blogs = ({ handalBookmark }) => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('bloge.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
            .catch(error => console.log(error))
    }, [])


    return (
        <div className="md:col-span-2">
            {/* <h1 className="text-xl font-semibold">Blogs: {blogs.length}</h1> */}
            {
                blogs.map(blog => <Blog
                    key={blog.id} blog={blog}
                    handalBookmark={handalBookmark}
                ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handalBookmark: PropTypes.func
}


export default Blogs;