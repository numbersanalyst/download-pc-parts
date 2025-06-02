import { TestimonialsSection } from "@/components/testimonials-with-marquee";

const testimonials = [
  {
    author: {
      name: "mausaa",
      handle: "@mausaa",
      avatar:
        "https://cdn.discordapp.com/avatars/458689749197258752/f36e1fe3a1c1d221c149fc0dcf3b1e21.webp?size=128",
    },
    text: "Before I downloaded the parts from this site, I had no idea what to do — my computer was a total potato. Now I can chill and grind games without limits. Cheers!",
  },
  {
    author: {
      name: "Mareczek",
      handle: "@mareczekkk",
      avatar:
        "https://cdn.discordapp.com/avatars/725240640203391066/6beaae2155432e74277a96c24bd9d93f.webp?size=128",
    },
    text: "Thanks to this app, I no longer wonder where to look for PC parts. I just download them 😍",
  },
  {
    author: {
      name: "xd",
      handle: "@0x1057",
      avatar:
        "https://cdn.discordapp.com/avatars/1369687334534254692/df4cbd96ce9a77b01cd3967f12af79c6.webp?size=128",
    },
    text: "Awesome site, it helped me throught the worst situations in my life and relieved all my traumas. In school my friends were laughing at me that I had very bad pc but after using this site I've made them jealous that I'm using brand new cpu.",
  },
  {
    author: {
      name: "Sikalafo&",
      handle: "@sikalafo",
      avatar:
        "https://cdn.discordapp.com/avatars/366849802048241664/c4a7050f7c1af69f292893e22f0e813a.webp?size=128",
    },
    text: "Thanks to this website, my friends finally don't laugh at me anymore! I have the best RTX card and AMD processor on Earth! Thank you 🤝",
  },
];

export function Testimonials() {
  return (
    <TestimonialsSection
      title="Trusted by peoples worldwide"
      description="Join thousands of happy people who are already building the future PC with our platform"
      testimonials={testimonials}
    />
  );
}
