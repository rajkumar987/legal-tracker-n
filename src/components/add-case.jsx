import { Button } from "@/components/ui/button";

import { PlusCircle } from "lucide-react";
import Link from "next/link";

export default function AddCase() {
  return (
    <Link href="/add-case">
      <Button size="sm" className="h-7 gap-1" variant="outline">
        <PlusCircle className="h-3.5 w-3.5" />
        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
          Add Case
        </span>
      </Button>
    </Link>
  );
}
