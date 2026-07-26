import {useState} from "react";
import {DndContext} from "@dnd-kit/core";
import { restrictToWindowEdges } from "@dnd-kit/modifiers";
import Footer from "../components/Footer.tsx";
import WindowContainer from "../components/WindowContainer.tsx";
import AboutWindow from "../components/AboutWindow.tsx";
import LinksWindow from "../components/LinksWindow.tsx";

type Props = {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
};

function HomePage({isDark, setIsDark}: Props) {

  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isLinksOpen, setIsLinksOpen] = useState(false);

  const [aboutPosition, setAboutPosition] = useState({ x: 200, y: 150 });
  const [linksPosition, setLinksPosition] = useState({ x: 450, y: 210 });

  // z-index каждого окна
  const [aboutZ, setAboutZ] = useState(100);
  const [linksZ, setLinksZ] = useState(100);

  // Счётчик самого верхнего слоя
  const [topZ, setTopZ] = useState(100);

  // Функция: поднять окно наверх
  const bringToFront = (window: "about" | "links") => {
    const newZ = topZ + 1;
    setTopZ(newZ);

    if (window === "about") setAboutZ(newZ);
    if (window === "links") setLinksZ(newZ);
  };

  return (
    <>
      <main>
        <DndContext
          modifiers={[restrictToWindowEdges]}
          onDragStart={({ active }) => {
            // При начале перетаскивания поднимаем окно
            if (active.id === "about-window") bringToFront("about");
            if (active.id === "links-window") bringToFront("links");
          }}
          onDragEnd={({ delta, active }) => {
            // Смотрим, какое именно окно двигали
            if (active.id === "about-window") {
              setAboutPosition((prev) => ({
                x: prev.x + delta.x,
                y: prev.y + delta.y,
              }));
            }

            if (active.id === "links-window") {
              setLinksPosition((prev) => ({
                x: prev.x + delta.x,
                y: prev.y + delta.y,
              }));
            }
        }}>
          <WindowContainer>
            <div className="window__header">
              <h2>главная</h2>
            </div>
            <div className="wrapper">
              <div className="window__main__txt">
                <h1>ПРИВЕТ! <span>Я Nodzujes</span></h1>
                <p>fullstack developer, designer</p>
              </div>
              <div className="window__btn">
                <button onClick={() => { setIsAboutOpen(true); bringToFront("about"); }}>
                  <img src={isDark ? "/icons/account-dark.svg" : "/icons/account-light.svg"} alt="picture" />
                  <span>обо мне</span>
                </button>
                <button onClick={() => { setIsLinksOpen(true); bringToFront("links"); }}>
                  <img src={isDark ? "/icons/link-dark.svg" : "/icons/link-light.svg"} alt="picture" />
                  <span>ссылки</span>
                </button>
                <button>
                  <img src={isDark ? "/icons/folder-dark.svg" : "/icons/folder-light.svg"} alt="picture" />
                  <span>работы</span>
                </button>
                <button>
                  <img src={isDark ? "/icons/mail-dark.svg" : "/icons/mail-light.svg"} alt="picture" />
                  <span>контакты</span>
                </button>
              </div>
            </div>
          </WindowContainer>
          {isAboutOpen && (
            <AboutWindow
              onClose={() => setIsAboutOpen(false)}
              position={aboutPosition}
              zIndex={aboutZ}
            />
          )}
          {isLinksOpen && (
            <LinksWindow
              onClose={() => setIsLinksOpen(false)}
              position={linksPosition}
              zIndex={linksZ}
              isDark={isDark}
            />
          )}
        </DndContext>
      </main>
      <Footer isDark={isDark} setIsDark={setIsDark} />
    </>
  );
}

export default HomePage;