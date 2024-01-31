import { formatTitle } from "../../../helpers/formatTitle";
import { Author, BookImg, BooksTitle, Item } from "./RecommendedItem.styled";

const RecommendItem = ({ url, title, author }) => {
  const formattedTitle = formatTitle(title);
  return (
    <Item>
      <BookImg src={url} alt={title} width={200} />
      <BooksTitle>{formattedTitle}</BooksTitle>
      <Author>{author}</Author>
    </Item>
  );
};

export default RecommendItem;
