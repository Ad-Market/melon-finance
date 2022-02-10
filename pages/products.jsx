import { useRef } from "react";
import clsx from "clsx";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import MainLayout from "../layouts/MainLayout";
import Section from "../components/Section";
import P from "../components/Paragraph";
import Tabs from "../components/Tabs";
import GridContainer from "../components/GridContainer";
import Button from "../components/Button";
import DownloadBtns from "../components/DownloadBtns";
import { Select, Option } from "../components/select";

import isEmpty from "../utils/is-empty";
import Accordion from "../components/Accordion";

SwiperCore.use([Navigation, Pagination]);

export default function Legal() {
  const testimonialsPrevRef = useRef(null);
  const testimonialsNextRef = useRef(null);

  const newsPaginationRef = useRef(null);

  const testimonialsSmPrevRef = useRef(null);
  const testimonialsSmNextRef = useRef(null);

  const newsPrevRef = useRef(null);
  const newsNextRef = useRef(null);

  return (
    <MainLayout id="products" noBottomSections buttonTitle="Launch App">
      <Section className="lg header mt-0">
        <div className="hero">
          <div className="text text-md-start text-center">
            <h1>
              Secure and Privacy at the core, yet easy to use Crypto Service
            </h1>
            <p>
              Melon Financials provides crypto based financial service lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Nisi quam
              egestas.
            </p>
            <div className="send-link">
              <div className="inputs-container">
                {/* <select name="" id="">
                  <option value="email">
                    <img src="/email.svg" alt="email" /> Email
                  </option>
                </select> */}
                <img className="icon" src="/email.svg" alt="email" />
                <Select placeholder="Email">
                  <Option value="Email">Email</Option>
                </Select>
                <input type="email" placeholder="Enter your email" />
              </div>
              <Button primary>Send Now</Button>
            </div>
            <p className="text-white my-3">Or download with</p>

            <DownloadBtns className="justify-content-center justify-content-md-start" />
          </div>
          <div className="img">
            {/* <img src="/products-hero-vector.svg" alt="stats" /> */}
          </div>
        </div>
        <div className="partners">
          <GridContainer className="gy-4">
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
      <Section className="head-container">
        <div className="head text-center">
          <h1 className="">Our Products</h1>

          <P>
            We provide seamless transction experience to enpower you to
            experience blockchain, metaverse and beyond
          </P>

          <Tabs
            tabGroup="products"
            tabs={[
              {
                title: "Personal",
                target: "personal",
                active: true,
              },
              {
                title: "Business",
                target: "business",
              },
            ]}
          />
        </div>

        <div className="main">
          {[
            {
              vector: "/product-1.svg",
              vectorStyle: { maxWidth: "632px" },
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
              vectorStyle: { maxWidth: "462px" },
              category: "personal",
              title: "Transaction Custody (Payment)",
              desc: "Pay only when it’s confirmed, melon finance provide solution to support private transaction, just attach a note describe the transaction detail and confirm the payment only if the agreement is fullfilled",
            },
            {
              vector: "/product-3.svg",
              vectorStyle: { maxWidth: "543px" },
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
            const { category, vector, vectorStyle, title, desc, listItems } =
              el;

            const odd = idx % 2 === 0;

            return (
              <div
                data-tab-target={category}
                data-tab-group={"products"}
                className={clsx("product tab-content")}
                style={
                  category === "business" ? { display: "none" } : undefined
                }
                key={"product" + idx}
              >
                <GridContainer>
                  <div className={clsx("col-lg-7 col-md-6")}>
                    <img
                      className={clsx("product-img mb-5 mb-md-0", {
                        placeholder: !vector,
                      })}
                      src={vector || "/product-placeholder.svg"}
                      style={vectorStyle}
                      alt="product"
                    />
                  </div>
                  <div className="col-lg-5 col-md-6 d-flex align-items-center">
                    <div className="product-text">
                      <h3 className="mb-2">{title}</h3>
                      <p>{desc}</p>
                      {!isEmpty(listItems) && (
                        <ul>
                          {listItems.map((el, idx) => {
                            return (
                              <li key={"list-item" + idx}>
                                <img src="/list-style-1.svg" alt="list-style" />
                                <div className="text">{el}</div>
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

      <Section className="testimonials">
        <div className="testimonials-head d-flex align-items-center justify-content-between">
          <div className="text">
            <h2 className="mb-2">Who use Melon Financials?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Consectetur venenatis dapibus quam id. Urna sit.
            </p>
          </div>
          <div className="slider-btns d-none d-md-flex">
            <div ref={testimonialsPrevRef} className="btn">
              <img className="left" src="/slider-arrow.svg" alt="arrow-left" />
            </div>
            <div ref={testimonialsNextRef} className="btn">
              <img className="right" src="/slider-arrow.svg" alt="arrow-left" />
            </div>
          </div>
        </div>

        <div className="testimonials-body">
          <GridContainer>
            <div className="col-md-6">
              <Swiper
                onInit={(swiper) => {
                  function update() {
                    swiper.params.navigation.prevEl =
                      testimonialsPrevRef.current;
                    swiper.params.navigation.nextEl =
                      testimonialsNextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                  }

                  update();

                  setTimeout(update, 1000);
                }}
                navigation={{}}
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                  768: {
                    navigation: {
                      prevEl: testimonialsPrevRef.current,
                      nextEl: testimonialsNextRef.current,
                    },
                  },
                  0: {
                    onInit: (swiper) => {
                      swiper.params.navigation.prevEl =
                        testimonialsSmPrevRef.current;
                      swiper.params.navigation.nextEl =
                        testimonialsSmNextRef.current;
                      swiper.navigation.init();
                      swiper.navigation.update();
                    },
                    navigation: {
                      prevEl: testimonialsSmPrevRef.current,
                      nextEl: testimonialsSmNextRef.current,
                    },
                  },
                }}
              >
                {[
                  {
                    commentText:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purusgravida vitae, nibh vitae. Morbi laoreet cras in varius. Nunc ornare lobortis nulla magna quis facilisi.",
                    name: "Danial Schulman",
                    designation: "CEO - PayPal",
                  },
                  {
                    commentText:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purusgravida vitae, nibh vitae. Morbi laoreet cras in varius. Nunc ornare lobortis nulla magna quis facilisi.",
                    name: "Danial Schulman",
                    designation: "CEO - PayPal",
                  },
                  {
                    commentText:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purusgravida vitae, nibh vitae. Morbi laoreet cras in varius. Nunc ornare lobortis nulla magna quis facilisi.",
                    name: "Danial Schulman",
                    designation: "CEO - PayPal",
                  },
                ].map((el, idx) => {
                  const { commentText, name, designation } = el;

                  return (
                    <SwiperSlide key={"comment-item" + idx}>
                      <div className="comment">
                        <img src="/quotes.svg" alt="quotes" />
                        <div className="comment-main">{commentText}</div>
                        <div className="info">
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="user">
                              <h5 className="name text-white">{name}</h5>
                              <h5 className="designation fw-400">
                                {designation}
                              </h5>
                            </div>
                            <div className="ratings">
                              <img
                                src="/rating-star-fill.svg"
                                alt="star-fill"
                              />
                              <img
                                src="/rating-star-fill.svg"
                                alt="star-fill"
                              />
                              <img
                                src="/rating-star-fill.svg"
                                alt="star-fill"
                              />
                              <img
                                src="/rating-star-fill.svg"
                                alt="star-fill"
                              />
                              <img
                                src="/rating-star-nofill.svg"
                                alt="star-nofill"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <div className="img">
                <img
                  className="d-none d-md-block w-100"
                  src="/testimonial-placeholder.svg"
                  alt="img"
                  style={{ maxWidth: "594px" }}
                />
                <img
                  className="d-block d-md-none mt-4"
                  src="/testimonial-placeholder-2.svg"
                  alt="img"
                />
              </div>
            </div>
          </GridContainer>
        </div>
      </Section>

      <Section className="mt-80 investors">
        <GridContainer className="gx-sm-0 gy-4 ">
          <div className="col">
            <img src="/investor-1.svg" alt="investor" />
          </div>
          <div className="col">
            <img src="/investor-2.svg" alt="investor" />
          </div>
          <div className="col">
            <img src="/investor-3.svg" alt="investor" />
          </div>
          <div className="col">
            <img src="/investor-4.svg" alt="investor" />
          </div>
          <div className="col">
            <img src="/investor-5.svg" alt="investor" />
          </div>
        </GridContainer>
      </Section>

      <Section>
        <div className="slider-btns d-flex justify-content-center d-md-none">
          <div ref={testimonialsPrevRef} className="btn">
            <img className="left" src="/slider-arrow.svg" alt="arrow-left" />
          </div>
          <div ref={testimonialsNextRef} className="btn">
            <img className="right" src="/slider-arrow.svg" alt="arrow-left" />
          </div>
        </div>
      </Section>

      <Section className="faq">
        <div className="faq-head mx-auto">
          <h2 className="mb-3 text-center">Frequently Asked Questions</h2>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur
            venenatis dapibus quam id. Urna sit.
          </p>
        </div>

        <div className="faq-main">
          <GridContainer>
            <div className="col-md-6">
              <Accordion defaultChecked title="Lorem Ipsum Dolor Sit Amet">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Consectetur venenatis dapibus quam id. Urna sit.
                </p>
              </Accordion>
            </div>
            <div className="col-md-6">
              <Accordion title="Lorem Ipsum Dolor Sit Amet">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Consectetur venenatis dapibus quam id. Urna sit.
                </p>
              </Accordion>
            </div>
            <div className="col-md-6">
              <Accordion title="Lorem Ipsum Dolor Sit Amet">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Consectetur venenatis dapibus quam id. Urna sit.
                </p>
              </Accordion>
            </div>
            <div className="col-md-6">
              <Accordion title="Lorem Ipsum Dolor Sit Amet">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Consectetur venenatis dapibus quam id. Urna sit.
                </p>
              </Accordion>
            </div>
            <div className="col-md-6">
              <Accordion title="Lorem Ipsum Dolor Sit Amet">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Consectetur venenatis dapibus quam id. Urna sit.
                </p>
              </Accordion>
            </div>
            <div className="col-md-6">
              <Accordion title="Lorem Ipsum Dolor Sit Amet">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Consectetur venenatis dapibus quam id. Urna sit.
                </p>
              </Accordion>
            </div>
          </GridContainer>
        </div>
      </Section>

      <Section className="news">
        <div className="news-head d-flex align-items-center justify-content-between">
          <div className="text">
            <h2 className="mb-2">News and Updates</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Consectetur venenatis dapibus quam id. Urna sit.
            </p>
          </div>
          <div className="d-none d-md-block">
            <Button primary>View All</Button>
          </div>
        </div>

        <div className="news-main">
          <Swiper
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = newsPrevRef.current;
              swiper.params.navigation.nextEl = newsNextRef.current;
              swiper.params.pagination.el = newsPaginationRef.current;
              swiper.navigation.init();
              swiper.navigation.update();

              function update() {
                swiper.params.navigation.prevEl = newsPrevRef.current;
                swiper.params.navigation.nextEl = newsNextRef.current;
                swiper.params.pagination.el = newsPaginationRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
                console.log(newsPaginationRef.current);
              }

              update();

              setTimeout(update, 1000);
            }}
            navigation={{
              prevEl: newsPrevRef.current,
              nextEl: newsNextRef.current,
            }}
            pagination={{
              el: newsPaginationRef.current,
              clickable: true,
              renderBullet: function (index, className) {
                return `<span class="dot swiper-pagination-bullet">&nbsp;</span>`;
              },
            }}
            spaceBetween={30}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
              576: {
                slidesPerView: 2,
              },
              0: {
                slidesPerView: 1,
              },
            }}
          >
            {[
              {
                img: "/news-1.svg",
                title: "Lorem Ipsum Dolor Sit Amet",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur venenatis.",
                views: 200,
              },
              {
                img: "/news-2.svg",
                title: "Lorem Ipsum Dolor Sit Amet",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur venenatis.",
                views: 228,
              },
              {
                img: "/news-3.svg",
                title: "Lorem Ipsum Dolor Sit Amet",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur venenatis.",
                views: 188,
              },
              {
                img: "/news-1.svg",
                title: "Lorem Ipsum Dolor Sit Amet",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur venenatis.",
                views: 200,
              },
              {
                img: "/news-2.svg",
                title: "Lorem Ipsum Dolor Sit Amet",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur venenatis.",
                views: 228,
              },
              {
                img: "/news-3.svg",
                title: "Lorem Ipsum Dolor Sit Amet",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur venenatis.",
                views: 188,
              },
            ].map((el, idx) => {
              const { img, title, body, views } = el;

              return (
                <SwiperSlide key={"card-slide-" + idx}>
                  <div className="news-card">
                    <img className="news-img" src={img} alt="news-1" />
                    <h5 className="news-title">{title}</h5>
                    <p className="news-body">{body}</p>
                    <div className="d-flex align-items-center justify-content-between">
                      <div>{views} Views</div>
                      <div className="btn d-flex align-items-center text-yellow">
                        Read More
                        <img
                          className="ms-4"
                          src="/product-more-right.svg"
                          alt="arrow"
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div className="slider-btns justify-content-center mt-5">
            <div ref={newsPrevRef} className="btn">
              <img className="left" src="/slider-arrow.svg" alt="arrow-left" />
            </div>
            <div ref={newsPaginationRef} className="pagination"></div>
            <div ref={newsNextRef} className="btn">
              <img className="right" src="/slider-arrow.svg" alt="arrow-left" />
            </div>
          </div>

          <Button
            style={{ maxWidth: "312px" }}
            className="mx-auto d-block w-100 mt-5 d-md-none"
            primary
          >
            View All
          </Button>
        </div>
      </Section>

      <Section className="lg text-center">
        <div className="growth">
          <h2 className="mb-2">Let's Growth Invest with Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur
            venenatis dapibus quam id. Urna sit.
          </p>

          <DownloadBtns
            className="justify-content-center mt-3 pt-3"
            withRatings
          />
        </div>
      </Section>
    </MainLayout>
  );
}
