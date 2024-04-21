"use client";
import React, { useState } from "react";
import DataTable from "@/components/data-table";
import {
  Advocates,
  CourtNames,
  DepartmentSpecifics,
  ReportData,
  CaseTypes,
} from "@/constants/dashboard-data";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const columns = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "case_number",
    header: "Case Number",
  },
  {
    accessorKey: "court_name",
    header: "Court",
  },
  {
    accessorKey: "advocate",
    header: "Lawyer Name",
  },
  {
    accessorKey: "date_of_filing",
    header: "Date Of Filing",
  },
  {
    accessorKey: "department",
    header: "Department Specific",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
];

const Reports = () => {
  const [selectedCourt, setSelectedCourt] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedLawyer, setSelectedLawyer] = useState("");
  const [selectedCaseType, setSelectedCaseType] = useState("");

  const handleCourtChange = (e) => {
    setSelectedCourt(e.split("_").join(" "));
  };

  const handleDepartmentChange = (e) => {
    setSelectedDepartment(e);
  };

  const handleLawyerChange = (e) => {
    setSelectedLawyer(e);
  };

  const handleCaseTypeChange = (e) => {
    setSelectedCaseType(e);
  };

  const filteredData = ReportData.filter((item) => {
    return (
      (selectedCourt === "" ||
        item.court_name.toLowerCase() == selectedCourt) &&
      (selectedDepartment === "" || item.department === selectedDepartment) &&
      (selectedLawyer === "" || item.advocate === selectedLawyer) &&
      (selectedCaseType === "" || item.case_number.startsWith(selectedCaseType))
    );
  });
  const clearFilters = () => {
    setSelectedCourt("");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Report Search</h1>
      <div className="flex gap-4 mb-5">
        <Select onValueChange={handleCourtChange} defaultValue={selectedCourt}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a status" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select a court</SelectLabel>

              {CourtNames.map((each) => (
                <SelectItem key={each.label} value={each.label}>
                  {each.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select onValueChange={handleDepartmentChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a department" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select Department</SelectLabel>

              {DepartmentSpecifics.map((each) => (
                <SelectItem key={each.value} value={each.value}>
                  {each.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select onValueChange={handleLawyerChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a advocate" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select Advocates</SelectLabel>

              {Advocates.map((each) => (
                <SelectItem key={each.value} value={each.value}>
                  {each.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select onValueChange={handleCaseTypeChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select case type" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select Type Of Case</SelectLabel>

              {CaseTypes.map((each) => (
                <SelectItem key={each.value} value={each.value}>
                  {each.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button variant="outline" onClick={clearFilters}>
          Reset
        </Button>
      </div>
      <DataTable columns={columns} data={filteredData} />
    </div>
  );
};

export default Reports;
