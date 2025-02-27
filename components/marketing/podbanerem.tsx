import Image from "next/image";
import logoImage from "../public/logo.png";

export const Navbar = () => {
  return (
    <div className="container">
      <Image src={logoImage} alt="Saas logo" />
    </div>
  );
};
