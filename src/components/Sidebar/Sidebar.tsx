"use client";
import {
  Bell,
  DollarSign,
  House,
  Info,
  Mail,
  Menu,
  Settings,
  ShoppingBag,
  ShoppingCart,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const ICONS = {
  House,
  DollarSign,
  Settings,
  ShoppingBag,
  ShoppingCart, // ← أضف ده
  Mail,
  Users,
  Bell,
  Info,
};

type SidebarItem = {
  icon: keyof typeof ICONS;
  name: string;
  href: string;
  // Add other properties as needed
};

const Sidebar = () => {
  const [sidebrItems, setSidebarItems] = useState<SidebarItem[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  const pathName = usePathname();

  useEffect(() => {
    fetch("/data/data.json")
      .then((res) => res.json())
      .then((data) => setSidebarItems(data.sidebarItems));
  }, []);

  return (
    <div
      className={`relative z-10 transition-all duration-300 ease-in-out shrink-0  ${
        isSidebarOpen ? "w-64" : "w-20 "
      }`}
    >
      <div className="h-full bg-[#1e1e1e]  backdrop-blur-md p-4 flex flex-col border-r  border-[#2f2f2f]">
        <button
          className="p-2 rounded-full hover:bg-[#2f2f2f] transition-colors max-w-fit cursor-pointer"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <Menu size={20} />
        </button>

        <nav className="mt-8 grow">
          {sidebrItems.map((item) => {
            const IconComponent = ICONS[item.icon];
            return (
              <Link href={item.href}>
                <div
                  className={`flex items-center p-4 text-sm font-medium rounded-lg hover:bg-[#2f2f2f] transition-colors mb-2 ${
                    pathName === item.href ? "bg-[#2f2f2f]" : ""
                  }`}
                >
                  {IconComponent && (
                    <IconComponent size={20} style={{ minWidth: "20px" }} />
                  )}
                  {isSidebarOpen && (
                    <span className="ml-4 whitespace-nowrap ">{item.name}</span>
                  )}
                </div>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
