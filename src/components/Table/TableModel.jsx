"use client";

import { flexRender } from "@tanstack/react-table";
import  { useState } from "react";

const TableModel = ({ table }) => {
  const [selectedRows, setSelectedRows] = useState([]);

  const handleRowClick = (rowId) => {
    setSelectedRows((prevSelectedRows) =>
      prevSelectedRows?.includes(rowId)
        ? prevSelectedRows?.filter((id) => id !== rowId)
        : [...prevSelectedRows, rowId]
    );
  };

  return (
    <>
      <section className=" overflow-x-auto rounded-md">
        <table className="table-auto w-full ">
          {/* ======================== HEADING ====================== */}
          <thead className="">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup?.id} className="bg-[#D4D4D4] ">
                {headerGroup?.headers.map((header) => (
                  <th
                    key={header.id}
                    className="  text-[#444444] text-base font-bold "
                  >
                    <div
                      onClick={header?.column.getToggleSortingHandler()}
                      className=""
                    >
                      <div className="flex items-center gap-2">
                        <div className="text-center mx-auto pt-3">
                          {flexRender(
                            header?.column.columnDef.header,
                            header?.getContext()
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      {/* {header?.column.getCanFilter() ? (
                        <div className="bg-white flex items-center gap-2 p-1">
                          <BiSearchAlt className="text-[#646464] w-6 h-6" />

                          <input
                            type="text"
                            className="outline-none font-normal rounded-sm "
                            onChange={(e) =>
                              header?.column.setFilterValue(e.target.value)
                            }
                          />
                        </div>
                      ) : null} */}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          {/* ========================== ROWS ================================= */}
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className={`${
                  selectedRows.includes(row.id)
                    ? "bg-slate-300"
                    : "odd:bg-[#FEFCFF] even:bg-[#F2F2F2]"
                }`}
                onClick={() => handleRowClick(row.id)}
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className=" text-center py-4 text-[#1C1C1C] font-normal border text-base"
                  >
                    {flexRender(
                      cell?.column.columnDef.cell,
                      cell?.getContext()
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default TableModel;
