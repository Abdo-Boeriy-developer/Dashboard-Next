"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from "lucide-react";
import Image from "next/image";

interface clientType {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  country: string;
  image: string;
}

const UsersTable = () => {
  const [clients, setClients] = useState<clientType[]>([]);
  const [searchTerm, setSerchTerm] = useState("");
  useEffect(() => {
    const fetchClients = async () => {
      try {
        const res = await fetch("/data/data.json");
        const data = await res.json();
        console.log("clients", data.clients);
        setClients(data.clients);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchClients();
  }, []);

  const filterdSearch = clients.filter(
    (client) =>
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="bg-[#1e1e1e] backdrop-blur-md shadow-lg rounded-xl p-4 sm:p-6 border border-[#1f1f1f] mx-2 sm:mx-0"
    >
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4 sm:gap-0">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-100 text-center sm:text-left">
          Clients
        </h2>
        <div className="relative w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search Clients "
            className="bg-[#2f2f2f] text-white placeholder-gray-400 rounded-lg p-10 pr-4 py-2 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200 text-sm"
            onChange={(e) => setSerchTerm(e.target.value)}
            value={searchTerm}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              {["Name", "Email", "phone Number", "Country", "Actions"].map(
                (header) => (
                  <th
                    key={header}
                    className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wide hidden sm:table-cell"
                  >
                    {header}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {filterdSearch.map((client, index) => (
              <motion.tr
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="flex flex-col sm:table-row mb-4 sm:mb- border-b sm:border-0 border-gray-500 sm:border-none p-2 sm:p-0"
              >
                {/* Mobile View */}
                <td className="sm:hidden px-3 py-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Image
                        src={client.image}
                        alt={client.name}
                        width={36}
                        height={36}
                        className="w-9 h-9 rounded-full"
                      />
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-100">
                          {client.name}
                        </div>
                        <div className="text-sm  text-gray-400">
                          {client.email}
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-1 -mt-5 -mr-4">
                      <button className="text-indigo-500 hover:text-indigo-300">
                        <Edit size={16} />
                      </button>
                      <button className="text-red-500 hover:text-indigo-300">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-gray-300 ">
                    <div>Phone: {client.phoneNumber}</div>
                    <div>Country: {client.country}</div>
                  </div>
                </td>
                {/* DeshTop View */}

                <div className="hidden sm:table-cell px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Image
                      src={client.image}
                      alt=""
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-100">
                        {client.name}
                      </div>
                    </div>
                  </div>
                </div>
                <td className="hidden sm:table-cell px-6 whitespace-nowrap text-sm *:text-gray-300">
                  {client.email}
                </td>
                <td className="hidden sm:table-cell px-6 whitespace-nowrap text-sm *:text-gray-300">
                  {client.phoneNumber}
                </td>
                <td className="hidden sm:table-cell px-6 whitespace-nowrap text-sm *:text-gray-300">
                  {client.country}
                </td>
                <td className="hidden sm:table-cell px-6 whitespace-nowrap text-sm *:text-gray-300">
                  <div className="flex space-x-1 -ml-2">
                    <button className="text-indigo-500 hover:text-indigo-300">
                      <Edit size={16} />
                    </button>
                    <button className="text-red-500 hover:text-indigo-300">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default UsersTable;
