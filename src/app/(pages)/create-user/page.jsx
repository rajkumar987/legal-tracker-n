"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Departments, Designations } from "@/constants/dashboard-data";

const page = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Add User</h1>
      <Card>
        <CardContent className="p-10">
          <form onSubmit={handleSubmit}>
            <section className="form-fields-user">
              <span className="flex  gap-3">
                <Label className="text-sm text-gray-600 text-nowrap">
                  Username
                  <span className="text-red-500 text-lg ml-0.5">*</span>
                </Label>
                <Input placeholder="Username" />
              </span>
              <span className="flex  gap-3">
                <Label className="text-sm text-gray-600 text-nowrap">
                  Email
                  <span className="text-red-500 text-lg ml-0.5">*</span>
                </Label>
                <Input placeholder="Email" />
              </span>
              <span className="flex  gap-3">
                <Label className="text-sm text-gray-600 text-nowrap">
                  Mobile Number
                  <span className="text-red-500 text-lg ml-0.5">*</span>
                </Label>
                <Input placeholder="Mobile Number" />
              </span>
              <span className="flex  gap-3">
                <Label className="text-sm text-gray-600 text-nowrap">
                  Designation
                  <span className="text-red-500 text-lg ml-0.5">*</span>
                </Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel className="text-gray-500 font-normal">
                        Select
                      </SelectLabel>
                      {Designations.map((role) => (
                        <SelectLabel value={role.value} key={role.value}>
                          {role.name}
                        </SelectLabel>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </span>
              <span className="flex  gap-3">
                <Label className="text-sm text-gray-600 text-nowrap">
                  Dapartment
                  <span className="text-red-500 text-lg ml-0.5">*</span>
                </Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel className="text-gray-500 font-normal">
                        Select
                      </SelectLabel>
                      {Departments.map((department) => (
                        <SelectLabel
                          value={department.value}
                          key={department.value}
                        >
                          {department.name}
                        </SelectLabel>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </span>
              <span className="flex  gap-3">
                <Label className="text-sm text-gray-600 text-nowrap">
                  Is Active
                  <span className="text-red-500 text-lg ml-0.5">*</span>
                </Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel className="text-gray-500 font-normal">
                        Select
                      </SelectLabel>
                      <SelectItem value="true">True</SelectItem>
                      <SelectItem value="false">False</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </span>
            </section>
            <div className="flex justify-end">
              <Button>Submit</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
