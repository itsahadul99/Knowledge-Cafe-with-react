import PropTypes from 'prop-types'
const BookMarks = ({bookmarks, readingmark}) => {
    
    return (
        <div className="w-1/3 my-5">
            <h1 className="p-5 border border-[#6047EC] rounded-lg mb-5 text-[#6047EC] font-bold bg-[#3C2FEC1A]">Spent time on read : {readingmark} min</h1>
            <div className="bg-slate-100 rounded-lg p-5 space-y-4">
                <h1 className="text-left font-bold">Bookmarked Blogs : {bookmarks.length} </h1>
                    {
                        bookmarks.map((bookmark, idx) => <div 
                        className="bg-white p-2 rounded-lg"
                        key={idx}>
                            <h1>{bookmark.title}</h1>
                        </div>)
                    }
            </div>
        </div>
    );
};
BookMarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingmark: PropTypes.number.isRequired
}
export default BookMarks;