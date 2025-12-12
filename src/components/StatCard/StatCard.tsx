"use client";
import { LucideProps } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

interface StateCardType {
  name: string;
  Icon: {
    icon: React.ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
    >;
    value: string;
  };
}

const StatCard = ({ name, Icon }: StateCardType) => {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)" }}
      className="bg-[#1e1e1e] backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-[#1f1f1f]"
    >
      <div className="px-4 py-5 sm:p-6">
        <span className="flex items-center text-sm font-medium text-gray-300">
          <Icon.icon size={20} className="mr-2" />
        </span>
        <p className="mt-1 text-3xl font-semibold text-white">{Icon.value}</p>
      </div>
    </motion.div>
  );
};

export default StatCard;
