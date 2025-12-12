"use client";
import StatCard from "@/components/StatCard/StatCard";
import { DollarSign, ShoppingBag, SquareActivity, Users } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import SalesOverviewChart from "@/components/SalesOverviewChart/SalesOverviewChart";
import CategoryDistrbutionChart from "@/components/CategoryDistrbutionChart/CategoryDistrbutionChart";
import OrderSistributionChart from "@/components/OrderSistributionChart/OrderSistributionChart";
import ProductPerformanceChart from "@/components/ProductPerformanceChart/ProductPerformanceChart";
const OverviewPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10 ">
      <main className="max-w-7xl mx-auto py-4 px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 gap-5 sm:grid-2 lg:grid-cols-4 mb-8"
        >
          <StatCard
            name="Total Sales"
            Icon={{ icon: DollarSign, value: "$182,450" }}
          />
          <StatCard
            name="Total Clients"
            Icon={{ icon: Users, value: "1,437" }}
          />
          <StatCard
            name="Total Products"
            Icon={{ icon: ShoppingBag, value: "674" }}
          />
          <StatCard
            name="Stock"
            Icon={{
              icon: SquareActivity,
              value: "12,845",
            }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SalesOverviewChart />
          <CategoryDistrbutionChart />
          <OrderSistributionChart />
          <ProductPerformanceChart />
        </div>
      </main>
    </div>
  );
};

export default OverviewPage;
