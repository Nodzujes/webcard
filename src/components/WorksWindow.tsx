import { useDraggable } from "@dnd-kit/core";
import WindowContainer from "./WindowContainer.tsx";

type Props = {
    onClose: () => void;
    position: { x: number; y: number };
    zIndex: number;
};

function WorksWindow ({onClose, position, zIndex }: Props){
    const { attributes, listeners, setNodeRef, transform } = useDraggable({ id: "works-window" });

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

    return (
        <>
            <div ref={setNodeRef} style={style} className="about__window">
                <WindowContainer>
                    <div className="window__header" id="works">
                        <div className="drag-handle" {...listeners} {...attributes}>
                            <h2>работы</h2>
                        </div>
                        <button type="button" onClick={onClose} aria-label="Закрыть">x</button>
                    </div>
                    <ul className="works__list">

                    </ul>
                </WindowContainer>
            </div>
        </>
    );
}

export default WorksWindow;