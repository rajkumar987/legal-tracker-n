'use client';
import React from "react";
import DataTable from "@/components/data-table";
import { ReportData } from "@/constants/dashboard-data";


const columns = [
  {
    accessorKey: "id",
    header: "Sr No",
  },
  {
    accessorKey: "case_number",
    header: "Notice Number",
  },
  {
    accessorKey: "department",
    header: "Department Name",
  },
  {
    accessorKey: "advocate",
    header: "To Whom",
  },
  {
    accessorKey: "date_of_filing",
    header: "Date Of Filing",
  },
  {
    header:"Notice Copy",
    id: "notice_copy",
    cell: ({ row }) => {
      // Render whatever content you want here
      return (
        <a href="link/to/jpeg/file" target="_blank" rel="noopener noreferrer">View Notice</a>
      );
    },
  }
];

const IRNL = () => {
  return (
  <div>
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-4">List Of Notice Issued</h1>
    <DataTable columns={columns} data={ReportData} />:
  </div>

  <div className="container mx-auto px-4 py-8">
  <h1 className="text-3xl font-bold mb-4">Reply Recived For Notice</h1>
  <DataTable columns={columns} data={ReportData.slice(0,3)} />:
  </div>
  </div>
);
};

export default IRNL;
