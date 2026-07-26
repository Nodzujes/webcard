import { useDraggable } from "@dnd-kit/core";
import WindowContainer from "./WindowContainer.tsx";

type Props = {
  onClose: () => void;
  position: { x: number; y: number };
  zIndex: number;
};

function AboutWindow({ onClose, position, zIndex }: Props){
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "about-window",
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
          <div className="about__body">
            <div className="about__body--list">
              <p>привет! я пётр, я fullstack разработчик </p>
              <ul>
                <li>разрабатываю веб-приложения и backend-сервисы</li>
                <li>создаю интерфейсы и прототипы в figma</li>
                <li>работаю с современными web-технологиями (react, typescript)</li>
                <li>интересуюсь архитектурой приложений и безопасностью</li>
              </ul>
            </div>
            <div className="about__body--list">
              <h4>опыт работы</h4>
              <div className="special__сase" >
                <p className="name">PharmaTrace</p>
                <p className="comment">Junior IT Support Specialist (with development tasks)</p>
                <p className="comment">Нояб. 2024 - настоящие время</p>
              </div>
            </div>
            <div className="about__body--list">
              <h4>ОБРОЗОВАНИЕ</h4>
              <div className="special__сase" >
                <p className="name">МПТ РЭУ им. Г.В. Плеханова</p>
                <p className="comment">09.02.07 Разработчик веб и мультимейдийных приложений</p>
                <p className="comment">(ОКОНЧИЛ С ОТЛИЧИЕМ В 2025 году)</p>
              </div>
            </div>
            <div className="about__body--list">
              <h4>ДРУГИЕ ИНТЕРЕСЫ</h4>
              <ul>
                <li>разработка личных проектов и изучение новых технологий</li>
                <li>изучение безопасности приложений и backend-систем</li>
                <li>изучение испанского языка</li>
                <li>походы и активный отдых</li>
                <li>учусь играть на гитаре</li>
                <li>волейбол</li>
              </ul>
            </div>
            <div className="about__body--list">
              <h4>владение языками</h4>
              <div className="special__сase" >
                <p className="name">Я разговариваю на <span>английском</span> (B2) и <span>испанском</span> (B1) языках</p>
              </div>
            </div>
          </div>
        </WindowContainer>
      </div>
    </>
  );
}
export default AboutWindow;