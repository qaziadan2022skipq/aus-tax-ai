"use client";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { tools } from "./constants";

const Dashboard = () => {
  const router = useRouter();
  return (
    <>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-orange-500">
        Austrailia Tax AI
        </h2>
        <p className="text-white font-light text-small md:text-lg text-center">
          The Smartest AI Companion Here to Help You with Taxation!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 px-4 md:px-32">
        {tools.map((tool, index) => (
          <div key={index}>
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className="p-4 border-black/4 items-center bg-[#1b1b1b] text-white flex justify-between hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-ft rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="font-semibold">{tool.label}</div>
            </div>
            {/* <ArrowRight className="w-5 h-5" /> */}
          </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
