import { ReactComponent as LogoSvg } from "../../../../assets/icons/logo.svg";
import { LogoContainer, LogoTxt } from "./Logo.styled";

const Logo = () => {
  return (
    <LogoContainer>
      <LogoSvg />
      <LogoTxt>read journey</LogoTxt>
    </LogoContainer>
  );
};

export default Logo;
