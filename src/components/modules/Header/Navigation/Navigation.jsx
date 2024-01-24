import { Link, Nav } from "./Navigation.styled";

const Navigation = () => {
  return (
    <Nav>
      <Link to="/recommended">Home</Link>
      <Link to="/library">My library</Link>
    </Nav>
  );
};

export default Navigation;
