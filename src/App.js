import './App.css';
import AppLink from "./components/AppLink/AppLink";
import Testimonial from "./components/Testimonial/Testimonial";
import Stat from "./components/Stat/Stat";

import googlePlayIcon from "./assets/google-play.svg";
import appStoreIcon from "./assets/app-store.svg";
import testimonialLorenzoIcon from "./assets/testimonial-lorenzo.png";
import testimonialAdalinaIcon from "./assets/testimonial-adalina.png";
import testimonialAlexanderIcon from "./assets/testimonial-alexander.png";
import testimonialRushanaIcon from "./assets/testimonial-rushana.png";

const testimonialsData = [
  {
    imgSrc: testimonialLorenzoIcon,
    name: "LORENZO",
    handle: "@lorenzo",
    text: "Amazing Telegram bot! Provides real-time crypto prices and news."
  },
  {
    imgSrc: testimonialAdalinaIcon,
    name: "ADALINA",
    handle: "@ada",
    text: "Must-have bot for crypto traders. Accurate signals and analysis."
  },
  {
    imgSrc: testimonialAlexanderIcon,
    name: "ALEXANDER",
    handle: "@alex_x",
    text: "Superb cryptocurrency bot! Quick updates and reliable data."
  },
  {
    imgSrc: testimonialRushanaIcon,
    name: "RUSHANA",
    handle: "@hana",
    text: "Efficient and user-friendly bot. Simplifies crypto trading tasks."
  },
];

const appLinksData = [
  { imgSrc: googlePlayIcon, name: "Google play", label: "get it on" },
  { imgSrc: appStoreIcon, name: "App Store", label: "Available on the" },
];

const statData = [
  { text: "20K+", label: "subscribers" },
  { text: "19,5K", label: "successful cases" },
  { text: "4.8/5", label: "rating" },
];

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="headline">DO YOU WANT TO LEARN MORE ABOUT CRYPTOCURRENCIES <span className="headline-gradient">QUICKLY AND EASILY ?</span></div>
        <div className="subheadline">Subscribe to our channel to learn more</div>

        <div className="stats">
          {statData.map(({ text, label }, index) => (
            <Stat text={text} label={label} key={index} />
          ))}
        </div>

        <button className="cta-button">JOIN WHATSAPP</button>

        <div className="app-links">
          {appLinksData.map(({ imgSrc, name, label }, index) => (
            <AppLink imgSrc={imgSrc} name={name} label={label} key={index} />
          ))}
        </div>

        <div className="testimonials">
          {testimonialsData.map(({ imgSrc, name, handle, text }, index) => (
            <Testimonial imgSrc={imgSrc} name={name} handle={handle} text={text} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
