const RecommendItem = ({ url, title, author }) => {
  return (
    <li>
      <img src={url} alt={title} width={200} />
      <h3>{title}</h3>
      <p>{author}</p>
    </li>
  );
};

export default RecommendItem;
