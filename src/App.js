import "./App.css";
import monumental from "./monumental.jpg";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import duo from "./duo.jpeg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import leetom from "./leetom2.jpeg";
import cardio from "./cardio.jpeg";
import latmahcine from "./latmachine.jpeg"
import bluelock from "./bluelock.mp4";
import squadrack from "./squadrack.jpeg"
import { useSelectedCard } from "./useSelectedCard"; // Importamos el hook
import { useEffect, useState } from "react";
import messi from "./messi.jpeg";
import pulldown from "./pulldown.jpeg"
import Card from "./Card";
import benchpress from "./benchpress.jpeg";


function App() {
  const { scrollY } = useScroll();
  const [muscle, setMuscle] = useState(false);
  const [strenght, setStrenght] = useState(false);
  const [life, setLife] = useState(false);
  const [goals, setGoals] = useState(false);

  const [states, setStates] = useState({
    muscle: false,
    strength: false,
    life: false,
    goals: false,
  });

  const toggleState = (key) => {
    setStates((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const smoothScroll = useSpring(scrollY, {
    stiffness: 180,
    damping: 20,
    mass: 0.1,
  });

  const imageY = useTransform(smoothScroll, [0, 300], [0, 200]);
  const textY = useTransform(smoothScroll, [0, 300], [0, 600]);
  const textY2 = useTransform(scrollY, [0, 100], [-30, 0]);
  const textX2 = useTransform(smoothScroll, [0, 800], [0, 5]);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const smoothOpacity = useSpring(useTransform(scrollY, [100, 300], [1, 0.2]), {
    stiffness: 900,
    damping: 90,
  });

  const InverseSmoothOpacity = useSpring(
    useTransform(scrollY, [100, 300], [0.1, 1]),
    {
      stiffness: 900,
      damping: 90,
    }
  );

  const smoothRotate = useSpring(
    useTransform(scrollY, [0, 300], ["0deg", "-10deg"]),
    { stiffness: 100, damping: 20 }
  );

  return (
    <div className="App">
      <header className="Header"></header>
      <div id="Centralizer">
        <div id="BodyContainer">
          <div id="FirstPic">
            <motion.img
              id="MainImage"
              src={monumental}
              style={{
                y: imageY,
                opacity: smoothOpacity,
                rotate: smoothRotate,
              }}
            />
            <div id="ImageTextContainer" style={{ y: textY }}>
              <span id="ImageText">MONUMENTAL F.C GYM</span>
              <span id="ImageText2">- LOS MEJORES EN BARRANCABERMEJA-</span>
            </div>
          </div>
          <div id="FirstSubTextContainer">
            <motion.div
              id="FirstSubText"
              style={{ y: textY2, x: textX2, opacity: InverseSmoothOpacity }}
            >
              TE PUEDES ESPECIALIZAR
            </motion.div>
          </div>
          <div id="BenefictsContainer">
            <Card
              onClick={() => toggleState("muscle")}
              image={duo}
              alt="Gana Masa Muscular"
              text="Gana Masa Muscular"
              className={states.muscle ? "active" : "inactive"}
              SideShowing={states.muscle}
            />
            <Card
              onClick="strength"
              image={leetom}
              alt="Obtén Fuerza"
              text="Obtén Fuerza"
              className={states.strength ? "active" : "inactive"}
              SideShowing={states.strength}
            />
            <Card
              onClick={() => toggleState("life")}
              image={cardio}
              alt="Mejora Tu Vida"
              text="Mejora Tu Vida"
              className={states.life ? "active" : "inactive"}
              SideShowing={states.life}
            />
            <Card
              onClick={() => toggleState("goals")}
              image={messi}
              text="Marca Goles"
              className={states.goals ? "active" : "inactive"}
              SideShowing={states.goals}
            />
          </div>
          <div id="EquipmentSection">
            <div id="EquipmentText">EQUIPAMIENTO</div>
          </div>
          <Carousel responsive={responsive}>
            <img className="CarruselImg" src={benchpress}></img>
            <img className="CarruselImg" src={squadrack}></img>
            <img className="CarruselImg" src={latmahcine}></img>
            <img className="CarruselImg" src={messi}></img>

          </Carousel>
          
        </div>
      </div>
    </div>
  );
}

export default App;
