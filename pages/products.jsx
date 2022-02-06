import MainLayout from "../layouts/MainLayout";
import Section from "../components/Section";
import P from "../components/Paragraph";
import Tabs from "../components/Tabs";
import GridContainer from "../components/GridContainer";
import Button from "../components/Button";

export default function Legal() {
  return (
    <MainLayout noNav noFoot id="products">
      <Section className="mt-0">
        <div className="head text-center">
          <h1 className="">Our Products</h1>

          <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur
            venenatis dapibus quam id. Urna sit.
          </P>

          <Tabs
            tabs={[
              {
                title: "Personal",
              },
              {
                title: "Business",
                active: true,
              },
            ]}
          />
        </div>

        <div className="main">
          {[
            {
              title: "Highly Fexible Crypto Experience",
              desc: "Plug in our user experience anywhwere you can imagine, marketplace, metaverse, real world, you name it.",
            },
            {
              title: "Collect Payment with Ease",
              desc: "Charge a crypto wallet or account once or periodically",
            },
            {
              title: "Highly Effective Data Analytics",
              desc: "Intergrated platfrom provide key insight about your transction and matrix to enpower your bussiness decision.",
            },
          ].map((el, idx) => {
            const { title, desc } = el;

            return (
              <div className="product" key={"product" + idx}>
                <GridContainer>
                  <div className="col-7">
                    <img src="/product-placeholder.svg" alt="product" />
                  </div>
                  <div className="col-5 d-flex align-items-center">
                    <div className="text">
                      <h3 className="mb-2">{title}</h3>
                      <p>{desc}</p>
                      <Button transparent>
                        Find Out More
                        <div className="arrow-container ms-3">
                          <img
                            src="/product-more-right.svg"
                            alt="right-arrow"
                          />
                          <img
                            className="hovered"
                            src="/product-more-right-dark.svg"
                            alt="right-arrow"
                          />
                        </div>
                      </Button>
                    </div>
                  </div>
                </GridContainer>
              </div>
            );
          })}
        </div>
      </Section>
    </MainLayout>
  );
}
