declare module "*.jpg";
declare module "*.png";
declare module "*.svg";
declare module "*.scss";
// Ajoutez les extensions pour vos autres modules si nécessaire

// Déclarez vos modules JavaScript ici
declare module "./../pages/404/NotFound";
declare module "./../pages/about/About";
declare module "./../pages/home/Home";
declare module "./../layout/RootLayout";
declare module "./../pages/accomodation/Accomodation";
declare module "./../utils/useCollapse" {
  const useCollapse: (
    contentRef: React.RefObject<HTMLDivElement | null>,
    isOpen: boolean
  ) => void;
}
