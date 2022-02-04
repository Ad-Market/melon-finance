import MainLayout from "../layouts/MainLayout";
import Section from "../components/Section";
import P from "../components/Paragraph";
import Button from "../components/Button";

export default function Home() {
  return (
    <MainLayout id="comming-soon">
      <Section>
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

          <div className="social">
            <h5>Follow Us:</h5>

            <div className="links mt-4">
              <a href="#">
                <img
                  className="hovered"
                  src="/social-instagram-hovered.svg"
                  alt="instagram"
                />
                <img src="/social-instagram.svg" alt="instagram" />
              </a>
              <a href="#">
                <img
                  className="hovered"
                  src="/social-facebook-hovered.svg"
                  alt="facebook"
                />
                <img src="/social-facebook.svg" alt="facebook" />
              </a>
              <a href="#">
                <img
                  className="hovered"
                  src="/social-twitter-hovered.svg"
                  alt="twitter"
                />
                <img src="/social-twitter.svg" alt="twitter" />
              </a>
              <a href="#">
                <img
                  className="hovered"
                  src="/social-tiktok-hovered.svg"
                  alt="tiktok"
                />
                <img src="/social-tiktok.svg" alt="tiktok" />
              </a>
            </div>
          </div>
        </div>
      </Section>
    </MainLayout>
  );
}
