import { cn } from "@/lib/utils"
import { Avatar } from "@/components/ui/avatar"
import Image from "next/image"
import { StaticImageData } from "next/image"

export interface TestimonialAuthor {
  name: string
  handle: string
  avatar: StaticImageData
}

export interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  href?: string
  className?: string
}

export function TestimonialCard({ 
  author,
  text,
  href,
  className
}: TestimonialCardProps) {
  const Card = href ? 'a' : 'div'
  
  return (
    <Card
      {...(href ? { href, target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "flex flex-col rounded-lg border-t",
        "bg-gradient-to-b from-muted/50 to-muted/10",
        "p-4 text-start sm:p-6",
        "hover:from-muted/60 hover:to-muted/20",
        "max-w-[320px] sm:max-w-[320px]",
        "transition-colors duration-300 h-fit",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <Avatar className="h-12 w-12">
          <Image
            src={author.avatar}
            alt={author.name}
            className="aspect-square h-full w-full"
            width={48}
            height={48}
          />
        </Avatar>
        <div className="flex flex-col items-start">
          <h3 className="text-md font-semibold leading-none">
            {author.name}
          </h3>
          <p className="text-sm text-muted-foreground">
            {author.handle}
          </p>
        </div>
      </div>
      <p className="mt-4 text-muted-foreground">
        {text}
      </p>
    </Card>
  )
}