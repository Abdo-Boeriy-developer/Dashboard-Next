"use client";
import React from "react";
import { motion } from "framer-motion";
import StatCard from "@/components/StatCard/StatCard";
import {
  ChartBarStacked,
  DollarSign,
  icons,
  ShoppingBag,
  SquareActivity,
} from "lucide-react";
import ProductsTable from "@/PageComponets/ProductsTable/ProductsTable";
const ProductsPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8 ">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total products"
            Icon={{ icon: ShoppingBag, value: "4,352" }}
          />
          <StatCard
            name="Total Stock"
            Icon={{ icon: SquareActivity, value: "18,450" }}
          />
          <StatCard
            name="Total Stock"
            Icon={{ icon: DollarSign, value: "17,780" }}
          />
          <StatCard
            name="Total Stock"
            Icon={{ icon: ChartBarStacked, value: "8" }}
          />
        </motion.div>
        <ProductsTable />
      </main>
    </div>
  );
};

export default ProductsPage;
