'use client';
import React,{useState} from "react";
import DataTable from "@/components/data-table";
import { Advocates, CourtNames,DepartmentSpecifics,ReportData, CaseTypes } from "@/constants/dashboard-data";

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
    accessorKey:'court_name',
    header:"Court"
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

  // const courts = ['Supereme Court', 'High Court', 'Lower Court', 'City Civil Court', 'Government Pleader',
  //                 'Lokayuktha', 'NGT', 'APIT','LGC','NCLT'];
  // const departments = ['BUDHA PURNIMA PROJECT','ESTATE MANAGEMENT UNIT(COMMERCIAL)R & DO','ESTABLISHMENT','VIGILLANCE'
  //                       ,'LAO HMDA','ORRP (R & R)','CGMHGCL','HGCL DGM-III','SHAMSHABAD ZONAL OFFICE (DIRECTIVE PLANNING-I)',
  //                     'MEDCHAL ZONE','JAWAHARNAGAR VILLAGE(EO LANDS)','CHIEF ENGINEER (DEVELOPMENT)','LEGAL CELL',
  //                   'Zonal Officer Shankarpally','Account','Head Office'];
  // const lawyers = ['Mohsin','Sohail','Y Rama','Narasimha','Ranjith','Government Pleader'];
  // const Cases = ['WP','CC','SLP','WA','WP(C)','WP(Criminal)','PIL','CRP','OS','CA','AS','WP(PIL)'];

  const [selectedCourt,   setSelectedCourt] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedLawyer, setSelectedLawyer] = useState("");
  const [selectedCaseType, setSelectedCaseType] = useState("");

  const handleCourtChange = (e) => {
    setSelectedCourt(e.target.value === "default" ? "" : e.target.value);
  };
  console.log(selectedCourt);

  const handleDepartmentChange = (e) => {
    setSelectedDepartment(e.target.value === "default" ? "" : e.target.value);
  };

  const handleLawyerChange = (e) => {
    setSelectedLawyer(e.target.value === "default" ? "" : e.target.value);
  };

  const handleCaseTypeChange = (e) => {
    setSelectedCaseType(e.target.value === "default" ? "" : e.target.value);
  };

  const filteredData = ReportData.filter((item) => {
    return (
      (selectedCourt === "" || item.court_name === selectedCourt) &&
      (selectedDepartment === "" || item.department === selectedDepartment) &&
      (selectedLawyer === "" || item.advocate === selectedLawyer) &&
      (selectedCaseType === "" || item.case_number.startsWith(selectedCaseType))
    );
  });
  


  
  const courtsOptions = CourtNames.map((court, index) => (
      <option key={index} value={court.label}>{court.name}</option>
  ));

  const departmentsOptions = DepartmentSpecifics.map((department,index)=>(
    <option key={index} value={department.label}>{department.name}</option>
  ));

  const lawyersOptions = Advocates.map((lawyer,index)=>(
    <option key={index} value={lawyer.label}>{lawyer.name}</option>
  ))

  const casesOptions = CaseTypes.map((Case,index)=>(
    <option key={index} value={Case.label}>{Case.name}</option>
  ))
                    
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Report Search</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          {/* <label htmlFor="courtName" className="block mb-1">Select Court Name:</label> */}
          <select id="courtName" className="w-full p-2 border border-gray-300 rounded-md text-center" onChange={handleCourtChange}>
            {/* Options for Court Name */}
            <option selected value={'default'} >-----------Select Court----------</option>
            {courtsOptions}
          </select>
        </div>
        <div>
          {/* <label htmlFor="department" className="block mb-1">Select Department:</label> */}
          <select id="department" className="w-full p-2 border border-gray-300 rounded-md text-center " onChange={handleDepartmentChange}>
            {/* Options for Department */}
            <option selected value={'default'} >-----------Select Department----------</option>
            {departmentsOptions}
          </select>
        </div>
        <div>
          {/* <label htmlFor="lawyer" className="block mb-1">Select Lawyer:</label> */}
          <select id="lawyer" className="w-full p-2 border border-gray-300 rounded-md text-center" onChange={handleLawyerChange}>
            {/* Options for Lawyer */}
            <option selected value={'default'}>-----------Select Lawyer----------</option>
            {lawyersOptions}
          </select>
        </div>
        <div>
          {/* <label htmlFor="typeOfCase" className="block mb-1">Select Type Of Case:</label> */}
          <select id="typeOfCase" className="w-full p-2 border border-gray-300 rounded-md text-center" onChange={handleCaseTypeChange}>
            {/* Options for Type Of Case */}
            <option selected value={'default'}>-----------Select Type Of Case----------</option>
            {casesOptions}
          </select>
        </div>
      </div>
      <DataTable columns={columns} data={filteredData} />:
    </div>
  );
};

export default Reports;
