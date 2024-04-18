"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export default function Payment() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
    },
  });

  function onSubmit(values) {
    console.log(values);
  }
  return (
    <div style={{ justifyContent: "center", padding: "20px 60px" }}>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Payments to Laywers</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-10 py-5 "
            >
              <section className="form-fields">
                <FormField
                  control={form.control}
                  name="filed_date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Filed Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-[240px] pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="case_number"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Case Number</FormLabel>
                      <FormControl>
                        <Select>
                          <SelectTrigger id="casenumber">
                            <SelectValue placeholder="--Select--" />
                          </SelectTrigger>
                          <SelectContent position="popper">
                            <SelectGroup>
                              <SelectItem value="W.P.No.35822/2015">
                                W.P.No.35822/2015
                              </SelectItem>
                              <SelectItem value="WP.No.15816/2016">
                                WP.No.15816/2016
                              </SelectItem>
                              <SelectItem value="WP NO:24981/2017">
                                WP NO:24981/2017
                              </SelectItem>
                              <SelectItem value="WP 2571/16">
                                WP 2571/16
                              </SelectItem>
                              <SelectItem value="WP. No * 0.23943 / 2016">
                                WP. No * 0.23943 / 2016
                              </SelectItem>
                              <SelectItem value="6578">6578</SelectItem>
                              <SelectItem value="r-09876">r-09876</SelectItem>
                              <SelectItem value="987654321">
                                987654321
                              </SelectItem>
                              <SelectItem value="WP-2789/36">
                                WP-2789/36
                              </SelectItem>
                              <SelectItem value="WP-3454/56">
                                WP-3454/56
                              </SelectItem>
                              <SelectItem value="WP-675/453">
                                WP-675/453
                              </SelectItem>
                              <SelectItem value="WP-6789/3454">
                                WP-6789/3454
                              </SelectItem>
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
                              <SelectItem value="WP-454/34">
                                WP-454/34
                              </SelectItem>
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
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="petitioner_advocate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Select Lawyer</FormLabel>
                      <FormControl>
                        <Input placeholder="Proceding No date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="respondent_advocate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Case Fee Amount</FormLabel>
                      <FormControl>
                        <Input placeholder="Case No date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="respondent_advocate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Remaining Amount</FormLabel>
                      <FormControl>
                        <Input placeholder="Proceding No date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="respondent_advocate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Pay Amount</FormLabel>
                      <FormControl>
                        <Input placeholder="Proceding No date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="respondent_advocate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Proceeding No Date</FormLabel>
                      <FormControl>
                        <Input placeholder="Proceding No date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="respondent_advocate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Proceeding No</FormLabel>
                      <FormControl>
                        <Input placeholder="Proceding No date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="financials_involved"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Status Of Payment</FormLabel>
                      <Select {...field}>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Select a status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Select a status</SelectLabel>
                            <SelectItem value="part">Part</SelectItem>
                            <SelectItem value="final">Final</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="financials_involved"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Proceeding Copy</FormLabel>
                      <FormControl>
                        <Input type="file" placeholder="Select file" />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </section>
              <Button type="submit" className="flex-1">
                Submit
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
