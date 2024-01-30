import {
  Title,
  Number,
  Section,
  Span,
  Txt,
  TxtContainer,
  Link,
  LinksWrapp,
} from "./FunctionalityDescr.styled";
import { ReactComponent as ArrowSvg } from "../../../../assets/icons/log-in.svg";

const FunctionalityDescr = () => {
  return (
    <Section>
      <Title>Start your workout</Title>
      <TxtContainer>
        <Number>1</Number>
        <Txt>
          <Span>Create a personal library: </Span>
          add the books you intend to read to it.
        </Txt>
      </TxtContainer>
      <TxtContainer>
        <Number>2</Number>
        <Txt>
          <Span>Create your first workout: </Span>
          define a goal, choose a period, start training.
        </Txt>
      </TxtContainer>
      <LinksWrapp>
        <Link to="/library">My library</Link>
        <Link to="/library">
          <ArrowSvg />
        </Link>
      </LinksWrapp>
    </Section>
  );
};

export default FunctionalityDescr;
