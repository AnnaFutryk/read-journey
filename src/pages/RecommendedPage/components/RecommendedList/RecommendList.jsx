import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../../../../redux/books/booksOperations";
import {
  selectTotalPages,
  selectAllBooks,
} from "../../../../redux/books/booksSelecrors";
import RecommendItem from "./RecommendedItem/RecommendItem";
import { ReactComponent as NextSvg } from "../../../../assets/icons/next.svg";
import { ReactComponent as PrevSvg } from "../../../../assets/icons/prev.svg";
import {
  BooksList,
  Btn,
  BtnsWrapper,
  Section,
  Title,
} from "./RecommendedList.styled";

const RecommendList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = useSelector(selectTotalPages);
  console.log("totalP", totalPages);
  const allBooks = useSelector(selectAllBooks);

  const dispatch = useDispatch();

  const getLimitBasedOnScreenWidth = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1280) {
      return 10;
    } else if (screenWidth >= 768) {
      return 8;
    } else {
      return 2;
    }
  };

  useEffect(() => {
    const limit = getLimitBasedOnScreenWidth();
    dispatch(getBooks({ page: currentPage, limit }));
  }, [dispatch, currentPage]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <Section>
      <Title>Recommended</Title>
      <BtnsWrapper>
        <Btn
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <PrevSvg />
        </Btn>
        <Btn
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <NextSvg />
        </Btn>
      </BtnsWrapper>
      <BooksList>
        {allBooks.map(({ _id, title, author, imageUrl }) => (
          <RecommendItem
            key={_id}
            title={title}
            author={author}
            url={imageUrl}
          />
        ))}
      </BooksList>
    </Section>
  );
};

export default RecommendList;
