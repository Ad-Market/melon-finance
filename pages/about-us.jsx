import MainLayout from "../layouts/MainLayout";
import Section from "../components/Section";
import P from "../components/Paragraph";
import Button from "../components/Button";
import GridContainer from "../components/GridContainer";

export default function Home() {
  return (
    <MainLayout id="about-us">
      <Section>
        <GridContainer>
          <div className="col-6 d-flex align-items-center">
            <div className="text">
              <h1>Melon Network</h1>
              <P lg>
                Feugiat eu neque bibendum tellus. Vitae at vitae, vel leo
                dignissim eget ipsum id. Dictumst diam aliquet tortor ipsum id
                amet semper faucibus leo. Condimentum hendrerit tellus est
                mauris proin eleifend sapien mi. Vulputate condimentum nulla et
                nisl. Amet est, maecenas venenatis leo id diam. Eget nunc,
                maecenas mauris sit eu, tristique scelerisque semper.
              </P>
            </div>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <img src="/about-us-1.svg" alt="about-us-1" />
          </div>
        </GridContainer>
      </Section>
    </MainLayout>
  );
}
