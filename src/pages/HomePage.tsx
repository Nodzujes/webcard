import {useState} from "react";
import {DndContext} from "@dnd-kit/core";
import Footer from "../components/Footer.tsx";
import WindowContainer from "../components/WindowContainer.tsx";
import AboutWindow from "../components/AboutWindow.tsx";

type Props = {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
};

function HomePage({isDark, setIsDark}: Props) {

  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <>
      <main>
        <DndContext onDragEnd={(event) => {
          const { delta } = event;

          setPosition((prev) => ({
            x: prev.x + delta.x,
            y: prev.y + delta.y,
          }));
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
                <button onClick={() => setIsAboutOpen(true)}>
                  <img src={isDark ? "/icons/account-dark.svg" : "/icons/account-light.svg"} alt="picture" />
                  <span>обо мне</span>
                </button>
                <button>
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
              position={position}
            />
          )}
        </DndContext>
      </main>
      <Footer isDark={isDark} setIsDark={setIsDark} />
    </>
  );
}

export default HomePage;