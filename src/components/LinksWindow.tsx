import { useDraggable } from "@dnd-kit/core";
import WindowContainer from "./WindowContainer.tsx";

type Props = {
  onClose: () => void;
  position: { x: number; y: number };
  zIndex: number;
  isDark: boolean;
};

function LinksWindow({ onClose, position, zIndex, isDark }: Props){
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "links-window",
  });

  const style: React.CSSProperties = {
    position: "absolute",
    top: position.y,
    left: position.x,
    // transform только во время драга
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    zIndex: zIndex,
  };

  return(
    <>
      <div ref={setNodeRef} style={style} className="about__window">
        <WindowContainer>
          <div className="window__header" id="links">
            <div className="drag-handle" {...listeners} {...attributes}>
              <h2>ссылки</h2>
            </div>
            <button id="close" onClick={onClose} type="button">x</button>
          </div>
          <div className="modal__wrapper">
            <div className="modal__wrappers--links">
              <a href="https://github.com/Nodzujes" target="_blank" rel="noopener noreferrer">
                <img src={isDark ? "/icons/github-dark.svg" : "/icons/github-light.svg"} alt="github_icon_1" />
                <span>github 1</span>
              </a>
              <a href="https://github.com/Kiquzo" target="_blank" rel="noopener noreferrer">
                <img src={isDark ? "/icons/github-dark.svg" : "/icons/github-light.svg"} alt="github_icon_2" />
                <span>github 2</span>
              </a>
              <a href="https://ru.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <img src={isDark ? "/icons/linkedin-dark.svg" : "/icons/linkedin-light.svg"} alt="linkedin_icon" />
                <span>linkedin</span>
              </a>
              <a href="mailto:dev.sereda.p.r@gmail.com" rel="noopener noreferrer">
                <img src={isDark ? "/icons/mailGoogle-dark.svg" : "/icons/mailGoogle-light.svg"} alt="" />
                <span>gmail</span>
              </a>
            </div>
            <div className="modal__wrappers--txt">
              <p>При нажатии на любую из ссылок откроется новая вкладка!</p>
            </div>
          </div>
        </WindowContainer>
      </div>
    </>
  )
}

export default LinksWindow;