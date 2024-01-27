import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBooks } from "../../../redux/books/booksOperations";
import RecommendItem from "./RecommendItem";

const RecommendList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);

  const allBooks = useSelector((state) => state.books.results);

  return (
    <ul>
      {allBooks.map(({ _id, title, author, imageUrl }) => (
        <RecommendItem key={_id} title={title} author={author} url={imageUrl} />
      ))}
    </ul>
  );
};

export default RecommendList;
