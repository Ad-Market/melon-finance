import MainLayout from "../layouts/MainLayout";
import Section from "../components/Section";
import P from "../components/Paragraph";
import Tabs from "../components/Tabs";
import Accordion from "../components/Accordion";
import AccordionItemSection from "../components/AccordionItemSection";

export default function Legal() {
  return (
    <MainLayout id="legal">
      <Section className="mt-0">
        <div className="head text-center">
          <h1 className="">Legal</h1>

          <Tabs
            tabGroup="legal"
            tabs={[
              {
                title: "Exchange",
                active: true,
              },
              {
                title: "Transfer",
              },
              {
                title: "API",
              },
            ]}
          />

          <P lg>
            Et quis blandit sapien ornare nisl iaculis. Pellentesque vitae ut
            nulla ac nunc nulla. Urna vehicula risus consectetur sem diam. Id
            volutpat proin odio luctus at volutpat elementum. Enim sagittis
            amet, sed pretium at nulla justo, velit ultricies. Nulla eget dui,
            gravida neque orci, vitae tortor. Elit id elit eu etiam amet, sit.
            Id maecenas in duis egestas rutrum mauris, risus maecenas hendrerit.
          </P>
        </div>

        <div className="main">
          <div className="item active">
            <div className="item-head">
              <h5></h5>
            </div>
          </div>

          <Accordion defaultActive title="User Agreement">
            <div className="updated">Last updated: January 14, 2022</div>

            <AccordionItemSection title="Welcome to Melon Financials!">
              <p>
                Blandit donec ipsum aliquam cursus placerat. Dictum aliquet
                donec dictumst et, velit placerat. Consectetur adipiscing sed
                enim dignissim arcu et nascetur. Velit adipiscing nulla nisl
                neque semper aliquam nam parturient. Imperdiet elementum ac ac
                malesuada. <br />
                Amet, consectetur tempor mattis consequat, gravida nunc. Ut
                vestibulum sit felis, vestibulum enim odio feugiat eleifend.
                Faucibus molestie mauris, eget lobortis. Vivamus congue
                facilisis quis sed egestas aliquet. Commodo ut auctor molestie
                non sed vitae amet nisi. Nulla blandit urna nunc commodo nulla
                facilisis lacus.
              </p>
            </AccordionItemSection>

            <AccordionItemSection title="Using our services">
              <p>
                Blandit donec ipsum aliquam cursus placerat. Dictum aliquet
                donec dictumst et, velit placerat. Consectetur adipiscing sed
                enim dignissim arcu et nascetur. Velit adipiscing nulla nisl
                neque semper aliquam nam parturient. Imperdiet elementum ac ac
                malesuada. <br />
                Amet, consectetur tempor mattis consequat, gravida nunc. Ut
                vestibulum sit felis, vestibulum enim odio feugiat eleifend.
                Faucibus molestie mauris, eget lobortis. Vivamus congue
                facilisis quis sed egestas aliquet. Commodo ut auctor molestie
                non sed vitae amet nisi. Nulla blandit urna nunc commodo nulla
                facilisis lacus.
              </p>
            </AccordionItemSection>

            <AccordionItemSection title="Applicable Laws and Regulations">
              <p>
                Blandit donec ipsum aliquam cursus placerat. Dictum aliquet
                donec dictumst et, velit placerat. Consectetur adipiscing sed
                enim dignissim arcu et nascetur. Velit adipiscing nulla nisl
                neque semper aliquam nam parturient.
              </p>
              <ul>
                <li>
                  Money Service Business (“MSB”) regulations under the Financial
                  Crimes Enforcement Network (“FinCEN”);
                </li>
                <li>State money transmission laws;</li>
                <li>
                  Laws, regulations, and rules of relevant tax authorities;
                </li>
                <li>
                  Applicable regulations and guidance set forth by FinCEN;
                </li>
                <li>The Bank Secrecy Act of 1970 (“BSA”);</li>
                <li>The USA PATRIOT Act of 2001 (“Patriot Act”);</li>
              </ul>
              <p>
                Ut vestibulum sit felis, vestibulum enim odio feugiat eleifend.
                Faucibus molestie mauris, eget lobortis. Vivamus congue
                facilisis quis sed egestas aliquet. Commodo ut auctor molestie
                non sed vitae amet nisi. Nulla blandit urna nunc commodo nulla
                facilisis lacus.
              </p>
            </AccordionItemSection>

            <AccordionItemSection title="Digital Assets">
              <p>Lorem ipsum dolor sit amet.</p>
            </AccordionItemSection>

            <AccordionItemSection title="Your Gemini Account">
              <p>Lorem ipsum dolor sit amet.</p>
            </AccordionItemSection>

            <AccordionItemSection title="Your Gemini Account">
              <p>Lorem ipsum dolor sit amet.</p>
            </AccordionItemSection>

            <AccordionItemSection title="Your Gemini Account">
              <p>Lorem ipsum dolor sit amet.</p>
            </AccordionItemSection>

            <AccordionItemSection title="Your Gemini Account">
              <p>Lorem ipsum dolor sit amet.</p>
            </AccordionItemSection>

            <AccordionItemSection title="Your Gemini Account">
              <p>Lorem ipsum dolor sit amet.</p>
            </AccordionItemSection>

            <AccordionItemSection title="Your Gemini Account">
              <p>Lorem ipsum dolor sit amet.</p>
            </AccordionItemSection>
          </Accordion>

          <Accordion title="Privacy Policy">
            <p>Lorem ipsum dolor sit amet.</p>
          </Accordion>

          <Accordion title="Custody Agreement">
            <p>Lorem ipsum dolor sit amet.</p>
          </Accordion>

          <Accordion title="Privacy Policy">
            <p>Lorem ipsum dolor sit amet.</p>
          </Accordion>

          <Accordion title="Market Data Agreement">
            <p>Lorem ipsum dolor sit amet.</p>
          </Accordion>

          <Accordion title="API Agreement">
            <p>Lorem ipsum dolor sit amet.</p>
          </Accordion>

          <Accordion title="BSA/AML Program">
            <p>Lorem ipsum dolor sit amet.</p>
          </Accordion>

          <Accordion title="Cryptopedia Site Policy">
            <p>Lorem ipsum dolor sit amet.</p>
          </Accordion>

          <Accordion title="Legal Notice">
            <p>Lorem ipsum dolor sit amet.</p>
          </Accordion>

          <Accordion title="Consumer Privacy Notice">
            <p>Lorem ipsum dolor sit amet.</p>
          </Accordion>
        </div>
      </Section>
    </MainLayout>
  );
}

// const ItemSection = ({title,body }) => {
//   return (
//     <div className="item-section">
//       <h6 className="item-section-title"></h6>
//       <div className="item-section-body">
//         <p>
//           Blandit donec ipsum aliquam cursus placerat. Dictum aliquet donec
//           dictumst et, velit placerat. Consectetur adipiscing sed enim dignissim
//           arcu et nascetur. Velit adipiscing nulla nisl neque semper aliquam nam
//           parturient. Imperdiet elementum ac ac malesuada. <br />
//           Amet, consectetur tempor mattis consequat, gravida nunc. Ut vestibulum
//           sit felis, vestibulum enim odio feugiat eleifend. Faucibus molestie
//           mauris, eget lobortis. Vivamus congue facilisis quis sed egestas
//           aliquet. Commodo ut auctor molestie non sed vitae amet nisi. Nulla
//           blandit urna nunc commodo nulla facilisis lacus.
//         </p>
//       </div>
//     </div>
//   );
// }
