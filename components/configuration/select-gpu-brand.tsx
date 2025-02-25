import { BrandCard } from "./card-brand";

export const SelectGpuBrand = () => {
  return (
    <div className="flex h-[800px] lg:h-[340px] flex-col gap-4 lg:flex-row select-none">
      <BrandCard
        thing="AMD graphics cards"
        selected={false}
        logoSrc={"/amd-logo.svg"}
        logoAlt="AMD brand logo"
        logoSize={220}
        gradientColor="#ff0000"
        gradientFrom="#ffc0c0"
        gradientTo="#ff9980"
        ringColor="ring-red-500"
      />
      <BrandCard
        thing="Intel graphics cards"
        selected={false}
        logoSrc={"/intel-logo.svg"}
        logoAlt="Intel brand logo"
        logoSize={160}
        gradientColor="#0099ff"
        gradientFrom="#ccccff"
        gradientTo="#66ccff"
        ringColor="ring-blue-500"
        darkHueRotate={true}
      />
      <BrandCard
        thing="Nvidia graphics cards"
        selected={false}
        logoSrc={"/nvidia-logo.svg"}
        logoAlt="Nvidia brand logo"
        logoSize={150}
        gradientColor="#7ab547"
        gradientFrom="#61ff95"
        gradientTo="#7ab547"
        ringColor="ring-green-700"
        darkHueRotate={true}
      />
    </div>
  );
};
