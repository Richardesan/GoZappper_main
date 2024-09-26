import React, { useState } from "react";
import Modal from "./modals";

// Define the type for a table row
interface TableRow {
  id: number;
  name: string;
  environment: string;
  keyId: string;
  status: boolean;
  dateCreated: string;
}

// Define the props for TableContents component
interface TableContentsProps {
  rows: TableRow[];
  setRows: React.Dispatch<React.SetStateAction<TableRow[]>>;
  rowname1: string;
  rowname2: string;
  webhook?: boolean
}

const TableContents: React.FC<TableContentsProps> = ({ rows, setRows, rowname1, rowname2, webhook }) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const handleModal = () => {
    setOpenModal(true);
  };

  const handleCheckboxChange = (id: number) => {
    setSelectedRows((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((rowId) => rowId !== id)
        : [...prevSelected, id]
    );
  };

  return (
    <div className="mt-5">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-[#EEEEEE] text-left text-lightText tracking-wider text-xs">
            <th className="px-6 py-3 border-b-2 border-borderCol"></th>
            <th className="px-6 py-3 border-b-2 border-borderCol">Name</th>
            <th className="px-6 py-3 border-b-2 border-borderCol">{rowname1}</th>
            <th className="px-6 py-3 border-b-2 border-borderCol">{rowname2}</th>
            {!webhook && <th className="px-6 py-3 border-b-2 border-borderCol">Status</th>}
            <th className="px-6 py-3 border-b-2 border-borderCol">Date Created</th>
            <th className="px-6 py-3 border-b-2 border-borderCol"></th>
          </tr>
        </thead>
        <tbody className="text-sm text-darkText">
          {rows.map((row) => (
            <tr key={row.id} className="border-t border-borderCol ">
              <td className="px-6 py-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(row.id)}
                    onChange={() => handleCheckboxChange(row.id)}
                    className="hidden"
                  />
                  <span
                    className={`flex items-center justify-center w-5 h-5 border-2 rounded-md cursor-pointer ${
                      selectedRows.includes(row.id)
                        ? "bg-primaryCol border-primaryCol"
                        : "border-gray-300"
                    } relative`}
                  >
                    <svg
                      className={`w-4 h-4 ${
                        selectedRows.includes(row.id)
                          ? "block text-white"
                          : "hidden"
                      } absolute`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                </label>
              </td>
              <td className="px-6 py-4 font-bold">{row.name}</td>
              <td className="px-6 py-4 text-lightText font-semibold">{row.environment}</td>
              <td className="px-6 py-4 flex items-end gap-3">{row.keyId}</td>
             {!webhook && <td className="px-6 py-4">
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-full font-semibold ${
                    row.status ? "bg-[#EBFFF0] text-primaryCol" : "bg-[#EEEEEE]"
                  }`}
                >
                  <img
                    src={row.status ? "/dotactive.svg" : "/dotainactive.svg"}
                    alt={row.status ? "Active" : "Inactive"}
                  />
                  {row.status ? "Active" : "Inactive"}
                </div>
              </td>}
              <td className="px-6 py-4">{row.dateCreated}</td>
              <td className="px-6 py-4">
                <div className="flex gap-5 items-center">
                  <img src="/eye.svg" /> 
                  <img src="/redTrash.svg" onClick={handleModal} />
                  <Modal
                    openModal={openModal}
                    handleModal={handleModal}
                    setOpenModal={setOpenModal}
                    name="Are you sure?"
                    description={`Are you sure you want to delete ${row.name}`}
                    buttonText="Yes"
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableContents;
