import { useEffect, useState } from "react";


const Blogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('bloge.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
            .catch(error => console.log(error))
    }, [])


    return (
        <div className="md:col-span-2 border-2">
            <h1>hello Blogs: {blogs.length}</h1>
        </div>
    );
};

export default Blogs;