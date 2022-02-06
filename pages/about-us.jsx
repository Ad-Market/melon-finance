import Link from "next/link";

import MainLayout from "../layouts/MainLayout";
import Section from "../components/Section";
import P from "../components/Paragraph";
import Button from "../components/Button";
import GridContainer from "../components/GridContainer";
import SocialLinks from "../components/SocialLinks";

export default function AboutUs() {
  return (
    <MainLayout id="about-us">
      <Section className="mt-0">
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

      <Section>
        <div className="text-center">
          <h2 className="title mb-4">The four pillar of Melon Network</h2>
          <p>
            Nibh suspendisse tellus pulvinar massa hendrerit non congue amet.
            Lectus amet, mattis arcu vulputate sit sem nec. Quis sed tincidunt
            pulvinar vulputate. Habitant lacus, cursus pellentesque nec orci,
            netus at scelerisque. Ultricies vitae sed elementum urna dolor
            dictum amet. Tristique nisl phasellus aenean molestie.
          </p>
        </div>

        <div className="pillars-main">
          <GridContainer>
            <div className="col-6 d-flex align-items-center">
              <img src="/about-us-2.svg" alt="about-us" />
            </div>
            <div className="col-6">
              {[
                {
                  head: "Product",
                  body: "Ridiculus tellus gravida suspendisse aenean risus, auctor. Id commodo nam ornare interdum mi tortor adipiscing.",
                },
                {
                  head: "Security",
                  body: "Ridiculus tellus gravida suspendisse aenean risus, auctor. Id commodo nam ornare interdum mi tortor adipiscing.",
                },
                {
                  head: "Licensing",
                  body: "Ridiculus tellus gravida suspendisse aenean risus, auctor. Id commodo nam ornare interdum mi tortor adipiscing.",
                },
                {
                  head: "Compliance",
                  body: "Ridiculus tellus gravida suspendisse aenean risus, auctor. Id commodo nam ornare interdum mi tortor adipiscing.",
                },
              ].map((el, idx) => {
                const { head, body } = el;

                return (
                  <div className="d-flex item" key={"pillar" + idx}>
                    <div className="num text-yellow">0{idx + 1}</div>
                    <div className="main">
                      <h3>{head}</h3>
                      <p>{body}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </GridContainer>
        </div>
      </Section>

      <Section>
        <h2 className="text-center title">
          Nam nec urna vel cursus placerat laoreet
        </h2>

        <GridContainer>
          <div className="col-6 d-flex align-items-center">
            <p>
              Diam phasellus fermentum netus urna est placerat aliquet placerat.
              Est faucibus sit at nam tempus felis. Nibh diam nulla duis amet
              quis imperdiet velit. Id mauris ullamcorper orci consectetur
              ultrices cras nam. Nunc, tristique odio posuere a sed ac netus
              purus. Suscipit neque, neque, sit integer nunc vitae. Consectetur
              malesuada nibh imperdiet eu nunc ullamcorper sit. Tristique felis
              enim, enim amet lacus at aliquam tempus. Enim est tempor diam
              eleifend aliquet. Elit sapien mauris cursus eu, ornare. Purus
              posuere nisi donec sit netus at. Cras egestas egestas orci,
              ullamcorper ultricies urna. Tristique eget ut suspendisse turpis
              leo. Dolor hendrerit amet, mauris, quam etiam maecenas massa
              convallis. Vestibulum, mi est neque velit rhoncus morbi porttitor.
              Scelerisque nisi, mauris sed ultrices elit aenean augue urna
              lectus. Eget sed in diam bibendum in non nunc ullamcorper. Neque
              dignissim sed ultrices faucibus felis.
            </p>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <img src="/about-us-3.svg" alt="about-us-3" />
          </div>
        </GridContainer>
      </Section>

      <Section>
        <h2 className="text-center title">Faucibus dictum euismod in quis</h2>

        <GridContainer>
          <div className="col-6">
            <img src="/about-us-4.svg" alt="about-us-4" />
          </div>
          <div className="col-6 d-flex align-items-center">
            <p>
              Diam phasellus fermentum netus urna est placerat aliquet placerat.
              Est faucibus sit at nam tempus felis. Nibh diam nulla duis amet
              quis imperdiet velit. Id mauris ullamcorper orci consectetur
              ultrices cras nam. Nunc, tristique odio posuere a sed ac netus
              purus. Suscipit neque, neque, sit integer nunc vitae.
            </p>
          </div>
        </GridContainer>
      </Section>
    </MainLayout>
  );
}
