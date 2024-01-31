import Container from "../../components/common/Container/Container";
import Dashboard from "../../components/common/Dashboard/Dashboard";
import Filter from "./components/Filter/Filter";
import FunctionalityDescr from "./components/FunctionalityDescr/FunctionalityDescr";
import QuoteSection from "./components/QuoteSection/QuoteSection";
import RecommendList from "./components/RecommendedList/RecommendList";
import { Wrapper } from "./RecommendedPage.styled";

const RecommendedPage = () => {
  return (
    <Container>
      <Wrapper>
        <Dashboard>
          <Filter />
          <FunctionalityDescr />
          <QuoteSection />
        </Dashboard>
        <RecommendList />
      </Wrapper>
    </Container>
  );
};

export default RecommendedPage;
