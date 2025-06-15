import { TestimonialsSection } from "@/components/testimonials-with-marquee";
import mausaaAvatar from "@/public/avatars/mausaa.webp";
import mareczekAvatar from "@/public/avatars/mareczek.webp";
import xdAvatar from "@/public/avatars/xd.webp";
import sikalafoAvatar from "@/public/avatars/sikalafo.webp";

const testimonials = [
  {
    author: {
      name: "mausaa",
      handle: "@mausaa",
      avatar: mausaaAvatar,
    },
    text: "Before I downloaded the parts from this site, I had no idea what to do — my computer was a total potato. Now I can chill and grind games without limits. Cheers!",
  },
  {
    author: {
      name: "Mareczek",
      handle: "@mareczekkk",
      avatar: mareczekAvatar,
    },
    text: "Thanks to this app, I no longer wonder where to look for PC parts. I just download them 😍",
    href: "https://www.marektoja.pl/",
  },
  {
    author: {
      name: "xd",
      handle: "@0x1057",
      avatar: xdAvatar,
    },
    text: "Awesome site, it helped me throught the worst situations in my life and relieved all my traumas. In school my friends were laughing at me that I had very bad pc but after using this site I've made them jealous that I'm using brand new cpu.",
  },
  {
    author: {
      name: "Sikalafo&",
      handle: "@sikalafo",
      avatar: sikalafoAvatar,
    },
    text: "Thanks to this website, my friends finally don't laugh at me anymore! I have the best RTX card and AMD processor on Earth! Thank you 🤝",
    href: "https://www.youtube.com/channel/UCuwT-3ardYPIh8Y2K6Lod9w",
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
