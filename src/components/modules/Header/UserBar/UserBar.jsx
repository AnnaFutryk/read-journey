import { useSelector } from "react-redux";
import authSelectors from "../../../../redux/auth/authSelectors";
import { AvaWrapp, Name, Wrapper } from "./UserBar.styled";

const UserBar = () => {
  const userName = useSelector(authSelectors.selectUserName);

  const letterForAvatar = userName.slice(0, 1);

  console.log(letterForAvatar);

  return (
    <Wrapper>
      <AvaWrapp>{letterForAvatar}</AvaWrapp>
      <Name>{userName}</Name>
    </Wrapper>
  );
};

export default UserBar;
