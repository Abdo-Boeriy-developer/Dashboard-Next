"use client";
import React from "react";
import { motion } from "framer-motion";
import StatCard from "@/components/StatCard/StatCard";
import { CreditCard, DollarSign, ShoppingCart, TrendingUp } from "lucide-react";
import SalesOverviewChart from "@/components/SalesOverviewChart/SalesOverviewChart";
import CategoryDistrbutionChart from "@/components/CategoryDistrbutionChart/CategoryDistrbutionChart";
const SalesPage = () => {
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
            name="Total Revenue"
            Icon={{ icon: DollarSign, value: "$42,300" }}
          />
          <StatCard
            name="Avg. Order Value"
            Icon={{ icon: ShoppingCart, value: "$78.50" }}
          />
          <StatCard
            name="Total Sales"
            Icon={{ icon: CreditCard, value: "128.500" }}
          />
          <StatCard
            name="Total Growth"
            Icon={{ icon: TrendingUp, value: "36.2%" }}
          />
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <SalesOverviewChart />
          <CategoryDistrbutionChart />
        </div>
      </main>
    </div>
  );
};

export default SalesPage;
