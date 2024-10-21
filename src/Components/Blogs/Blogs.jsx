import { useEffect, useState } from "react";


const Blogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('bloge.json')
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))
    }, [])


    return (
        <div>
            <h1>hello Blogs</h1>
        </div>
    );
};

export default Blogs;