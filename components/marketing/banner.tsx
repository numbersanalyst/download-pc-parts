import { Banner } from "@/components/ui/banner-template";

export function RainbowBanner() {
  return (
    <div className="relative w-full bg-background">
      <Banner
        message="🎉 The Future is Now!"
        height="60px"
        variant="rainbow"
        className="bg-violet-700 bg-opacity-20"
      />
    </div>
  );
}
