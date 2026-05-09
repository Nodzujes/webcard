import { useDraggable } from "@dnd-kit/core";
import WindowContainer from "./WindowContainer.tsx";

type Props = {
  onClose: () => void;
  position: { x: number; y: number };
};

function AboutWindow({ onClose, position }: Props){
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "about-window",
  });

  const style = {
    transform: `translate(${position.x + (transform?.x || 0)}px, ${
      position.y + (transform?.y || 0)
    }px)`,
  };

  return(
    <>
      <div ref={setNodeRef} style={style} className="about__window">
        <WindowContainer>
          <div className="window__header" id="about">
            <div className="drag-handle" {...listeners} {...attributes}>
              <h2>кто я</h2>
            </div>
            <button id="close" onClick={onClose} type="button">x</button>
          </div>
          <div className="about__header">
            <img src="/images/icon_image.svg" alt="icon image" />
            <div className="about__header--information">
              <h3>СЕРЕДА ПЁТР</h3>
              <p>fullstack developer, designer</p>
              <p>Статус: <span>в поиске работы</span></p>
            </div>
          </div>
        </WindowContainer>
      </div>
    </>
  );
}
export default AboutWindow;