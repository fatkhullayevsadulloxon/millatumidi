import { useState } from "react";
import React, { useCallback, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { Pagination } from "swiper/modules";
import Marquee from "react-fast-marquee";

import { FaCheck } from "react-icons/fa";

import Logo from "../../assets/Logo/logo.svg";
import LangIcon from "../../assets/svg/langIcon.svg";
import HeroImg from "../../assets/images/hero.webp";
import AboutOne from "../../assets/images/aboutone.webp";
import AboutTwo from "../../assets/images/abouttwo.webp";
import AboutTree from "../../assets/images/abouttree.webp";
import Grants from "../../assets/images/grants.webp";
import BtnHero from "../../assets/images/btn.webp";
import BtnHeroTwo from "../../assets/images/btnariza.webp";
import BtnBatafsil from "../../assets/images/btnbatafsil.png";

import Fakultet1 from "../../assets/images/fakultet/1.webp";
import Fakultet2 from "../../assets/images/fakultet/2.webp";
import Fakultet3 from "../../assets/images/fakultet/3.webp";
import Fakultet4 from "../../assets/images/fakultet/4.webp";

import TeacherOne from "../../assets/images/teacher/one.png";
import TeacherTwo from "../../assets/images/teacher/two.png";
import TeacherTree from "../../assets/images/teacher/three.png";
import TeacherFour from "../../assets/images/teacher/four.png";

import Menu from "../../assets/images/meni.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Home.css";

const frequentlyAskQuestions = [
  {
    title: "Millat Umidi Universitetining maqsadi qanday?",
    description:
      "Bizning maqsadimiz - millatimizning global asrini takrorlash. Va bizning vazifamiz global insonlarni yaratishdir",
  },
  {
    title: "Millat Umidi Universiteti to'liq stipendiya taklif qiladimi? ",
    description:
      "Ha, shunday. Millat Umidi Universitetida taqdim etiladigan stipendiyalarga qo'yiladigan talablar Akademik mukammallik stipendiyasi: 1.IELTS 7.0 + SAT 1200 + intervyu = 100 % Toʻliq stipendiya 2. IELTS 7.5 + suhbat = 50% stipendiya3. SAT 1300 + suhbat = 50% stipendiya 4. IELTS 8.0 + suhbat = 100% stipendiya (ELT uchun)",
  },
  {
    title:
      "Qabul qilish muddati bormi? Millat Umidi universiteti ham qishki qabulni taklif qiladimi?",
    description:
      "Qabul qilishning oxirgi muddati – 31- avgust. Millat Umidi Universiteti qishki qabulni taklif qilmaydi",
  },

  {
    title:
      "Millat Umidi universitetida o'quv yilining boshlanish va tugash sanasi nima?",
    description:
      "MU universitetida o'quv yili odatda sentyabr oyining boshida boshlanadi va may oyining oxirida tugaydi",
  },

  {
    title: "O'qishim uchun kontarktni oylik bo'lib to'lay olamanmi?",
    description:
      "Abituriyent va Millat Umidi Universiteti o‘rtasida tuzilgan shartnomaga ko‘ra, to‘lov istalgan bank yoki Click/PayMe mobil to‘lov xizmatlari orqali amalga oshirilishi mumkin. Millat Umidi Universiteti oylik to'lovlarni qabul qilmaydi.",
  },

  {
    title: "Barcha kerakli hujjatlarni topshirgandan keyin nima qilishim kerak",
    description:
      "Ariza beruvchiga elektron pochtalarini vaqti-vaqti bilan tekshirib turish tavsiya etiladi va talab qilinadigan hujjatlar yetarli bo'lgan arizachilarga shartnoma yuboriladi",
  },
];

const Home = () => {
  const sliderRef = useRef(null);
  const [activeId, setActiveId] = useState(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const togglerFunction = (index) => {
    if (activeId === index) {
      setActiveId(null);
    } else {
      setActiveId(index);
    }
  };

  const youtubeVideo = [
    {
      url: "https://www.youtube.com/embed/UtpsxyGwgKc?si=u7inM9aOUwtYbsjP",
      id: 1
    },
    {
      url: "https://www.youtube.com/embed/Sy1ANPMaDhg?si=yunCG5390XDeCi-L",
      id: 2
    },
    {
      url: "https://www.youtube.com/embed/STvsdAwNQ-4?si=nQ87JwshX9--92Wc",
      id: 3
    },
    {
      url: "https://www.youtube.com/embed/xLfhq51A5aw?si=cFe7hkwpkRIrKuYF",
      id: 4
    },
    {
      url: "https://www.youtube.com/embed/6ZvnreLgPYQ?si=fkjOp6MyYSzMxcJs",
      id: 5
    },
  ]

  return (
    <div>
      <div className="hero-bg">
        <header className="header container">
          <div className="header-left">
            <img
              src={Logo}
              alt="site-logo"
              referrerpolicy="no-referrer"
              style={{ width: "100px", height: "100px" }}
            />
          </div>

          <div className="header-middle">
            <a className="header-middle-link" href="#about">
              Biz haqimizda{" "}
            </a>
            <a className="header-middle-link" href="#programs">
              Dasturlar
            </a>
            <a className="header-middle-link" href="#comment">
              Fikrlar
            </a>
            <a className="header-middle-link" href="#grants">
              Grantlar
            </a>
            <a className="header-middle-link" href="#teachers">
              Ustozlarimiz
            </a>
          </div>

          <div className="header-right">
            <a className="header-right-number" href="tel:+998712000306">
              +998 (71) 200-03-06
            </a>

            <div className="header-right-box">
              <img
                className="header-right-icon"
                src={LangIcon}
                alt=""
                referrerpolicy="no-referrer"
              />

              <select className="header-right-sel" name="" id="">
                <option value="">UZ</option>
                <option value="">RU</option>
                <option value="">EN</option>
              </select>
            </div>
            <button
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
              className="button-hamburger"
            >
              <img src={Menu} alt="" width={36} height={36} />
            </button>

            <div
              class="offcanvas offcanvas-end"
              tabindex="-1"
              id="offcanvasRight"
              aria-labelledby="offcanvasRightLabel"
            >
              <div class="offcanvas-header">
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>

              <div class="offcanvas-body">
                <div className="header-middle1">
                  <a className="header-middle-link" href="#about">
                    Biz haqimizda{" "}
                  </a>
                  <a className="header-middle-link" href="#programs">
                    Dasturlar
                  </a>
                  <a className="header-middle-link" href="#comment">
                    Fikrlar
                  </a>
                  <a className="header-middle-link" href="#grants">
                    Grantlar
                  </a>
                  <a className="header-middle-link" href="#teachers">
                    Ustozlarimiz
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section className="hero">
          <div className="hero-wrapper container">
            <div className="hero-left">
              <h1 className="hero-left-title">
                Millat Umidi universiteti bilan xalqaro insonga aylaning
              </h1>
              <p className="hero-left-text">
                Millat Umidi Universitetida biz sizni shunchaki o'qitibgina
                qolmay, o'zingiz xohlagan ishni topishga tayyorlaymiz. Eng zo'r
                bo'lish uchun eng yaxshilardan o'rganing! O'tkazib yubormang va
                hoziroq ro’yxatdan o’ting.
              </p>

              <div className="hero-left-box">
                <a href="https://admission.millatumidi.uz/?refid=newsite" target="_blank">
                  <img className="hero-left-img" src={BtnHero} alt="" />
                </a>
                <a href="https://admission.millatumidi.uz/?refid=newsite" target="_blank">
                  <img className="hero-left-img" src={BtnHeroTwo} alt="" />
                </a>
              </div>
            </div>

            <div className="hero-right">
              <img
                className="hero-right-img"
                src={HeroImg}
                alt="hero-img"
                referrerpolicy="no-referrer"
              />
            </div>
          </div>
        </section>
      </div>

      <main>
        <section className="youtube">
          <div className="youtube-wrapper container">
            <div className="wrapper">
              <iframe
                className="youtube-video"
                src="https://www.youtube.com/embed/4c2NLApM7co?si=Qz6xrCnGP9dQCDW6"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              {/* <img className="gradient-top" src={Gradienttop}/> */}
            </div>
          </div>
        </section>

        <section className="faculties" id="programs">
          <div>
            <div>
              <h3 className="faculties-title">Bizning fakultetlarimiz</h3>
            </div>

            <Marquee pauseOnHover style={{ height: "650px" }}>
              <div className="faculties-wrapper">
                <div className="faculties-item">
                  <img
                    className="faculties-img"
                    src={Fakultet1}
                    alt="Faculties-img"
                    referrerpolicy="no-referrer"
                  />
                  <div className="faculties-box">
                    <h3 className="faculties-text">
                      Axborot texnologiyalari (Dasturiy ta’minot)
                    </h3>
                    <p className="faculties-desc">
                      Dasturiy ta'minot muhandislari keng ko'lamli, murakkab
                      dasturiy ta'minot infratuzilmalarini ishlab chiqadilar ...
                    </p>
                    <a href="https://admission.millatumidi.uz/?refid=newsite" target="_blank">
                      <img className="faculties-btn" src={BtnBatafsil} alt="" />
                    </a>
                  </div>
                </div>

                <div className="faculties-item">
                  <img
                    className="faculties-img"
                    src={Fakultet2}
                    alt="Faculties-img"
                    referrerpolicy="no-referrer"
                  />
                  <div className="faculties-box">
                    <h3 className="faculties-text">
                      Biznes menejment (Pearson BTEC)
                    </h3>
                    <p className="faculties-desc">
                      40 yildan ortiq muvaffaqiyatli o'qitish tajribasiga ega
                      bo'lgan bizning BTEC International Business Level 3 ...
                    </p>
                    <a href="https://admission.millatumidi.uz/?refid=newsite" target="_blank">
                      <img className="faculties-btn" src={BtnBatafsil} alt="" />
                    </a>
                  </div>
                </div>

                <div className="faculties-item">
                  <img
                    className="faculties-img"
                    src={Fakultet3}
                    alt="Faculties-img"
                    referrerpolicy="no-referrer"
                  />
                  <div className="faculties-box">
                    <h3 className="faculties-text">Ingliz tilini o’qitish</h3>
                    <p className="faculties-desc">
                      2023-yilda talabalarga tillar va turdosh fanlarni
                      o‘rgatish sohasida zarur ko‘nikma va bilimlarni ...
                    </p>
                    <a href="https://admission.millatumidi.uz/?refid=newsite" target="_blank">
                      <img className="faculties-btn" src={BtnBatafsil} alt="" />
                    </a>
                  </div>
                </div>

                <div className="faculties-item">
                  <img
                    className="faculties-img"
                    src={Fakultet4}
                    alt="Faculties-img"
                    referrerpolicy="no-referrer"
                  />
                  <div className="faculties-box">
                    <h3 className="faculties-text">
                      Buxgalteriya hisobi va moliya
                    </h3>
                    <p className="faculties-desc">
                      Fakultetimiz talabalarga ACCA imtihonlarini topshirish va
                      to‘qqizta asosiy sertifikat olish imkonini beruvchi
                    </p>
                    <a href="https://admission.millatumidi.uz/?refid=newsite" target="_blank">
                      <img className="faculties-btn" src={BtnBatafsil} alt="" />
                    </a>
                  </div>
                </div>

                <div className="faculties-item">
                  <img
                    className="faculties-img"
                    src={Fakultet4}
                    alt="Faculties-img"
                    referrerpolicy="no-referrer"
                  />
                  <div className="faculties-box">
                    <h3 className="faculties-text">
                      Biznes boshqaruvi (Milliy)
                    </h3>
                    <p className="faculties-desc">
                      “Xalqaro biznes” fakulteti negizida faoliyat yurituvchi
                      “Biznes menejmenti” kursi talabalarga mulk...{" "}
                    </p>
                    <a href="https://admission.millatumidi.uz/?refid=newsite" target="_blank">
                      <img className="faculties-btn" src={BtnBatafsil} alt="" />
                    </a>
                  </div>
                </div>
                <div className="faculties-item">
                  <img
                    className="faculties-img"
                    src={Fakultet1}
                    alt="Faculties-img"
                    referrerpolicy="no-referrer"
                  />
                  <div className="faculties-box">
                    <h3 className="faculties-text">
                      Axborot texnologiyalari (Dasturiy ta’minot)
                    </h3>
                    <p className="faculties-desc">
                      Dasturiy ta'minot muhandislari keng ko'lamli, murakkab
                      dasturiy ta'minot infratuzilmalarini ishlab chiqadilar ...
                    </p>
                    <a href="https://admission.millatumidi.uz/?refid=newsite" target="_blank">
                      <img className="faculties-btn" src={BtnBatafsil} alt="" />
                    </a>
                  </div>
                </div>

                <div className="faculties-item">
                  <img
                    className="faculties-img"
                    src={Fakultet2}
                    alt="Faculties-img"
                    referrerpolicy="no-referrer"
                  />
                  <div className="faculties-box">
                    <h3 className="faculties-text">
                      Biznes menejment (Pearson BTEC)
                    </h3>
                    <p className="faculties-desc">
                      40 yildan ortiq muvaffaqiyatli o'qitish tajribasiga ega
                      bo'lgan bizning BTEC International Business Level 3 ...
                    </p>
                    <a href="https://admission.millatumidi.uz/?refid=newsite" target="_blank">
                      <img className="faculties-btn" src={BtnBatafsil} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </Marquee>
            <div className="faculties-student-box">
              <a href="https://admission.millatumidi.uz/?refid=newsite">
                <img className="faculties-student-btn" src={BtnHero} alt="" />
              </a>
            </div>
          </div>
        </section>

        <section className="about" id="about">
          <div className="about-wrapper container">
            <div className="about-left">
              <img
                className="about-img-one"
                src={AboutOne}
                alt="about-img"
                referrerpolicy="no-referrer"
              />
              <img
                className="about-img-two"
                src={AboutTwo}
                alt="about-img"
                referrerpolicy="no-referrer"
              />
              <img
                className="about-img-tree"
                src={AboutTree}
                alt="about-img"
                referrerpolicy="no-referrer"
              />
            </div>

            <div className="about-right">
              <h3 className="about-title">Biz Haqimizda!</h3>
              <p className="about-text">
                MU universiteti 2021-yilda ochilgan va jahondagi sifatli ta’lim
                standartlariga javob beradigan zamonaviy ta’lim muassasasi
                hisoblanadi. Millat Umidi universiteti o‘z talabalariga
                ixtisoslashtirilgan bilim olish va keyingi ta’lim olish va
                hayotda o‘z yo‘lini tanlash uchun keng imkoniyatlarni taqdim
                etadi.
              </p>
              <a href="https://admission.millatumidi.uz/?refid=newsite" target="_blank">
                <img className="about-btn" src={BtnHero} alt="" />
              </a>
            </div>
          </div>
        </section>

        <section style={{ paddingTop: "20px" }} id="comment">
          <h3 className="faculties-title-2">O’quvchilarimizdan fikrlar</h3>
          <div className="custom-swipper">
            <Swiper
              ref={sliderRef}
              initialSlide={2}
              Swiper
              slidesPerView={2}
              spaceBetween={2}
              centeredSlides={true}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
              style={{ paddingBottom: "50px" }}
            >
              {youtubeVideo.map(item => (
                <SwiperSlide style={{ padding: "20px" }} key={item.id}>
                  <iframe style={{
                    width: "100%",
                    height: "493px",
                    borderRadius: "20px",
                  }} src={item.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="video-slider-btn-box">
              <button onClick={handlePrev} className="video-slider-btn">
                <MdNavigateBefore size={30} />
              </button>
              <button onClick={handleNext} className="video-slider-btn">
                <MdNavigateNext size={30} />
              </button>
            </div>
          </div>
        </section>

        <section className="grants" id="grants">
          <div className="container">
            <div className="grants-box">
              <h2 className="grants-title">Grantlarimiz</h2>
              <img
                className="grants-img"
                src={Grants}
                alt="Grants-logo"
                width={170}
                height={170}
              />
            </div>
            <div className="grants-wrapper">
              <div className="grants-middle">
                <p className="grants-text">
                  <FaCheck className="grants-icon" /> 1. "You deserve it" 100%
                  grant - IELTS 7.0+ va SAT 1200+
                </p>

                <p className="grants-text">
                  <FaCheck className="grants-icon" /> 2. "Superhero" 50% grant -
                  SAT 1300+
                </p>

                <p className="grants-text">
                  <FaCheck className="grants-icon" /> 3. "Be bright" 50% grant -
                  IELTS 7.5+
                </p>
              </div>

              <div className="grants-right">
                <p className="grants-text">
                  <FaCheck className="grants-icon" /> 1. "You deserve it" 100%
                  grant - IELTS 7.0+ va SAT 1200+
                </p>

                <p className="grants-text">
                  <FaCheck className="grants-icon" />
                  2. "Superhero" 50% grant - SAT 1300+
                </p>

                <p className="grants-text">
                  <FaCheck className="grants-icon" />
                  3. "Be bright" 50% grant - IELTS 7.5+
                </p>
              </div>
            </div>
            <div className="grants-btns">
              <a style={{ display: 'flex', justifyContent: 'center' }} href="https://admission.millatumidi.uz/?refid=newsite" target="_blank">
                <img className="about-btn" src={BtnHero} alt="" />
              </a>
            </div>
          </div>
        </section>

        <section className="teachers" id="teachers">
          <div className="">
            <div className="teachers-box">
              <h2 className="teachers-title">
                Bizning malakali o’qituvchilarimiz
              </h2>
            </div>

            <Marquee>
              <div className="teachers-wrapper">
                <div className="teachers-item">
                  <img
                    src={TeacherOne}
                    alt="Teacher-img"
                    width={346}
                    height={402}
                  />
                  <p className="teachers-name">Galina Pan</p>
                  <p className="teachers-name" style={{opacity: '0%'}}>test</p>
                  <span className="teacher-job">Kasbi:</span>
                  <p className="teacher-skills">Dean of International
                    business faculty</p>
                </div>

                <div className="teachers-item">
                  <img
                    src={TeacherTwo}
                    alt="Teacher-img"
                    width={346}
                    height={402}
                  />
                  <p className="teachers-name">Muhtor Bekmuratov</p>
                  <span className="teacher-job">Kasbi:</span>
                  <p className="teacher-skills">Dean of Accounting
                    and Finance faculty</p>
                </div>

                <div className="teachers-item">
                  <img
                    src={TeacherFour}
                    alt="Teacher-img"
                    width={346}
                    height={402}
                  />
                  <p className="teachers-name">Muslimbek Pirnazarov</p>
                  <span className="teacher-job">Kasbi:</span>
                  <p className="teacher-skills">Dean of
                    Information Technologies faculty</p>
                </div>

                <div className="teachers-item">
                  <img
                    src={TeacherTree}
                    alt="Teacher-img"
                    width={346}
                    height={402}
                  />
                  <p className="teachers-name">Murad Ismailov </p>
                  <span className="teacher-job">Kasbi:</span>
                  <p className="teacher-skills">Dean of English Teaching
                    faculty</p>
                </div>
                <div className="teachers-item">
                  <img
                    src={TeacherOne}
                    alt="Teacher-img"
                    width={346}
                    height={402}
                  />
                  <p className="teachers-name">Galina Pan</p>
                  <p className="teachers-name" style={{ opacity: '0%' }}>test</p>
                  <span className="teacher-job">Kasbi:</span>
                  <p className="teacher-skills">Dean of International
                    business faculty</p>
                </div>

                <div className="teachers-item">
                  <img
                    src={TeacherTwo}
                    alt="Teacher-img"
                    width={346}
                    height={402}
                  />
                  <p className="teachers-name">Muhtor Bekmuratov</p>
                  <span className="teacher-job">Kasbi:</span>
                  <p className="teacher-skills">Dean of Accounting
                    and Finance faculty</p>
                </div>

                <div className="teachers-item">
                  <img
                    src={TeacherFour}
                    alt="Teacher-img"
                    width={346}
                    height={402}
                  />
                  <p className="teachers-name">Muslimbek Pirnazarov</p>
                  <span className="teacher-job">Kasbi:</span>
                  <p className="teacher-skills">Dean of
                    Information Technologies faculty</p>
                </div>

                <div className="teachers-item">
                  <img
                    src={TeacherTree}
                    alt="Teacher-img"
                    width={346}
                    height={402}
                  />
                  <p className="teachers-name">Murad Ismailov </p>
                  <span className="teacher-job">Kasbi:</span>
                  <p className="teacher-skills">Dean of English Teaching
                    faculty</p>
                </div>
              </div>
            </Marquee>
          </div>
        </section>

        <section className="university">
          <div className="university-wrapper container">
            <h2 className="university-title">
              Universitetimizda o’qish uchun talablar
            </h2>
            <div className="university-box">
              <div className="university-item">
                <div className="university-bor">
                  <h3 className="university-text">Pasport / ID nusxasi.</h3>
                  <p className="university-desc">
                    18 ta amaliy va nazariy darslar CV yozish haqidagi dars JOB
                    interview ga ega bo’lasi
                  </p>
                </div>
              </div>

              <div className="university-item">
                <div className="university-bor">
                  <h3 className="university-text">IELTS 5.5+</h3>
                  <p className="university-desc">
                    18 ta amaliy va nazariy darslar CV yozish haqidagi dars JOB
                    interview ga ega bo’lasiz
                  </p>
                </div>
              </div>

              <div className="university-item">
                <div className="university-bor">
                  <h3 className="university-text">Maktabni bitirganlik haqidagi guvohnoma (baholar bilan)</h3>
                  <p className="university-desc">
                    18 ta amaliy va nazariy darslar CV yozish haqidagi dars JOB
                    interview ga ega bo’lasiz
                  </p>
                </div>
              </div>
            </div>
            <div className="university-box" style={{ marginTop: "45px" }}>
              <div className="university-item">
                <div className="university-bor">
                  <h3 className="university-text">Ulkan motivatsiya
                  </h3>
                  <p className="university-desc">
                    18 ta amaliy va nazariy darslar CV yozish haqidagi dars JOB
                    interview ga ega bo’lasiz
                  </p>
                </div>
              </div>

              <div className="university-item">
                <div className="university-bor">
                  <h3 className="university-text">Yuqori kreativlik
                  </h3>
                  <p className="university-desc">
                    18 ta amaliy va nazariy darslar CV yozish haqidagi dars JOB
                    interview ga ega bo’lasiz
                  </p>
                </div>
              </div>

              <div className="university-item">
                <div className="university-bor">
                  <h3 className="university-text">Ishtiyoq
                  </h3>
                  <p className="university-desc">
                    18 ta amaliy va nazariy darslar CV yozish haqidagi dars JOB
                    interview ga ega bo’lasiz
                  </p>
                </div>
              </div>
            </div>
            <a style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }} href="https://admission.millatumidi.uz/?refid=newsite" target="_blank">
              <img className="about-btn" src={BtnHero} alt="" />
            </a>
          </div>
        </section>

        <section className="questions">
          <div className="container">
            <h2 className="questions-title">Ko’p beriladigan savollar</h2>
            <div className="py-20 flex justify-center">
              <div className="rounded-lg overflow-hidden">
                {frequentlyAskQuestions.map((item, i) => (
                  <div key={i} className="border-orange-400 mb-1">
                    <div
                      className={`px-5 py-3 flex cursor-pointer items-center justify-between questions-bor ${activeId === i ? "bg-gray-100" : ""
                        }`}
                      onClick={() => togglerFunction(i)}
                    >
                      <p className="flex-1 questions-text">{item.title}</p>
                      <span>
                        {activeId === i ? (
                          <i className="fa-solid fa-angle-up"></i>
                        ) : (
                          <i className="fa-solid fa-angle-down"></i>
                        )}
                      </span>
                    </div>
                    <div
                      className={`transition-max-height duration-500 ease-in-out ${activeId === i
                        ? "max-h-screen"
                        : "max-h-0 overflow-hidden"
                        }`}
                    >
                      <div className="px-5 py-4">
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <h2 className="footer-title">BIZGA MUROJAT QILING</h2>
          <div className="footer-wrapper">
            <div className="footer-left">
              <p className="footer-text">Qo’ng’iroq qiling: 9:00 - 20:00</p>
              <a href="tel:+998712000306" className="footer-desc">
                +998 (71) 200-03-06
              </a>
            </div>
            <div className="footer-right">
              <p className="footer-text">Elektron pochta orqali murojaat qiling</p>
              <a className="footer-desc" href="mailto:ciu.registrar@cambridge.uz">
                ciu.registrar@cambridge.uz
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Home;
