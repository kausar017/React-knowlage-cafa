import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
    const { title, cover, author_img, author, posted_date, reading_time, hashtags } = blog;

    return (
        <div className=' space-y-8 pb-5'>
            <img className='max-h-[450px] w-full object-cover' src={cover} alt={`cover pictur of the title ${title}`} />
            <div className='flex  items-center justify-between px-3'>
                <div className='flex items-center gap-4'>
                    <img className='w-14 object-cover rounded-full' src={author_img} alt="" />
                    <div>
                        <h2 className='text-2xl font-bold'>{author}</h2>
                        <p className='text-base text-gray-400 font-bold'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <p className='text-base font-semibold text-gray-400 '>{reading_time} read </p>
                    <button><img className='w-5' src="https://img.icons8.com/?size=80&id=ttPVWWAN2Fak&format=png" alt="" /></button>
                </div>
            </div>

            <h2 className='text-4xl font-bold'>{title}</h2>
            <p className='text-gray-400 font-medium'>
                {
                    hashtags.map(hash => <span> <a href="">{hash}</a></span>)
                }
            </p>
            <p>
                <a className='text-[#6047EC] underline' href="">Mark as read</a>
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}


export default Blog;