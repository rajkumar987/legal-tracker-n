"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RTIForm from "@/components/rti-form";
import RTIView from "@/components/rti-view";

export default function page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="flex ">
        <Tabs defaultValue="view" className="w-[30vw]">
          <TabsList className=" grid grid-cols-2">
            <TabsTrigger value="view">View Request</TabsTrigger>
            <TabsTrigger value="submit">Submit Request</TabsTrigger>
          </TabsList>
          <TabsContent value="submit">
            <RTIForm />
          </TabsContent>
          <TabsContent value="view">
            <RTIView />
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}
