import { Book, Section, Span, Txt } from "./QuoteSection.styled";

export const QuoteSection = () => {
  return (
    <Section>
      <Book>📚</Book>
      <Txt>
        "Books are <Span>windows</Span> to the world, and reading is a journey
        into the unknown."
      </Txt>
    </Section>
  );
};

export default QuoteSection;
