import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bot, ListOrdered } from "lucide-react";

function InstallationOptions() {
  return (
    <Tabs defaultValue="tab-1">
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
      <TabsContent value="tab-1">
        <p className="p-4 pt-1 text-center text-xs text-muted-foreground">Content for Tab 1</p>
      </TabsContent>
      <TabsContent value="tab-2">
        <p className="p-4 pt-1 text-center text-xs text-muted-foreground">Content for Tab 2</p>
      </TabsContent>
    </Tabs>
  );
}

export { InstallationOptions };
