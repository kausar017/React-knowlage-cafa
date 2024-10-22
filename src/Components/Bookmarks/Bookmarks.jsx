
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:col-span-1 border-2 bg-gray-300">
            <h3 className="text-xl font-semibold text-gray-900 text-center p-4">Bookmarks {bookmarks.length}</h3>
            {
              bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)  
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array
};

export default Bookmarks;