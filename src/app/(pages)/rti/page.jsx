"use client"
import { useState } from 'react';
import {Card} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {  Departments } from "@/constants/dashboard-data";
export default function RTIForm() {
  const [form, setForm] = useState({
    queryDetails: '',
    receivedFrom: '',
    applicationDate: '',
    departmentName: '',
    requestCopy: null,
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setForm({
      ...form,
      requestCopy: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here...
  };

  return (
    <Card className="p-6">
    <Form {...form}>
    <form onSubmit={handleSubmit} className="space-y-4 m-6">
      <div className="flex  w-full space-y-2 space-x-2">
      <div className="flex flex-col w-1/3 space-y-2">
      <Label htmlFor="email">RTI Query Detail</Label>
      <Textarea />
      </div>
      <div className="flex flex-col w-1/3 space-y-2">
      <Label htmlFor="email">RTI Received From</Label>
       <Input/>
      </div>
      <div className="flex flex-col w-1/3 space-y-2">
      <Label htmlFor="email"> Date of Application Received</Label>
        <input type="date" name="applicationDate" value={form.applicationDate} onChange={handleChange} className="border border-gray-300 rounded px-2 py-1" />
      </div>
      </div>
      <div className="flex w-full space-y-2 space-x-2 ">
      <div className="flex flex-col  w-1/2 space-y-2">
        <label htmlFor="departmentName" className="text-sm font-medium text-gray-700">
          Name Of the Department
        </label>
        <Select >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a department</SelectLabel>

                      {Departments.map((department) => (
                        <SelectItem
                          value={department.value}
                          key={department.value}
                        >
                          {department.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
      </div>
      <div className="flex flex-col w-1/2 space-y-2">
        <label htmlFor="requestCopy" className="text-sm font-medium text-gray-700">
          RTI Request Copy
        </label>
        <Input type = "file"/>
      </div >
      </div>
      <div className="flex items-center justify-center space-y-2">
      <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Submit</button>
      </div>
    </form>
    </Form>
    </Card>
  );
}
