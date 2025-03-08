// import { useTheme } from "../theme/ThemeContext";
import Scene from "./components/Scene";
import BulleDeDialogue from "./components/BulleDeDialogue";
import { useAssistant } from "@src/hooks/assistant/AssistantContext";

function Assistant() {
  //   const { theme } = useTheme();
  const { canvaHeight, canvaWidth, canvaCameraPosition, canvaZoom, canvaPositionX, canvaPositionY, bulleText } = useAssistant();

  return (
    <>
      <div
        className={`fixed ${canvaPositionX} ${canvaPositionY} z-30 flex items-center invisible md:visible`}
      >
        {" "}
        {/* flex-row-reverse */}
        <BulleDeDialogue text={bulleText} side="right" />
        <Scene
          canvaHeight={canvaHeight}
          canvaWidth={canvaWidth}
          canvaCameraPosition={canvaCameraPosition}
          canvaZoom={canvaZoom}
        />
      </div>
    </>
  );
}

export default Assistant;
