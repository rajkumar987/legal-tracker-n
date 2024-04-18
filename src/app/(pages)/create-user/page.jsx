'use client'
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import './style.css'; // Import your CSS file where you define styles
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
// import dynamic from 'next/dynamic';
// const DynamicButton = dynamic(() => import('@/components/ui/button')); // Import your button component dynamically

const MyFormComponent = () => {
  const handleClick = () => {
    alert("User Created!");
  };
  return (
    <Card>
      {/* <CardHeader className="custom-card-header">
        <CardTitle>Create User</CardTitle>
       
      </CardHeader> */}
      <CardContent>
        <form>
        <div className="grid grid-cols-2 gap-4">
        <div>
            <Label htmlFor="username">User Name</Label>
            <Input type="text" id="username" placeholder="User Name" />
        </div>
        <div >
            <Label htmlFor="dept">Department</Label>
            <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="-- Select Department --" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="Budha purnima project">Budha purnima project</SelectItem>
          <SelectItem value="Outer ring road project">Outer ring road project</SelectItem>
          <SelectItem value="ESTATE MANAGEMENT UNIT">ESTATE MANAGEMENT UNIT</SelectItem>
          <SelectItem value="ESTABLISHMENT">ESTABLISHMENT</SelectItem>
          <SelectItem value="VIGILLANCE">VIGILLANCE</SelectItem>
          <SelectItem value="LAO HMDA">LAO HMDA</SelectItem>
          <SelectItem value="ORRP (R & R)">ORRP (R & R)</SelectItem>
          <SelectItem value="CGMHCL">CGMHCL</SelectItem>
          <SelectItem value="HGCL DGM-III">HGCL DGM-III</SelectItem>
          <SelectItem value="SHAMSHABAD ZONAL OFFICE">SHAMSHABAD ZONAL OFFICE</SelectItem>
          <SelectItem value="MEDCHAL ZONE">MEDCHAL ZONE</SelectItem>
          <SelectItem value="JAWAHARNAGAR VILLAGE">JAWAHARNAGAR VILLAGE</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
        </div>
        
        <div >
            <Label htmlFor="email">Designation</Label>
            <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="-- Select Designation --" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="Hod">Hod</SelectItem>
          <SelectItem value="Adv">Adv</SelectItem>
          <SelectItem value="Leagalcell">Leagalcell</SelectItem>
          <SelectItem value="Admin">Admin</SelectItem>
          <SelectItem value="Account">Account</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
        </div>
        <div >
            <Label htmlFor="number">Mobile Number</Label>
            <Input type="Number" id="number" placeholder="Mobile Number" />
        </div>
        <div >
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
        </div>
        </div>
          {/* Add more fields as needed */}
           {/* <DynamicButton type="button" onClick={handleClick}>Submit</DynamicButton> */}
        </form>
        <br></br>
        <button type="submit" onClick={handleClick} className="blue-button">Submit</button>
      </CardContent>
      
    </Card>
  );
};

export default MyFormComponent;
