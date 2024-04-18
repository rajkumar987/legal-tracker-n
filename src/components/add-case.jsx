import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { PlusCircle } from "lucide-react";
import AddCaseForm from "./add-case-form";

export default function AddCase() {
  return (
    <Sheet key="bottom">
      <SheetTrigger asChild>
        <Button size="sm" className="h-7 gap-1">
          <PlusCircle className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
            Add Case
          </span>
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="h-[85vh]">
        <SheetHeader>
          <SheetTitle>Add Case</SheetTitle>
          <SheetDescription>
            Please fill all the inputs. Click add when you're done.
          </SheetDescription>
        </SheetHeader>
        <AddCaseForm />
      </SheetContent>
    </Sheet>
  );
}
