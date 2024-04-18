"use client";
import {
  DropdownMenu,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import DataTable from "@/components/data-table";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import StatsData from "@/components/stats-data";
import { data } from "@/constants/dashboard-data";
import UpdateStatus from "@/components/update-status";

const columns = [
  {
    header: "Sr.No",
    cell: ({ row }) => row.index + 1,
  },
  {
    accessorKey: "case_number",
    header: "Case Number",
  },
  {
    accessorKey: "case_type",
    header: "Case Type",
  },
  {
    accessorKey: "petitioner_advocate",
    header: "Petitioner Advocate",
  },
  {
    accessorKey: "respondent_advocate",
    header: "Respondent Advocate",
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "status",
    header: "Status",
  },

  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <UpdateStatus row={row} />
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export default function Dashboard() {
  return (
    <main className="p-5 bg-gray-200/50 space-y-5 ">
      <StatsData />
      <section>
        <DataTable columns={columns} data={data} />
      </section>
    </main>
  );
}
