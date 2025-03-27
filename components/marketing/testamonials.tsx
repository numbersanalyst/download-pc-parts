import { TestimonialsSection } from "@/components/testimonials-with-marquee";


const testimonials = [
  {
    author: {
      name: "Emma Thompson",
      handle: "@emmaai",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "I downloaded a new graphics card and now my games run at 254 FPS. Amazing!",
    href: "https://twitter.com/emmaai"
  },
  {
    author: {
      name: "David Park",
      handle: "@davidtech",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "This app is a game-changer. I can finally build a PC without touching a screwdriver. Or a PC.",
    href: "https://twitter.com/davidtech"
  },
  {
    author: {
      name: "Sofia Rodriguez",
      handle: "@sofiaml",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    text: "My new CPU runs on hopes and dreams. 10/10 would download again."
  }
]

export function Testimonials() {
  return (
    <TestimonialsSection
      title="Trusted by peoples worldwide"
      description="Join thousands of happy people who are already building the future PC with our platform"
      testimonials={testimonials}
    />
  )
}
