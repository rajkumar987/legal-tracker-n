"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CaseTypes } from "@/constants/dashboard-data";

import { z } from "zod";
import { toast } from "react-toastify";
import ViewCaseTable from "@/components/view-case-table";
import axios from "axios";

const CaseSchema = z.object({
  case_type: z.string().min(2),
  case_number: z.string().min(1),
  case_year: z.string().min(4),
});

const CaseHistory = () => {
  const [caseInput, setCaseInput] = useState({
    case_type: "WP",
    case_number: "",
    case_year: "",
  });
  const [history, setHistory] = useState(null);

  const handleSelect = (e) => {
    setCaseInput({ ...caseInput, case_type: e.target.value });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCaseInput({ ...caseInput, [name]: value });
  };

  const handleShowHistory = () => {
    const validation = CaseSchema.safeParse(caseInput);
    if (!validation.success) {
      toast.error("Please Fill all the fields");
      return;
    }
    const joinedValues = `${caseInput.case_type}/${caseInput.case_number}/${caseInput.case_year}`;
    axios
      .get(`/api/cause?casedet=${joinedValues}`)
      .then((res) => {
        setHistory(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Case History</h1>
      <div className="form-fields">
        <span className="flex flex-col gap-1">
          <Label className="text-gray-500 text-xs">Select Case Type</Label>
          <select
            className="border p-2 rounded-md text-sm outline-none"
            onChange={handleSelect}
            value={caseInput.case_type}
          >
            <option value="" selected>
              Select
            </option>
            {CaseTypes.map((casetype) => (
              <option value={casetype.value} key={casetype.value}>
                {casetype.name}
              </option>
            ))}
          </select>
        </span>
        <span>
          <Label className="text-gray-500 text-xs">Case Number</Label>
          <Input
            placeholder="Case Number"
            name="case_number"
            onChange={handleChange}
            value={caseInput.case_number}
          />
        </span>
        <span>
          <Label className="text-gray-500 text-xs">Case Year</Label>
          <Input
            placeholder="Year"
            type="number"
            onChange={handleChange}
            name="case_year"
            value={caseInput.case_year}
          />
        </span>
        <Button onClick={handleShowHistory}>Submit</Button>
      </div>
      <section className="m-5">
        {history?.map((each, idx) => {
          return <ViewCaseTable key={idx} data={each} />;
        })}
      </section>
    </div>
  );
};

export default CaseHistory;
