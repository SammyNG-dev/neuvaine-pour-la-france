import { createContext, useContext } from "react";
import martin_image_galery from "../assets/Saint-Martin-de-Tours-galery.jpeg";
import therese_image_galery from "../assets/Sainte-Thérèse-galerie.jpg";
import remi_image_galery from "../assets/saint-remi-baptise-clovis-galery.png";
import louis_image_galery from "../assets/saint-louis-galerie.jpeg";
import remi_big from "../assets/saint-remi-big.png";
import therese_big from "../assets/sainte-therese-big.jpg";
import martin_big from "../assets/saint-martin-big.jpeg";
import louis_big from "../assets/saint-louis-big.jpeg";
import jeanne_big from "../assets/sainte-jeanne-big.jpeg";
import jeanne_galery from "../assets/sainte-jeanned-arc-galery.jpeg";
import esprit_saint_galery from "../assets/esprit-saint-vitrail-galery.jpg";
import esprit_saint_big from "../assets/esprit-saint-vitrail.jpg";

const SaintsContext = createContext<SaintsContextType | null>(null);

type Prayer = {
  id: number;
  title: string;
  text: string;
};

type Saint = {
  id: number;
  name: string;
  img_galery: string;
  img: string;
  prayers: Prayer[] | null;
  testament: string | null;
  quotes: string[] | null;
};

type SaintsContextType = {
  saintsData: Saint[];
};

const saintsData: Saint[] = [
  {
    id: 1,
    name: "Saint Rémi de Reims.",
    img_galery: remi_image_galery,
    img: remi_big,
    prayers: null,
    testament: "Au nom du Père, du Fils et du Saint Esprit",
    quotes: ["Le Seigneur est mon berger"],
  },
  {
    id: 2,
    name: "Saint Martin de Tours",
    img_galery: martin_image_galery,
    img: martin_big,
    prayers: [
      {
        id: 1,
        title: "Prière de Saint Martin de Tours.",
        text: "Ils sont durs, Seigneur, les combats qu'il faut livrer dans son corps pour ton service : et j'ai assez de luttes que j'ai soutenues jusqu'ici. Mais si vous m'ordonnez de peiner encore pour monter la garde devant votre camp, je ne refuse pas, je n'alléguerai pas pour excuse l'épuisement de l'âge. Je me dévouerai à la tâche que vous m'imposerez : sous les étendards, aussi longtemps que vous l'ordonnerez vous-même, je servirai. Sans doute un vieillard souhaiterait un congé après une vie de labeur, mais l'âme est capable de vaincre les années et saura ne pas céder à la vieillesse. Mais si maintenant vous ménagez mon grand âge, c’est bien pour moi, c’est votre volonté, Seigneur. Quant à mes frères pour qui je crains, vous les garderez vous-même. Ainsi soit-il.",
      },
    ],
    testament: null,
    quotes: null,
  },
  {
    id: 3,
    name: "Saint Louis, Roi de France.",
    img_galery: louis_image_galery,
    img: louis_big,
    prayers: [
      {
        id: 1,
        title: "Prière pour la France de Saint Louis",
        text: "Dieu Tout-Puissant et Eternel, qui avez constitué le Royaume des Francs pour être l'instrument de vos divines volontés sur la terre, le glaive et le bouclier de notre Mère la Sainte Eglise, nous vous prions de montrer aux Français ce qu'ils doivent faire pour réaliser votre Règne en ce monde, afin que l'ayant en vue, ils se dévouent à l'accomplir à force de charité de courage et de persévérance ! Nous vous en supplions par Jésus-Christ Notre- Seigneur.  Ainsi soit-il",
      },
    ],
    testament: null,
    quotes: null,
  },
  {
    id: 4,
    name: "Sainte Jeanne d'Arc",
    img_galery: jeanne_galery,
    img: jeanne_big,
    prayers: [
      {
        id: 1,
        title: "Prière de Sainte Jeanne d'Arc",
        text: "Seigneur, guide moi !",
      },
    ],
    testament: null,
    quotes: null,
  },
  {
    id: 5,
    name: "Sainte Thérèse de Lisieux",
    img_galery: therese_image_galery,
    img: therese_big,
    prayers: [
      {
        id: 1,
        title:
          "Prière de Sainte Thérèse de Lisieux à Sainte Jeanne d’Arc pour la France.",
        text: "« O Jeanne, souviens-toi que tu sauvas la France »\nChant de la France au loin :\n« Rappelle-toi, Jeanne, de ta patrie ! Rappelle-toi de tes valons en fleurs ! Rappelle-toi la riante prairie que tu quittas pour essuyer mes pleurs !\nÔ Jeanne ! Souviens-toi que tu sauvas la France, comme un ange des cieux tu guéris ma souffrance, écoute dans la nuit, la France qui gémit. Rappelle-toi !\nRappelle-toi, Jeanne de tes victoires, rappelle-toi de Reims et d’Orléans, rappelle-toi que tu couvris de gloire, au nom du royaume de Dieu, le royaume des Francs !\nMaintenant, loin de toi, je souffre et je soupire, daigne encor me sauver ! Jeanne, douce Martyre ! Oh ! Viens briser mes fers !\nDes maux que j’ai soufferts, rappelle-toi ! »\nRéponse de Sainte Jeanne d’Arc :\n« Ô France ! Ô ma belle patrie ! Il faut t’élever jusqu’aux Cieux, si tu veux retrouver la vie, et que ton nom soit glorieux.\nLe Dieu des Francs dans sa clémence a résolu de te sauver mais c’est par moi, Jeanne de France, qu’il veut encor te racheter\nViens à moi, Patrie si belle. Je prie pour toi, ma voix t’appelle, reviens à moi. »\nAinsi soit-il.",
      },
    ],
    testament: null,
    quotes: null,
  },
  {
    id: 6,
    name: "Autres prières",
    img_galery: esprit_saint_galery,
    img: esprit_saint_big,
    prayers: [
      {
        id: 1,
        title: "Prière de Saint...",
        text: "Seigneur, protège moi",
      },
    ],
    testament: null,
    quotes: null,
  },
];

export const SaintsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <SaintsContext.Provider value={{ saintsData }}>
      {children}
    </SaintsContext.Provider>
  );
};

export const useSaints = () => {
  const value = useContext(SaintsContext);
  if (!value) {
    throw new Error("useSaints must be used within a <SaintsContextProvider>");
  }

  return value;
};
