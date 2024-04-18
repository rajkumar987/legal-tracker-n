import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const StatsData = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-4 ">
      <Card>
        <CardHeader>
          <CardDescription>Pending Cases</CardDescription>
          <CardTitle className="text-4xl">50</CardTitle>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader>
          <CardDescription>Upcoming Hearing</CardDescription>
          <CardTitle className="text-4xl">15</CardTitle>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader>
          <CardDescription>Counters not filed</CardDescription>
          <CardTitle className="text-4xl">13</CardTitle>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader>
          <CardDescription>Age of case</CardDescription>
          <CardTitle className="text-4xl">9</CardTitle>
        </CardHeader>
      </Card>
    </section>
  );
};

export default StatsData;
