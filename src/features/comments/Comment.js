import { formatDate } from '../../utils/formatDate';

const Comment = ({ comment }) => {
    const {text, rating, author, date } = comment;

    return (
        <p>
            {text}
            <br/>
            {rating}/5 stars -- {author}, {formatDate(date)}
        </p>
    )

};

export default Comment;