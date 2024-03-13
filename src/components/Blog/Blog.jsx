import { CiBookmark } from "react-icons/ci";
import PropTypes from 'prop-types';
const Blog = ({blog}) => {
    const {cover, title, author_img, author,posted_date,reading_time,hashtags} = blog;
    console.log(blog);
    return (
        <div className='container mx-auto space-y-4 my-5'>
            <img className='w-full' src={cover} alt={title} />
            <div className='flex justify-between items-center'>
                <div className='flex gap-5 items-start '>
                    <img className='w-14' src={author_img} alt={author}/>
                    <div>
                        <h1 className='text-xl font-bold '>{author}</h1>
                        <p className='text-xs font-medium text-[#0B0B0B99] mt-1'>{posted_date}</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <span className='text-[#0B0B0B99]'>{reading_time} min read time </span>
                    <button className="ml-2"><CiBookmark /></button>
                </div>
            </div>
            <h1 className='text-4xl font-bold'>{title}</h1>
            <div className='flex gap-5'>
            {
                hashtags.map((item, idx) => <p 
                    className='text-xl text-[#0B0B0B99]'
                    key={idx}
                >#{item}</p>)
            }
            </div>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
}
export default Blog;