"use client";
import AddCaseForm from "@/components/add-case-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ViewCaseTable from "@/components/view-case-table";
import axios from "axios";
import React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

const page = () => {
  const [caseNumber, setCaseNumber] = React.useState("");
  const [data, setData] = React.useState([]);
  const handleClick = async () => {
    axios
      .get(`/api/cause?casedet=${caseNumber}`)
      .then((res) => {
        setData(res.data.result);
      })
      .catch((err) => {})
      .finally(() => {});
  };

  return (
    <ResizablePanelGroup direction="horizontal" className="border ">
      <ResizablePanel defaultSize={60}>
        <section className="max-h-[93vh] overflow-auto">
          <AddCaseForm />
        </section>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel>
        <div className="max-h-[93vh] overflow-y-auto">
          <div className="p-4 space-y-2">
            <Label>Input Case Number</Label>
            <div className="flex gap-2">
              <Input
                placeholder="case number"
                value={caseNumber}
                onChange={(e) => setCaseNumber(e.target.value)}
              />
              <Button onClick={handleClick} disabled={caseNumber.length === 0}>
                Submit
              </Button>
            </div>
          </div>
          {data.map((each, idx) => {
            return <ViewCaseTable key={idx} data={each} />;
          })}
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default page;
