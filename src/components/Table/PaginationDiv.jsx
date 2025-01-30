import { useEffect, useState } from "react";
import { BsFillSkipBackwardFill, BsFillSkipForwardFill } from "react-icons/bs";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const PaginationDiv = ({ table }) => {
  const [pageNumber, setPageNumber] = useState(
    table?.getState()?.pagination?.pageIndex + 1 || 1
  );

  useEffect(() => {
    setPageNumber(table?.getState()?.pagination?.pageIndex + 1 || 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [table?.getState()?.pagination?.pageIndex]);

  // console.log(table.getState());
  // table.getState() is an object , it has a pagination property. pagination has two propertry: pageIndex & pageSize. pageIndex starts from 0 and pageSize indicates total row of for a page

  console.log(table.getCoreRowModel());
  return (
    <>
      <section className="bg-[#D9D9D9] text-[#444444] py-4 px-6 mx-2">
        {" "}
        <div>
          {table?.getRowModel()?.rows?.length > 0 && (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <p className="text-base font-bold">Show:</p>
                <div>
                  <select
                    value={table.getState().pagination.pageSize}
                    onChange={(e) => {
                      table.setPageSize(Number(e.target.value));
                    }}
                    className="px-2 py-2 rounded-md outline-none"
                  >
                    {[10, 20].map((pageSize) => (
                      <option key={pageSize} value={pageSize}>
                        {pageSize} entries
                      </option>
                    ))}
                    <option value={table.getCoreRowModel().rows.length}>
                      All entries
                    </option>
                  </select>
                </div>
              </div>
              <div className="text-[#444444] flex items-center gap-2">
                <p className="text-base font-bold">Go to Page:</p>
                <input
                  type="number"
                  min={0}
                  max={table.getPageCount()}
                  defaultValue={table.getState().pagination.pageIndex + 1}
                  onChange={(e) => {
                    const page = e.target.value
                      ? Number(e.target.value) - 1
                      : 0;
                    table.setPageIndex(page);
                  }}
                  className="outline-none text-center"
                />
              </div>
              <div className="flex items-center gap-1">
                <button
                  disabled={!table.getCanPreviousPage()}
                  onClick={() => table.setPageIndex(0)}
                  className="disabled:opacity-25 disabled:cursor-not-allowed"
                >
                  <BsFillSkipBackwardFill fontSize={18} />
                </button>
                <button
                  disabled={!table.getCanPreviousPage()}
                  onClick={() => table.previousPage()}
                  className="disabled:opacity-25 disabled:cursor-not-allowed"
                >
                  <MdKeyboardArrowLeft fontSize={24} />
                </button>
                <input
                  type="text"
                  value={pageNumber}
                  // defaultValue={table.getState().pagination.pageIndex + 1}
                  className="w-8 text-center"
                />
                <button
                  disabled={!table.getCanNextPage()}
                  onClick={() => table.nextPage()}
                  className="disabled:opacity-25 disabled:cursor-not-allowed"
                >
                  <MdKeyboardArrowRight fontSize={24} />
                </button>
                <button
                  disabled={!table.getCanNextPage()}
                  onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                  className={`disabled:opacity-25 disabled:cursor-not-allowed`}
                >
                  <BsFillSkipForwardFill fontSize={18} />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default PaginationDiv;

/**
columnFilters: []
columnOrder: []
columnPinning: {left: Array(0), right: Array(0)}
columnSizing: {}
columnSizingInfo: {startOffset: null, startSize: null, deltaOffset: null, deltaPercentage: null, isResizingColumn: false, …}
columnVisibility: {}
expanded: {}
globalFilter: ""
grouping: []
pagination: {pageIndex: 0, pageSize: 10}
rowPinning: {top: Array(0), bottom: Array(0)}
rowSelection: {}
sorting: []
*/
