import MainLayout from "../layouts/MainLayout";
import Section from "../components/Section";
import P from "../components/Paragraph";
import Button from "../components/Button";
import SocialLinks from "../components/SocialLinks";

export default function Home() {
  return (
    <MainLayout noFoot id="comming-soon">
      <Section className="mt-0">
        <img className="hero-img" src="/hero-landing.svg" alt="hero" />

        <div className="body">
          <h1>We&apos;re Launcing Soon!</h1>
          <P lg>
            Feugiat eu neque bibendum tellus. Vitae at vitae, vel leo dignissim
            eget ipsum id. Dictumst diam aliquet tortor ipsum id amet semper
            faucibus leo.
          </P>

          <div className="newsletter">
            <input type="email" placeholder="Enter your email" />
            <Button primary lg noShadow>
              Subscribe
            </Button>
          </div>

          <SocialLinks />
        </div>
      </Section>
    </MainLayout>
  );
}
