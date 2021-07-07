import MarketingLayout from "layouts/MarketingLayout";

import { Container, Jumbotron } from "react-bootstrap";

function Home() {
  return (
    <MarketingLayout>
      <Container className="mt-5">
        <Jumbotron className="bg-light p-5">
          <h1>Landing Pages for Founders, Creators and Developers!</h1>
        </Jumbotron>
      </Container>
    </MarketingLayout>
  );
}
export default Home;
