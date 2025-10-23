import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTopOnRouteChange = () => {
  // Componente utile quando si passa da una pagina all'altra utilizzando il componente Link di React-Router, si venga portati effettivamente in cima alla pagina dato che le coordinate di scroll non vengono resettate utilizzando <Link />
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default ScrollToTopOnRouteChange;
