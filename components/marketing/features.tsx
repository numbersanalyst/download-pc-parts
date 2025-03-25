import { Leaf } from "lucide-react";

const features = [
  {
    title: "Eco friendly",
    description:
      "Enhance your productivity by connecting with your tools, keeping your essentials in one place.",
  },
  {
    title: "Safety and open-source",
    description:
      "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
  },
  {
    title: "Free ",
    description:
      "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
  },
];

export const Features = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24 flex">
      <div className="container">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
        Something about our product
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center mt-5 text-xl text-white/70">
          See the key benefits of using our solution
          </p>
        </div>
        <div className="mt-16 flex flex-col sm:flex-row justify-center gap-4">
          {features.map(({ title, description }) => (
            <div
              key={title}
              className="border border-white/30 px-5 py-14 text-center rounded-xl sm:flex-1"
            >
              <div className="inline-flex w-14 h-14 bg-white text-black justify-center rounded-lg">
                <Leaf className="size-full p-3 object-cover" />
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
