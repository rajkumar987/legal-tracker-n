import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Departments, LegalSections } from "@/constants/dashboard-data";

const RTIForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Card className="w-[80vw]">
      <CardHeader>
        <CardTitle>Online RTI Request Form</CardTitle>
        <CardDescription>
          Enter Email,Mobile that are used to file RTI request/appeal
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-3" onSubmit={handleSubmit}>
          <Card>
            <CardDescription className="p-3">
              Department/Section Details
            </CardDescription>
            <CardContent className="grid md:grid-cols-2 gap-2">
              <span className="flex flex-col sm:flex-row  gap-3">
                <Label className="text-sm text-gray-600 text-nowrap">
                  Select Department/Section
                  <span className="text-red-500 text-lg ml-0.5">*</span>
                </Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Status</SelectLabel>
                      {LegalSections.map((each) => (
                        <SelectLabel value={each.value} key={each.value}>
                          {each.name}
                        </SelectLabel>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </span>
              {/* <span className="flex gap-3">
                <Label className="text-sm text-gray-600 text-nowrap">
                  Select Public Authority
                  <span className="text-red-500 text-lg ml-0.5">*</span>
                </Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Status</SelectLabel>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </span> */}
            </CardContent>
          </Card>
          <Card>
            <CardDescription className="p-3">Personal Details</CardDescription>
            <CardContent className="form-fields-rti">
              <span className="flex  gap-3">
                <Label className="text-sm text-gray-600 text-nowrap">
                  Email
                  <span className="text-red-500 text-lg ml-0.5">*</span>
                </Label>
                <Input placeholder="Email Address" />
              </span>
              <span className="flex  gap-3">
                <Label className="text-sm text-gray-600 text-nowrap">
                  Confirm Email
                  <span className="text-red-500 text-lg ml-0.5">*</span>
                </Label>
                <Input placeholder="Confirm Email Address" />
              </span>
              <span className="flex  gap-3">
                <Label className="text-sm text-gray-600 text-nowrap">
                  Mobile
                  <span className="text-red-500 text-lg ml-0.5">*</span>
                </Label>
                <Input placeholder="Mobile" />
              </span>
              <span className="flex  gap-3">
                <Label className="text-sm text-gray-600 text-nowrap">
                  Name
                  <span className="text-red-500 text-lg ml-0.5">*</span>
                </Label>
                <Input placeholder="Name" />
              </span>
              <span className="flex  gap-3">
                <Label className="text-sm text-gray-600 text-nowrap">
                  Gender
                  <span className="text-red-500 text-lg ml-0.5">*</span>
                </Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Status</SelectLabel>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </span>
              <span className="flex  gap-3">
                <Label className="text-sm text-gray-600 text-nowrap">
                  Address
                  <span className="text-red-500 text-lg ml-0.5">*</span>
                </Label>
                <Textarea placeholder="Address" />
              </span>
              <span className="flex  gap-3">
                <Label className="text-sm text-gray-600 text-nowrap">
                  State
                  <span className="text-red-500 text-lg ml-0.5">*</span>
                </Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a option</SelectLabel>
                      <SelectItem value="disclosed">Disclosed</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </span>
              <span className="flex  gap-3">
                <Label className="text-sm text-gray-600 text-nowrap">
                  Status
                  <span className="text-red-500 text-lg ml-0.5">*</span>
                </Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Status</SelectLabel>
                      <SelectItem value="rural">Rural</SelectItem>
                      <SelectItem value="urban">Urban</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </span>
              <span className="flex  gap-3">
                <Label className="text-sm text-gray-600 text-nowrap">
                  Educational Status
                  <span className="text-red-500 text-lg ml-0.5">*</span>
                </Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Status</SelectLabel>
                      <SelectItem value="literate">Literate</SelectItem>
                      <SelectItem value="illiterate">Illiterate</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </span>
            </CardContent>
          </Card>
          <Card>
            <CardDescription className="p-3">Request Details</CardDescription>
            <CardContent className="form-fields-rti">
              <span className="flex  gap-3">
                <Label className="text-sm text-gray-600 text-nowrap">
                  Citizenship
                  <span className="text-red-500 text-lg ml-0.5">*</span>
                </Label>
                <Select defaultValue="indian">
                  <SelectTrigger>
                    <SelectValue placeholder="Select a option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select</SelectLabel>
                      <SelectItem value="indian">Indian</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </span>
              <span className="flex  gap-3">
                <Label className="text-sm text-gray-600 text-nowrap">
                  Is the Applicant below poverty line ?
                  <span className="text-red-500 text-lg ml-0.5">*</span>
                </Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select</SelectLabel>
                      <SelectItem value="yes">Yes</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </span>
              <span className="flex  gap-3">
                <Label className="text-sm text-gray-600 text-nowrap">
                  Text for RTI application
                  <span className="text-red-500 text-lg ml-0.5">*</span>
                </Label>
                <Textarea />
              </span>
              <span className="flex  gap-3">
                <Label className="text-sm text-gray-600 text-nowrap">
                  Supporting Document
                </Label>
                <Input type="file" />
              </span>
            </CardContent>
          </Card>
          <div className="flex justify-end">
            <Button>Submit</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default RTIForm;
