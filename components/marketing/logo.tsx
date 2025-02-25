import Image from "next/image";

export const Logo = () => {
  return (
    <>
      <Image
        className="dark:hidden"
        src="/logo.png"
        alt="Download PC Parts logo"
        width={130}
        height={130}
        priority
      />
      <Image
        className="hidden dark:block"
        src="/logo-dark.png"
        alt="Download PC Parts logo"
        width={130}
        height={130}
        priority
      />
    </>
  );
};
