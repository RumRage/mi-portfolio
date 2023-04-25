import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full
    before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`;

  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      <AnchorLink
        href="#inicio"
        className={`${
          selectedPage === "inicio" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("inicio")}
      />

      <AnchorLink
        href="#habilidades"
        className={`${
          selectedPage === "habilidades" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("habilidades")}
      />

      <AnchorLink
        href="#projectos"
        className={`${
          selectedPage === "projectos" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("projectos")}
      />

      <AnchorLink
        href="#estudios"
        className={`${
          selectedPage === "estudios" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("estudios")}
      />

      <AnchorLink
        href="#contacto"
        className={`${
          selectedPage === "contacto" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("contacto")}
      />
    </div>
  );
};

export default DotGroup;
