import clsx from "clsx";
import { BadgeCheck, Leaf, Receipt } from "lucide-react";

const features = [
  {
    title: "Eco friendly",
    description:
      "Embrace sustainability with our digital platform. Eliminate physical waste and reduce your carbon footprint.",
    icon: <Leaf className="size-full p-3 object-cover" />,
  },
  {
    title: "Safety & open-source",
    description:
      "Built on open-source principles, our platform ensures transparency and leverages cutting-edge technology for maximum security.",
    icon: <BadgeCheck className="size-full p-3 object-cover" />
  },
  {
    title: "Free ",
    description:
      "Access our revolutionary service at no cost. Experience the future of PC building without financial barriers.",
    icon: <Receipt className="size-full p-3 object-cover" />
  },
];

export const Features = () => {
  return (
    <div id="features"  className="bg-black text-white py-[72px] sm:py-24 flex">
      <div className="container">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
        Revolutionize Your Experience
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center mt-5 text-xl text-white/70">
          Discover the cutting-edge advantages of our platform and see why we’re the talk of the tech world
          </p>
        </div>
        <div className="mt-16 flex flex-col sm:flex-row justify-center gap-4">
          {features.map(({ title, description, icon }) => (
            <div
              key={title}
              className="border border-white/30 px-5 py-14 text-center rounded-xl sm:flex-1"
            >
              <div className="inline-flex w-14 h-14 bg-white text-black justify-center rounded-lg">
                {icon}
              </div>
              <h3 className="mt-6 font-bold">{title}</h3>
              <p className="mt-2 text-white/80">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
