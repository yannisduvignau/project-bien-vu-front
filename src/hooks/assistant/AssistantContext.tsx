import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

// Définir les types pour le contexte
interface AssistantContextType {
  canvaHeight: string;
  canvaWidth: string;
  canvaCameraPosition: [number, number, number];
  canvaZoom: number;
  canvaPositionX: string;
  canvaPositionY: string;
  handleResizeAssistant: (
    height?: string,
    width?: string,
    cameraPosition?: [number, number, number],
    zoom?: number,
    posX?: string,
    posY?: string
  ) => void;
  bulleText: string;
  handleChangeBulleText: (bulleText?: string) => void;
}

// Valeurs par défaut du contexte
const defaultContextValue: AssistantContextType = {
  canvaHeight: "15vh",
  canvaWidth: "15vh",
  canvaCameraPosition: [0.8, -0.3, 1.5],
  canvaZoom: 22,
  canvaPositionX: "right-6",
  canvaPositionY: "bottom-16",
  handleResizeAssistant: () => {},
  handleChangeBulleText: () => {},
  bulleText:
    "🚀 <strong>Bienvenu sur BienVu</strong> 🚀</br> Avec moi, <a href='/analyse'><strong>analyse</strong></a>, <a href='/estimer'><strong>estime</strong></a> et <a href='/generer'><strong>génére</strong></a> tes annonces immobilières !",
};

// Créer le contexte
const AssistantContext = createContext<AssistantContextType>(defaultContextValue);

export const useAssistant = (): AssistantContextType => {
  return useContext(AssistantContext);
};

interface AssistantProviderProps {
  children: ReactNode;
}

export const AssistantProvider: React.FC<AssistantProviderProps> = ({ children }) => {
  const [canvaHeight, setCanvaHeight] = useState<string>(
    () => localStorage.getItem("canvaHeight") || defaultContextValue.canvaHeight
  );
  const [canvaWidth, setCanvaWidth] = useState<string>(
    () => localStorage.getItem("canvaWidth") || defaultContextValue.canvaWidth
  );
  const [canvaCameraPosition, setCanvaCameraPosition] = useState<[number, number, number]>(() => {
    try {
      const storedValue = localStorage.getItem("canvaCameraPosition");
      return storedValue ? JSON.parse(storedValue) : [0.8, -0.3, 1.5];
    } catch (error) {
      console.error("Erreur de parsing JSON pour canvaCameraPosition :", error);
      return [0.8, -0.3, 1.5]; // Valeur par défaut en cas d'erreur
    }
  });
  const [canvaZoom, setCanvaZoom] = useState<number>(() => {
    const storedValue = localStorage.getItem("canvaZoom");
    return storedValue ? Number(storedValue) : defaultContextValue.canvaZoom;
  });
  const [canvaPositionX, setCanvaPositionX] = useState<string>(
    () => localStorage.getItem("canvaPositionX") || defaultContextValue.canvaPositionX
  );
  const [canvaPositionY, setCanvaPositionY] = useState<string>(
    () => localStorage.getItem("canvaPositionY") || defaultContextValue.canvaPositionY
  );
  const [bulleText, setBulleText] = useState<string>(
    () =>
      localStorage.getItem("bulleText") || defaultContextValue.bulleText
  );

  // Sauvegarde des valeurs dans localStorage
  useEffect(() => {
    // Vérifie si la valeur dans localStorage est différente avant de l'écrire
    if (localStorage.getItem("canvaCameraPosition") !== JSON.stringify(canvaCameraPosition)) {
      localStorage.setItem("canvaCameraPosition", JSON.stringify(canvaCameraPosition));
    }
  }, [canvaCameraPosition]);
  
  useEffect(() => {
      localStorage.setItem("canvaHeight", canvaHeight);
      localStorage.setItem("canvaWidth", canvaWidth);
      localStorage.setItem("canvaZoom", canvaZoom.toString());
      localStorage.setItem("canvaPositionX", canvaPositionX);
      localStorage.setItem("canvaPositionY", canvaPositionY);
      localStorage.setItem("bulleText", bulleText);
  }, [canvaHeight, canvaWidth, canvaZoom, canvaPositionX, canvaPositionY, bulleText]);

  const handleResizeAssistant = (
    height?: string,
    width?: string,
    cameraPosition?: [number, number, number],
    zoom?: number,
    posX?: string,
    posY?: string
  ) => {
    if (height && height !== canvaHeight) setCanvaHeight(height);
    if (width && width !== canvaWidth) setCanvaWidth(width);
    if (cameraPosition && JSON.stringify(cameraPosition) !== JSON.stringify(canvaCameraPosition)) {
      setCanvaCameraPosition(cameraPosition);
    }
    if (zoom && zoom !== canvaZoom) setCanvaZoom(zoom);
    if (posX && posX !== canvaPositionX) setCanvaPositionX(posX);
    if (posY && posY !== canvaPositionY) setCanvaPositionY(posY);
    console.log("Assistant resized");
  };

  const handleChangeBulleText = (text?: string) => {
    if (text && text !== bulleText) {
      setBulleText(text);
      console.log("Bulle text changed");
    }
  };

  return (
    <AssistantContext.Provider
      value={{
        canvaHeight,
        canvaWidth,
        canvaCameraPosition,
        canvaZoom,
        canvaPositionX,
        canvaPositionY,
        handleResizeAssistant,
        handleChangeBulleText,
        bulleText,
      }}
    >
      {children}
    </AssistantContext.Provider>
  );
};
