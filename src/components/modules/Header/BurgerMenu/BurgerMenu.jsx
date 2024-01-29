import { useDispatch } from "react-redux";
import { ReactComponent as CloseSvg } from "../../../../assets/icons/x.svg";
import { authOperations } from "../../../../redux/auth/authOperations";
import BlackBtn from "../../../common/Button/BlackBtn/BlackBtn";
import {
  CloseBtn,
  MenuContainer,
  Link,
  LogOutWrapp,
  NavContainer,
} from "./BurgerMenu.styled";

const BurgerMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(authOperations.signOut());
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <MenuContainer>
      {isMenuOpen && (
        <CloseBtn type="button" onClick={() => setIsMenuOpen(false)}>
          <CloseSvg />
        </CloseBtn>
      )}
      <NavContainer>
        <Link onClick={handleLinkClick} to="/recommended">
          Home
        </Link>
        <Link onClick={handleLinkClick} to="/library">
          My library
        </Link>
      </NavContainer>
      <LogOutWrapp>
        <BlackBtn text={"Log out"} onClick={handleLogOut} />
      </LogOutWrapp>
    </MenuContainer>
  );
};

export default BurgerMenu;
