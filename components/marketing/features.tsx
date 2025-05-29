import { EarthIcon } from "../ui/earth";
import { ShieldCheckIcon } from "../ui/shield-check";
import { HandCoinsIcon } from "../ui/hand-coins";
import { FeatureCard } from "./features-card";

const features = [
  {
    title: "Eco friendly",
    description:
      "Embrace sustainability with our digital platform. Eliminate physical waste and reduce your carbon footprint.",
    icon: <EarthIcon size={28} />,
  },
  {
    title: "Safety & open-source",
    description:
      "Built on open-source principles, our platform ensures transparency and leverages cutting-edge technology for maximum security.",
    icon: <ShieldCheckIcon size={28} />,
  },
  {
    title: "Free ",
    description:
      "Access our revolutionary service at no cost. Experience the future of PC building without financial barriers.",
    icon: <HandCoinsIcon size={28} />,
  },
];

export const Features = () => {
  return (
    <div id="features" className="bg-black text-white py-[72px] sm:py-24 flex">
      <div className="container">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
          Revolutionize Your Experience
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center mt-5 text-xl text-white/70">
            Discover the cutting-edge advantages of our platform and see why
            we're the talk of the tech world
          </p>
        </div>
        <div className="mt-16 flex flex-col sm:flex-row justify-center gap-4">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};