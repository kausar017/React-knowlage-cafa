import PropTypes from 'prop-types';
import { MdOutlineBookmarkBorder } from "react-icons/md";

const Blog = ({ blog, handalBookmark }) => {
    const { title, cover, author_img, author, posted_date, reading_time, hashtags } = blog;

    return (
        <div className=' space-y-8 pb-5'>
            <img className='max-h-[450px] w-full object-cover rounded-xl' src={cover} alt={`cover pictur of the title ${title}`} />
            <div className='flex  items-center justify-between px-3'>
                <div className='flex items-center gap-4'>
                    <img className='w-14 object-cover rounded-full' src={author_img} alt="" />
                    <div>
                        <h2 className='text-2xl font-bold'>{author}</h2>
                        <p className='text-base text-gray-400 font-bold'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center md:gap-2 text-base font-semibold text-gray-400'>
                    <p className=' '>{reading_time} read </p>
                    <button onClick={()=> handalBookmark(blog)} className='text-xl'>
                        <MdOutlineBookmarkBorder></MdOutlineBookmarkBorder>
                    </button>
                </div>
            </div>

            <h2 className='text-4xl font-bold'>{title}</h2>
            <p className='text-gray-400 font-medium space-x-2'>
                {
                    hashtags.map((hash, index) => <span key={index}> <a href="">{hash}</a></span>)
                }
            </p>
            <p>
                <a className='text-[#6047EC] underline font-semibold' href="">Mark as read</a>
            </p>
            <hr />
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handalBookmark: PropTypes.func
}

export default Blog;