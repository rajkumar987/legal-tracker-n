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

import UpdateStatus from "@/components/update-status";
import CauseView from "@/components/cause-item-view";
import { CauseList } from "@/constants/dashboard-data";

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
    accessorKey: "pet_advocate",
    header: "Petitioner Advocate",
  },
  {
    accessorKey: "res_advoate",
    header: "Respondent Advocate",
  },
  {
    accessorKey: "district",
    header: "Location",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <span>Pending</span>,
  },

  {
    header: "Action",
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

            <DropdownMenuSeparator />
            <CauseView row={row} />
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
        <DataTable columns={columns} data={CauseList} addCase={true} />
      </section>
    </main>
  );
}
