import { cn } from "@/lib/utils";
import { LucideMailQuestion, PresentationIcon } from "lucide-react";
import Image from "next/image";

interface EmptyProps {
  label: string;
  textColor?: string;
}

export const Empty = ({ label, textColor }: EmptyProps) => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div className="relative h-48 w-48">
        <LucideMailQuestion className={cn("w-full h-full text-orange-500")} />
      </div>
      <p className={cn("text-sm text-white")}>{label}</p>
    </div>
  );
};
