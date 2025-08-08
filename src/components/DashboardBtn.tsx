"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { SparklesIcon } from "lucide-react";
import { useUserRole } from "@/hooks/useUserRole";
function DashboardBtn (){
    const { isCandidate, isLoading } = useUserRole();

  if (isCandidate || isLoading) return null;
  return (
    <Link href={"/dashboard"}>
      <Button className="gap-2 font-medium bg-gradient-to-r from-indigo-600 to-blue-500 text-white px-4 py-2 rounded hover:from-indigo-700 hover:to-blue-600"
        size="sm">
        <SparklesIcon className="size-4" />
        Dashboard
      </Button>
    </Link>
  )
}

export default DashboardBtn

