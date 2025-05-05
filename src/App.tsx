import { Layout, Section } from "@components";
import { Footer, Header, Navigation, Posts, SubscribeForm } from "@sections";
import mainBg from "./assets/images/main.png";
import footerBg from "./assets/images/footer.png";

export const App = () => {
  return (
    <Layout>
      <Section backgroundImage={mainBg}>
        <Header />
      </Section>
      <Section>
        <Navigation />
      </Section>
      <Section background="rgb(247, 247, 247)">
        <Posts />
      </Section>
      <Section backgroundImage={footerBg}>
        <SubscribeForm />
        <Section background="rgba(35, 47, 56, 0.6)">
          <Footer />
        </Section>
      </Section>
    </Layout>
  );
};
