import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import IRNL from "./IRNL/page";
import RRNL from "./RRNL/page";

const NoticeHistory = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="flex ">
        <Tabs defaultValue="ir" className="w-[30vw]">
          <TabsList className=" grid grid-cols-2">
            <TabsTrigger value="ir">Issued Notices</TabsTrigger>
            <TabsTrigger value="rr">Received Notices</TabsTrigger>
          </TabsList>
          <TabsContent value="ir" className="w-[90vw]">
            <IRNL />
          </TabsContent>
          <TabsContent value="rr">
            <RRNL />
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
};

export default NoticeHistory;
