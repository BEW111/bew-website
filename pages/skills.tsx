import * as React from "react";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

type Skill = {
  name: string;
  category: string;
  years: number;
  sources: string[];
};

const columnHelper = createColumnHelper<Skill>();

const defaultData: Skill[] = [
  {
    name: "React",
    category: "frontend",
    years: 3,
    sources: ["school", "personal project", "internship"],
  },
  {
    name: "Django",
    category: "backend",
    years: 2,
    sources: ["personal project", "internship"],
  },
  {
    name: "MongoDB",
    category: "backend",
    years: 1,
    sources: ["club"],
  },
  {
    name: "Pandas",
    category: "data science",
    years: 3,
    sources: ["personal project", "internship"],
  },
  {
    name: "TensorFlow",
    category: "backend",
    years: 3,
    sources: ["online course"],
  },
  {
    name: "Java",
    category: "backend",
    years: 5,
    sources: ["school", "personal project"],
  },
  {
    name: "Data visualization (matplotlib, seaborn)",
    category: "data science",
    years: 2,
    sources: ["club", "personal project", "internship"],
  },
];

const categoryDivStyleMap = {
  school: "bg-green-200 shadow-green-200/70",
  "personal project": "bg-purple-200 shadow-purple-200/70",
  internship: "bg-slate-200 shadow-slate-200/70",
  club: "bg-orange-200 shadow-orange-200/70",
  "online course": "bg-blue-200 shadow-blue-200/70",
};

const columns = [
  columnHelper.accessor("name", {
    header: () => "Skill",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("category", {
    header: () => "Category",
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("years", {
    header: () => "Years of experience",
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("sources", {
    header: () => "Sources",
    cell: (info) => (
      <div className="flex gap-x-2">
        {info.getValue().map((v) => (
          <div
            className={`${categoryDivStyleMap[v]} rounded-md p-1 px-2 shadow-lg`}
          >
            {v}
          </div>
        ))}
      </div>
    ),
    footer: (info) => info.column.id,
  }),
];

export default function Skills() {
  const [data, setData] = React.useState(() => [...defaultData]);
  const rerender = React.useReducer(() => ({}), {})[1];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="w-full p-1">
      <table className="table-auto border-collapse rounded-md">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="border border-slate-500">
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="p-4 text-left text-xl">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className="border border-slate-500 even:bg-slate-100"
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="p-4 text-xl">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
