import { Container } from "./styles";
import Ved from "../../assets/sudin.jpg";
import wordpress from "../../assets/wordpress.svg";
import shopify from "../../assets/shopify.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import java from "../../assets/java.svg";
import python from "../../assets/python.svg";
import telegram from "../../assets/telegram.svg";
import mongodb from "../../assets/mongodb.svg";
import springboot from "../../assets/springboot.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.1 * 1000}>
          <p>Hey there! 👋</p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.1 * 1000}>
          <p>
            I’m Sudin, a full-stack problem-solver with 6+ years of experience
            turning big ideas into reality. I’ve had the pleasure of co-founding
            startups, like Nivid, a 150K-user EdTech platform, and Najik, a
            multi-vendor e-commerce powerhouse in Nepal. If there’s one thing I
            love, it’s building products that make people’s lives easier—and
            doing it at scale!
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.2 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            Whether it’s whipping up an MVP in record time or scaling systems
            for global impact, I’m your go-to engineer. I’ve dabbled in
            everything from Java to Ruby on Rails, with a side of React,
            TypeScript, Spring Boot, and some tasty GraphQL magic thrown in. If
            there’s a new tech trend, you can bet I’m already testing it out.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.3 * 1000}>
          <p>
            At heart, I’m an entrepreneur and a tech geek who’s always up for a
            challenge—be it creating solutions for 150 clients at my startups or
            working on the next big thing in energy management. I’ve always been
            driven by the idea that the best products don’t just work—they wow.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.4 * 1000}>
          <h3>Skills</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation
              animateIn="fadeInUp"
              delay={0.1 * 1000}>
              <img
                src={java}
                alt="Java"
              />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation
              animateIn="fadeInUp"
              delay={0.19 * 1000}>
              <img
                src={springboot}
                alt="springboot"
              />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation
              animateIn="fadeInUp"
              delay={0.12 * 1000}>
              <img
                src={python}
                alt="Python"
              />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation
              animateIn="fadeInUp"
              delay={0.19 * 1000}>
              <img
                src={jsIcon}
                alt="JavaScript"
              />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation
              animateIn="fadeInUp"
              delay={0.14 * 1000}>
              <img
                src={typescriptIcon}
                alt="Typescript"
              />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation
              animateIn="fadeInUp"
              delay={0.16 * 1000}>
              <img
                src={nodeIcon}
                alt="Node"
              />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation
              animateIn="fadeInUp"
              delay={0.13 * 1000}>
              <img
                src={mongodb}
                alt="MongoDB"
              />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation
              animateIn="fa deInUp"
              delay={0.15 * 1000}>
              <img
                src={telegram}
                alt="Telegram"
              />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation
              animateIn="fadeInUp"
              delay={0.17 * 1000}>
              <img
                src={htmlIcon}
                alt="Html"
              />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation
              animateIn="fadeInUp"
              delay={0.18 * 1000}>
              <img
                src={cssIcon}
                alt="Css"
              />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation
          animateIn="fadeInRight"
          delay={0.2 * 1000}>
          <img
            src={Ved}
            alt="Ved Patel"
          />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
