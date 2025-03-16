import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bot, ListOrdered } from "lucide-react";
import { Step, Steps } from "./steps";
import { Terminal, Code, RotateCcw } from "lucide-react";
import { CodeBlock } from "@/components/ui/code-block";

function InstallationOptions() {
  return (
    <Tabs defaultValue="tab-1" className="text-center">
      <ScrollArea>
        <TabsList className="mb-3 gap-1 bg-transparent">
          <TabsTrigger
            value="tab-1"
            className="rounded-full px-5 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-none"
          >
            <Bot
              className="-ms-0.5 me-1.5 opacity-60"
              size={16}
              strokeWidth={2}
              aria-hidden="true"
            />
            Automatically
          </TabsTrigger>
          <TabsTrigger
            value="tab-2"
            className="rounded-full px-5 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-none"
          >
            <ListOrdered
              className="-ms-0.5 me-1.5 opacity-60"
              size={16}
              strokeWidth={2}
              aria-hidden="true"
            />
            Manual
          </TabsTrigger>
        </TabsList>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <TabsContent
        value="tab-1"
        className="text-start container max-w-2xl py-12"
      >
        <Steps>
          <Step
            title="Install the following dependencies:"
            icon={<Terminal className="h-5 w-5" />}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Dignissimos minima, temporibus recusandae eos omnis, architecto
              vero velit provident praesentium ab voluptatibus ea voluptates
              repellendus! Laudantium amet harum rerum culpa eum!
            </p>

            <CodeBlock
              language="bash"
              code={`npm install @/components/ui/button
npm install @/components/ui/card
npm install @/components/ui/input`}
            />
          </Step>
          <Step
            title="Copy and paste the following code:"
            icon={<Code className="h-5 w-5" />}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              autem, explicabo voluptas hic assumenda laudantium deleniti
              quisquam nam architecto eius voluptate velit temporibus optio
              ratione pariatur aperiam in, praesentium culpa.
            </p>

            <CodeBlock
              language="tsx"
              showLineNumbers={true}
              code={`import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function ExampleComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <Button>Button</Button>
      </CardFooter>
    </Card>
  )
}`}
            />
          </Step>
          <Step
            title="Restart your PC."
            icon={<RotateCcw className="h-5 w-5" />}
          />
        </Steps>
      </TabsContent>
      <TabsContent
        value="tab-2"
        className="text-start container max-w-2xl py-12"
      >
        <Steps>
          <Step
            title="Install the following dependencies:"
            icon={<Terminal className="h-5 w-5" />}
          >
            <p>Lorem ipsum dolor sit amet</p>
          </Step>
          <Step
            title="Copy and paste the following code:"
            icon={<Code className="h-5 w-5" />}
          >
            <p>Lorem ipsum dolor sit amet</p>
          </Step>
          <Step
            title="Restart your PC."
            icon={<RotateCcw className="h-5 w-5" />}
          />
        </Steps>
      </TabsContent>
    </Tabs>
  );
}

export { InstallationOptions };
