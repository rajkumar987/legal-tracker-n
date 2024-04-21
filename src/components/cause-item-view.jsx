import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { EyeOpenIcon } from "@radix-ui/react-icons";
import axios from "axios";
import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";
import ViewCaseTable from "./view-case-table";

export const LoadingSpinner = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("animate-spin", className)}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );
};

export default function CauseView({ row }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getData() {
      setLoading(true);
      axios
        .get(`/api/cause?casedet=${row?.original.case_number}`)
        .then((res) => {
          setData(res.data.result);
        })
        .catch((err) => {})
        .finally(() => {
          setLoading(false);
        });
    }
    getData();
  }, [row]);
  return (
    <Sheet key="right">
      <SheetTrigger className="text-sm px-2 flex gap-2 items-center py-2">
        <EyeOpenIcon className="h-4 w-4" />
        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap text-sm">
          View Case
        </span>
      </SheetTrigger>
      <SheetContent side="right" className="overflow-auto">
        <SheetHeader>
          <SheetTitle>View Cause list {row?.original.case_number}</SheetTitle>
        </SheetHeader>
        {loading && (
          <div className=" flex justify-center h-full items-center">
            <span class="animate-ping  inline-flex h-24 w-24 rounded-full bg-black opacity-75 "></span>
          </div>
        )}
        {data.map((each, idx) => {
          return <ViewCaseTable key={idx} data={each} />;
        })}
      </SheetContent>
    </Sheet>
  );
}
