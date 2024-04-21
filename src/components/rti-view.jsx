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

const RTIView = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>Online RTI Status Form</CardTitle>
        <CardDescription>
          Enter Email,Mobile that are used to file RTI request/appeal
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-3" onSubmit={handleSubmit}>
          <span className="flex items-center gap-3">
            <Label className="text-sm text-gray-600">Email </Label>
            <Input placeholder="Email Address" />
          </span>
          <span className="flex items-center gap-3">
            <Label className="text-sm text-gray-600">Mobile </Label>
            <Input placeholder="Email Address" />
          </span>
          <Button className="w-full">Submit</Button>
        </form>
      </CardContent>
      {/* <CardFooter>
        <p>Card Footer</p>
      </CardFooter> */}
    </Card>
  );
};

export default RTIView;
