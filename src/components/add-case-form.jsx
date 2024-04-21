import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import Select from "react-select";

import {
  CaseTypes,
  Circles,
  CourtNames,
  DepartmentSpecifics,
  HODs,
  LegalSections,
  Respondents,
  Statuses,
  Zones,
} from "@/constants/dashboard-data";
import { Textarea } from "./ui/textarea";

const AddCaseForm = () => {
  const methods = useForm();
  const { register, handleSubmit, watch } = methods;
  const onSubmit = (data) => alert(JSON.stringify(data));
  const watchsection = watch("section_name") === "GHMC";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-5 divide-y ">
      <section className="form-fields pb-2">
        <span className="space-y-1">
          <Label className="text-gray-500 text-xs">Date</Label>
          <Input
            {...register("created_date", {
              value: new Date(Date.now()).toISOString().split("T")[0],
            })}
            value={new Date(Date.now()).toISOString().split("T")[0]}
            disabled
          />
        </span>
        <span>
          <Label className="text-gray-500 text-xs">Date of Filing</Label>
          <Input type="date" {...register("date")} />
        </span>
        <span className="flex flex-col gap-1">
          <Label className="text-gray-500 text-xs">Select Court</Label>
          <select
            className="border p-2 rounded-md text-sm outline-none"
            {...register("court")}
          >
            <option value="" selected>
              Select
            </option>
            {CourtNames.map((court) => (
              <option value={court.value} key={court.value}>
                {court.name}
              </option>
            ))}
          </select>
        </span>
        <span className="flex flex-col gap-1">
          <Label className="text-gray-500 text-xs">Select Case Type</Label>
          <select
            className="border p-2 rounded-md text-sm outline-none"
            {...register("case_type")}
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
          <Input {...register("case_number")} placeholder="Case Number" />
        </span>
        <span>
          <Label className="text-gray-500 text-xs">Case Year</Label>
          <Input {...register("case_year")} placeholder="Year" type="number" />
        </span>
        <span className="flex flex-col gap-1">
          <Label className="text-gray-500 text-xs">Name of the Section</Label>
          <select
            className="border p-2 rounded-md text-sm outline-none"
            {...register("section_name")}
          >
            <option value="" selected>
              Select
            </option>
            {LegalSections.map((section) => (
              <option value={section.value} key={section.value}>
                {section.name}
              </option>
            ))}
          </select>
        </span>
        {watchsection && (
          <span className="flex flex-col gap-1">
            <Label className="text-gray-500 text-xs">Case Belongs To</Label>
            <select
              className="border p-2 rounded-md text-sm outline-none"
              {...register("case_belongs_to")}
            >
              <option value="" selected>
                Select
              </option>
              <option value="hod">Head Office</option>
              <option value="zonal_office">Zonal Office</option>
              <option value="circle_office">Circe Office</option>
            </select>
          </span>
        )}

        {watchsection &&
          (watch("case_belongs_to") == "zonal_office" ||
            watch("case_belongs_to") == "circle_office") && (
            <span className="flex flex-col gap-1">
              <Label className="text-gray-500 text-xs">
                Name of Zone/Circle
              </Label>
              <select
                className="border p-2 rounded-md text-sm outline-none"
                {...register("zone_or_circle")}
              >
                <option value="" selected>
                  Select
                </option>
                {watch("case_belongs_to") === "zonal_office"
                  ? Zones.map((zone) => (
                      <option value={zone.value} key={zone.value}>
                        {zone.name}
                      </option>
                    ))
                  : watch("case_belongs_to") === "circle_office" &&
                    Circles.map((circle) => (
                      <option value={circle.value} key={circle.value}>
                        {circle.name}
                      </option>
                    ))}
              </select>
            </span>
          )}

        {watchsection && (
          <span className="flex flex-col gap-1">
            <Label className="text-gray-500 text-xs">Name of HOD</Label>
            <select
              className="border p-2 rounded-md text-sm outline-none"
              {...register("name_of_hod")}
            >
              <option value="" selected>
                Select
              </option>
              {HODs.map((hod) => (
                <option value={hod.value} key={hod.value}>
                  {hod.name}
                </option>
              ))}
            </select>
          </span>
        )}

        <span>
          <Label className="text-gray-500 text-xs">Petitioner Name</Label>
          <Input
            {...register("petitioner_name")}
            placeholder="Petitioner Name"
          />
        </span>

        <span>
          <Label className="text-gray-500 text-xs">Mobile Number</Label>
          <Input
            {...register("mobile_number")}
            placeholder="Mobile"
            type="number"
          />
        </span>
        <span>
          <Label className="text-gray-500 text-xs">Next Hearing Date</Label>
          <Input type="date" {...register("hearing_date")} />
        </span>
        <span>
          <Label className="text-gray-500 text-xs">RESPONDENTS</Label>
          <Controller
            control={methods.control}
            name="respondants"
            render={({ field: { onChange, value, ref } }) => (
              <Select
                className="text-sm"
                value={Respondents.filter((c) => value?.includes(c.value))}
                onChange={(val) => onChange(val.map((c) => c.value))}
                options={Respondents}
                isMulti
              />
            )}
          />
        </span>
        <span>
          <Label className="text-gray-500 text-xs"> eOFFICE RECEIPT NO</Label>
          <Input
            {...register("e_receipt_number")}
            placeholder="Receipt number"
          />
        </span>

        <span>
          <Label className="text-gray-500 text-xs"> Prayer</Label>
          <Textarea {...register("prayer")} />
        </span>
        <span>
          <Label className="text-gray-500 text-xs"> Remarks</Label>
          <Textarea {...register("remarks")} />
        </span>
      </section>
      <section className="form-fields pt-2">
        <span className="flex flex-col gap-1">
          <Label className="text-gray-500 text-xs">Financials Involved</Label>
          <select
            className="border p-2 rounded-md text-sm outline-none"
            {...register("finalcials_involved")}
          >
            <option value="" selected>
              Select
            </option>
            <option value="Y">Yes</option>
            <option value="N">No</option>
          </select>
        </span>
        <span className="flex flex-col gap-1">
          <Label className="text-gray-500 text-xs">
            {" "}
            Advocate/Standing Council
          </Label>
          <select
            className="border p-2 rounded-md text-sm outline-none"
            {...register("res_advocate")}
          >
            <option value="" selected>
              Select
            </option>
          </select>
        </span>
        <span className="flex flex-col gap-1">
          <Label className="text-gray-500 text-xs">Vakalath Filed</Label>
          <select
            className="border p-2 rounded-md text-sm outline-none"
            {...register("vakalath_filed")}
          >
            <option value="" selected>
              Select
            </option>
            <option value="Y">Yes</option>
            <option value="N">No</option>
          </select>
        </span>
        <span>
          <Label className="text-gray-500 text-xs">Vakalath Filed Date</Label>
          <Input type="date" {...register("vakalath_filed_date")} />
        </span>
        <span className="flex flex-col gap-1">
          <Label className="text-gray-500 text-xs">Counters Submitted</Label>
          <select
            className="border p-2 rounded-md text-sm outline-none"
            {...register("counter_submitted")}
          >
            <option value="" selected>
              Select
            </option>
            <option value="Y">Yes</option>
            <option value="N">No</option>
          </select>
        </span>
        <span>
          <Label className="text-gray-500 text-xs">
            Counters Submitted Date
          </Label>
          <Input type="date" {...register("counter_submitted_date")} />
        </span>
        <span className="flex flex-col gap-1">
          <Label className="text-gray-500 text-xs">PWR</Label>
          <select
            className="border p-2 rounded-md text-sm outline-none"
            {...register("counter_submitted")}
          >
            <option value="" selected>
              Select
            </option>
            <option value="submitted">Submitted</option>
            <option value="approval">Approval</option>
            <option value="awaited">Awaited</option>
            <option value="not_submitted">Not Submitted</option>
          </select>
        </span>

        <span className="flex flex-col gap-1">
          <Label className="text-gray-500 text-xs">Department Specific</Label>
          <select
            className="border p-2 rounded-md text-sm outline-none"
            {...register("department_specific")}
            defaultValue=""
          >
            <option value="">Select</option>
            {DepartmentSpecifics.map((department) => (
              <option value={department.value} key={department.value}>
                {department.name}
              </option>
            ))}
          </select>
        </span>
        <span className="flex flex-col gap-1">
          <Label className="text-gray-500 text-xs">Present Status </Label>
          <select
            className="border p-2 rounded-md text-sm outline-none"
            {...register("counter_submitted")}
            defaultValue=""
          >
            <option value="">Select</option>
            {Statuses.map((status) => (
              <option value={status.value} key={status.value}>
                {status.name}
              </option>
            ))}
          </select>
        </span>
        <span>
          <Label className="text-gray-500 text-xs">
            Upload copy of vakalath
          </Label>
          <Input type="File" />
        </span>
        <span>
          <Label className="text-gray-500 text-xs">
            Upload copy of counters
          </Label>
          <Input type="File" />
        </span>
        <span>
          <Label className="text-gray-500 text-xs">Upload petition copy</Label>
          <Input type="File" />
        </span>
        <span>
          <Label className="text-gray-500 text-xs">Upload gist</Label>
          <Input type="File" />
        </span>
      </section>

      <Button type="submit" className="my-2">
        Submit
      </Button>
    </form>
  );
};

export default AddCaseForm;
