"use client"
import React, { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
const cases = [
  {
    srNo: 1,
    caseNumber: "W.P.No.35822/2015",
    lawyerName: "Sohel",
    dateOfFiling: "20/04/2022",
    departmentName: "Zonal Officer Shankarpally",
    nextHearingDate: "2023-06-13",
  },
  {
    srNo: 2,
    caseNumber: "W.P.No.35822/2015",
    lawyerName: "Sohel",
    dateOfFiling: "20/04/2022",
    departmentName: "Zonal Officer Shankarpally",
    nextHearingDate: "2022-08-03",
  },
  {
    srNo: 3,
    caseNumber: "W.P.No.35822/2015",
    lawyerName: "Sohel",
    dateOfFiling: "20/04/2022",
    departmentName: "Zonal Officer Shankarpally",
    nextHearingDate: "",
  },
  {
    srNo: 4,
    caseNumber: "W.P.No.35822/2015",
    lawyerName: "Sohel",
    dateOfFiling: "20/04/2022",
    departmentName: "Zonal Officer Shankarpally",
    nextHearingDate: "",
  },
];
const showHistory = [
  {
    srNo: 1,
    caseNumber: "W.P.No.35822/2015",
    datePosted: "2023-06-13",
    documentsRequested: "Agreement copy",
    documentsSubmitted: "Agreement copy on land document",
    arguments: "",
    status: "--Select Status--",
  },
  {
    srNo: 2,
    caseNumber: "W.P.No.35822/2015",
    datePosted: "2022-08-03",
    documentsRequested: "test",
    documentsSubmitted: "test",
    arguments: "",
    status: "--Select Status--",
  },
  {
    srNo: 3,
    caseNumber: "W.P.No.35822/2015",
    datePosted: "",
    documentsRequested: "",
    documentsSubmitted: "",
    arguments: "",
    status: "--Select Status--",
  },
  {
    srNo: 4,
    caseNumber: "W.P.No.35822/2015",
    datePosted: "",
    documentsRequested: "",
    documentsSubmitted: "",
    arguments: "",
    status: "--Select Status--",
  },
];
const CaseHistory = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const [history,setHistory]=useState('');
  const handleSelectChange = (event) => {
    setSelectedValue(event);
    
  };
  const handleShowHistory=(event)=>{
    console.log("Button Clicked")
    setHistory(event);
  }
  
  return (
    <div>
      <h1 style={{fontWeight:'bold',justifyContent:'center', backgroundColor:'lightgoldenrodyellow',textAlign:'center',height:'25%'}}>Case History</h1>
      <div>
        <p>Case Number</p>
        <Select onValueChange={handleSelectChange} >
      <SelectTrigger className="w-[180px] rounded-md border border-gray-300 bg-white">
        <SelectValue placeholder="--Select case--" />
      </SelectTrigger>
      <SelectContent >
        <SelectGroup>
          <SelectItem value="W.P.No.35822/2015">W.P.No.35822/2015</SelectItem>
          <SelectItem value="WP.No.15816/2016">WP.No.15816/2016</SelectItem>
          <SelectItem value="WP NO:24981/2017">WP NO:24981/2017</SelectItem>
          <SelectItem value="WP 2571/16">WP 2571/16</SelectItem>
          <SelectItem value="WP. No * 0.23943 / 2016">WP. No * 0.23943 / 2016</SelectItem>
          <SelectItem value="6578">6578</SelectItem>
          <SelectItem value="r-09876">r-09876</SelectItem>
          <SelectItem value="987654321">987654321</SelectItem>
          <SelectItem value="WP-2789/36">WP-2789/36</SelectItem>
          <SelectItem value="WP-3454/56">WP-3454/56</SelectItem>
          <SelectItem value="WP-675/453">WP-675/453</SelectItem>
          <SelectItem value="WP-6789/3454">WP-6789/3454</SelectItem>
          <SelectItem value="WP-5674">WP-5674</SelectItem>
          <SelectItem value="WP-46">WP-46</SelectItem>
          <SelectItem value="wp-47">wp-47</SelectItem>
          <SelectItem value="WP-23234">WP-23234</SelectItem>
          <SelectItem value="Wp-3434">Wp-3434</SelectItem>
          <SelectItem value="wp-44">wp-44</SelectItem>
          <SelectItem value="WP-55">WP-55</SelectItem>
          <SelectItem value="WP-676">WP-676</SelectItem>
          <SelectItem value="WP-4545">WP-4545</SelectItem>
          <SelectItem value="WP 34353">WP 34353</SelectItem>
          <SelectItem value="WP-04054">WP-04054</SelectItem>
          <SelectItem value="WP-454/34">WP-454/34</SelectItem>
          <SelectItem value="WP-4033">WP-4033</SelectItem>
          <SelectItem value="WP-67898">WP-67898</SelectItem>
          <SelectItem value="WU-3543">WU-3543</SelectItem>
          <SelectItem value="WE-33">WE-33</SelectItem>
          <SelectItem value="WC-3090">WC-3090</SelectItem>
          <SelectItem value="wp-409">wp-409</SelectItem>
          <SelectItem value="WP-43544">WP-43544</SelectItem>
          <SelectItem value="WP_340">WP_340</SelectItem>
          <SelectItem value="WP-0340">WP-0340</SelectItem>
          <SelectItem value="WP-23456">WP-23456</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    
      </div>
      <div>
        {selectedValue&& <div>
          <Table className="mt-5">
      <TableHeader>
        <TableRow>
          <TableHead>Sr No</TableHead>
          <TableHead>Case Number</TableHead>
          <TableHead>Laywer Name</TableHead>
          <TableHead>Date of Filing</TableHead>
          <TableHead>Department Name</TableHead>
          <TableHead>Next Hearing Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {cases.map((caseItem) => (
          <TableRow key={caseItem.srNo}>
            <TableCell>{caseItem.srNo}</TableCell>
            <TableCell>{caseItem.caseNumber}</TableCell>
            <TableCell>{caseItem.lawyerName}</TableCell>
            <TableCell>{caseItem.dateOfFiling}</TableCell>
            <TableCell>{caseItem.departmentName}</TableCell>
            <TableCell>{caseItem.nextHearingDate || "-"}</TableCell>
            <TableCell>
              <Button variant="secondary" value={caseItem.srNo} onClick={handleShowHistory}>Show History</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
          </div>}
          {history&&<div>
            <Table className="mt-5">
      <TableHeader>
        <TableRow>
          <TableHead>Sr No</TableHead>
          <TableHead>Case Number</TableHead>
          <TableHead>Date posted</TableHead>
          <TableHead>Documents requested</TableHead>
          <TableHead>Documents submitted</TableHead>
          <TableHead>Arguments</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Actions</TableHead> {/* New column for actions */}
        </TableRow>
      </TableHeader>
      <TableBody>
        {cases.map((caseItem) => (
          <TableRow key={caseItem.srNo}>
            <TableCell>{caseItem.srNo}</TableCell>
            <TableCell>{caseItem.caseNumber}</TableCell>
            <TableCell>{caseItem.datePosted || "-"}</TableCell>
            <TableCell>{caseItem.documentsRequested || "-"}</TableCell>
            <TableCell>{caseItem.documentsSubmitted || "-"}</TableCell>
            <TableCell>{caseItem.arguments || "-"}</TableCell>
            <TableCell>{caseItem.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
            </div>}
      </div>
    </div>
  )
}

export default CaseHistory