import Image from "next/image";
import logoImage from "../public/images/logo.png";

export const Navbar = () => {
  return (
    <div className="container">
      <Image src={logoImage} alt="Saas logo" />
    </div>
  );
};
