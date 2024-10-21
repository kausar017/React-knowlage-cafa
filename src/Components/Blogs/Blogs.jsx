import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('bloge.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
            .catch(error => console.log(error))
    }, [])


    return (
        <div className="md:col-span-2">
            <h1>Blogs: {blogs.length}</h1>
            {
                blogs.map(blog => <Blog
                    key={blog.id} blog={blog}

                ></Blog>)
            }
        </div>
    );
};

export default Blogs;