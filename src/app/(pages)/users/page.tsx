"use client";
import React from "react";
import { motion } from "framer-motion";
import StatCard from "@/components/StatCard/StatCard";
import { RotateCcw, UserCheck, UserPlus, UsersIcon } from "lucide-react";
import UsersTable from "@/PageComponets/UsersTable/UsersTable";
const UserPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="grid grid-cols-1 gap-5 sm:grid-2 lg:grid-cols-4 mb-8"
        >
          <StatCard
            name="Total Clients"
            Icon={{ icon: UsersIcon, value: "7676" }}
          />
          <StatCard
            name="New Clients"
            Icon={{ icon: UserPlus, value: "860" }}
          />
          <StatCard
            name="Total Clients"
            Icon={{ icon: UserCheck, value: "4080" }}
          />
          <StatCard
            name="Total Clients"
            Icon={{ icon: RotateCcw, value: "2730" }}
          />
        </motion.div>
        <UsersTable />
      </main>
    </div>
  );
};

export default UserPage;
