import "./App.css";
import monumental from "./monumental.jpg";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import king from "./king.jpeg";
import coleman from "./lightweight.jpeg"
import duo from "./duo.jpeg"
import leetom from "./leetom2.jpeg"

function App() {
  const { scrollY } = useScroll();
  const smoothScroll = useSpring(scrollY, {
    stiffness: 180,
    damping: 20,
    mass: 0.1,
  });

  // Efecto parallax en la imagen
  const imageY = useTransform(smoothScroll, [0, 300], [0, 200]);

  // Efecto parallax en el texto (más lento para sensación de profundidad)
  const textY = useTransform(smoothScroll, [0, 300], [0, 600]);
  const textY2 = useTransform(scrollY, [0, 0], [0, 40]);
  const textX2 = useTransform(scrollY, [0, 800], [0, 40]);

  const imageOpacity = useTransform(scrollY, [0, 300], [1, 0.2]);
  const imageRotate = useTransform(scrollY, [0, 300], ["0deg", "-10deg"]);

  const smoothOpacity = useSpring(useTransform(scrollY, [100, 300], [1, 0.2]), {
    stiffness: 900,
    damping: 20,
  });
  const smoothRotate = useSpring(
    useTransform(scrollY, [0, 300], ["0deg", "-10deg"]),
    { stiffness: 100, damping: 20 }
  );
  const smoothScale = useSpring(useTransform(scrollY, [0, 300], [1, 1.2]), {
    stiffness: 80,
    damping: 20,
  });

  return (
    <div className="App">
      <header className="Header"></header>
      <div id="Centralizer">
        <body id="BodyContainer">
          <div id="FirstPic">
            {" "}
            <motion.img
              id="MainImage"
              src={monumental}
              style={{
                y: imageY,
                opacity: smoothOpacity,
                rotate: smoothRotate,
              }}
            />{" "}
            <div id="ImageTextContainer" style={{ y: textY }}>
              <span id="ImageText">CONSTRUYE MUSCULO, MEJORA TU VIDA</span>{" "}
              <span id="ImageText2">- EL MEJOR GYM DE BARRANCABERMEJA -</span>
            </div>
          </div>
          <div id="FirstSubTextContainer">
            <motion.div id="FirstSubText" style={{ y: textY2, x: textX2 }}>
              MUCHOS BENEFICIOS
            </motion.div>

          </div>
          <div id="BenefictsContainer">
              <div className="Card"><img className="CardImage" src={duo}></img></div>
              <div className="Card"><img className="CardImage" src={leetom}></img></div>
              {/* <img src={ronnie}></img> */}
            </div>
        </body>
      </div>
    </div>
  );
}
export default App;
