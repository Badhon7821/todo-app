import { HiDocumentText } from "react-icons/hi";

const Header = () => {
  return (
    <header className="header bg-gray-900 p-7 container border-b border-dashed border-teal-800 mx-auto rounded-tl-lg rounded-tr-lg">
      <h2 className="uppercase font-semibold text-teal-500 tracking-wider flex gap-2 items-center">
        <span>
          <HiDocumentText />
        </span>
        TODO App
      </h2>
    </header>
  );
};

export default Header;
