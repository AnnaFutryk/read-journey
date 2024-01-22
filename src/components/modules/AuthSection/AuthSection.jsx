import Logo from "../../common/Loader/Logo/Logo.jsx";
import AuthUserForm from "./AuthForm/AuthForm.jsx";
import iPhoneDeskS from "../../../assets/images/iPhone-15-Black-desk.1x.png";
import iPhoneDeskL from "../../../assets/images/iPhone-15-Black-desk.2x.png";
import iPhoneMobS from "../../../assets/images/iPhone-15-Black-mob.1x.png";
import iPhoneMobL from "../../../assets/images/iPhone-15-Black-mob.2x.png";
import {
  ImageBlock,
  Section,
  Span,
  Title,
  TxtBlock,
} from "./AuthSection.styled.js";

const AuthSection = () => {
  return (
    <Section>
      <TxtBlock>
        <Logo />
        <Title>
          Expand your mind, reading <Span>a book</Span>
        </Title>
        <AuthUserForm />
      </TxtBlock>
      <ImageBlock>
        <picture>
          <source
            media="(min-width:1280px)"
            srcSet={`${iPhoneDeskS} 1x, ${iPhoneDeskL} 2x`}
          />
          <source
            media="(max-width:767px)"
            srcSet={`${iPhoneMobS} 1x, ${iPhoneMobL} 2x`}
          />
          <img src={iPhoneDeskS} alt="iPhone 15" />
        </picture>
      </ImageBlock>
    </Section>
  );
};

export default AuthSection;
