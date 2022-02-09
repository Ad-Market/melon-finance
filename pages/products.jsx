import clsx from "clsx";

import MainLayout from "../layouts/MainLayout";
import Section from "../components/Section";
import P from "../components/Paragraph";
import Tabs from "../components/Tabs";
import GridContainer from "../components/GridContainer";
import Button from "../components/Button";

import isEmpty from "../utils/is-empty";

export default function Legal() {
  return (
    <MainLayout id="products">
      <Section className="lg header mt-0">
        <div className="hero">
          <div className="text">
            <h1>
              Secure and Privacy at the core, yet easy to use Crypto Service
            </h1>
            <p>
              Melon Financials provides crypto based financial service lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Nisi quam
              egestas.
            </p>
            <div className="send-link"></div>
            <p className="text-white my-3">Or download with</p>

            <div className="download-btns">
              <button className="btn">
                <img src="/download-app-store.svg" alt="app-store" />
              </button>
              <button className="btn">
                <img src="/download-play-store.svg" alt="play-store" />
              </button>
            </div>
          </div>
          <div className="img">
            {/* <img src="/products-hero-vector.svg" alt="stats" /> */}
          </div>
        </div>
        <div className="partners">
          <GridContainer>
            <div className="col">
              <img src="/partner-1.svg" alt="partner" />
            </div>
            <div className="col">
              <img src="/partner-2.svg" alt="partner" />
            </div>
            <div className="col">
              <img src="/partner-3.svg" alt="partner" />
            </div>
            <div className="col">
              <img src="/partner-4.svg" alt="partner" />
            </div>
            <div className="col">
              <img src="/partner-5.svg" alt="partner" />
            </div>
          </GridContainer>
        </div>
      </Section>
      <Section>
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
              vector: "/product-1.svg",
              category: "personal",
              title: "Pay Friends with Crypto",
              desc: "No complicated hash code, just simple names",
              listItems: [
                "User are registered with phone number and their nickname",
                "You can choose if you would like to be found with phone number or name",
                "Easy to use yet top tier privacy - we give your data back to you to decide what works f",
                "Lorem ipsum dolor sit amet, consectetur.",
              ],
            },
            {
              vector: "/product-2.svg",
              category: "personal",
              title: "Transaction Custody (Payment)",
              desc: "Pay only when it’s confirmed, melon finance provide solution to support private transaction, just attach a note describe the transaction detail and confirm the payment only if the agreement is fullfilled",
            },
            {
              vector: "/product-3.svg",
              category: "personal",
              title: "Swap Private Digital Assets",
              desc: "Swap asset with us safe guarding your transction. Ever wanted to swap asset privately but don’t have someone to support the transaction? we got you covered, with our innovative solution, you can easily create you",
            },
            {
              category: "business",
              title: "Highly Fexible Crypto Experience",
              desc: "Plug in our user experience anywhwere you can imagine, marketplace, metaverse, real world, you name it.",
            },
            {
              category: "business",
              title: "Collect Payment with Ease",
              desc: "Charge a crypto wallet or account once or periodically",
            },
            {
              category: "business",
              title: "Highly Effective Data Analytics",
              desc: "Intergrated platfrom provide key insight about your transction and matrix to enpower your bussiness decision.",
            },
          ].map((el, idx) => {
            const { vector, title, desc, listItems } = el;

            return (
              <div className="product" key={"product" + idx}>
                <GridContainer>
                  <div className="col-7">
                    <img
                      className={clsx("product-img", { placeholder: vector })}
                      src={vector || "/product-placeholder.svg"}
                      alt="product"
                    />
                  </div>
                  <div className="col-5 d-flex align-items-center">
                    <div className="product-text">
                      <h3 className="mb-2">{title}</h3>
                      <p>{desc}</p>
                      {!isEmpty(listItems) && (
                        <ul>
                          {listItems.map((el, idx) => {
                            return (
                              <li key={"list-item" + idx}>
                                <img src="/list-style-1.svg" alt="list-style" />{" "}
                                {el}
                              </li>
                            );
                          })}
                        </ul>
                      )}
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
