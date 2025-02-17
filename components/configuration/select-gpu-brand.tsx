import { AmdBrandCard } from "./card-amd-brand";
import { IntelBrandCard } from "./card-intel-brand";
import { NvidiaBrandCard } from "./card-nvidia-brand";

export const SelectGpuBrand = () => {

  return (
    <div className="flex h-[800px] lg:h-[340px] flex-col gap-4 lg:flex-row select-none">
      <AmdBrandCard
        selected={false}
        thing="graphics cards"
      />
      <IntelBrandCard
        selected={false}
        thing="graphics cards"
      />
      <NvidiaBrandCard
        selected={false}
      />
    </div>
  );
};
