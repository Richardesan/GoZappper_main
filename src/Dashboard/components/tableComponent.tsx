import CustomButton from "./customButton";
import TableContents from "./tableContents";

const TableComponent = ({ name, buttonText, handleModal, rows, setRows, rowname1, rowname2, webhook }: any) => {
  return (
    <div className=" border-borderCol border-2 pt-5 rounded-lg mt-10">
      <section className="flex items-center justify-between px-6 ">
        <div>
          <h1 className="text-lg font-semibold">{name}</h1>
          <p className="text-lightText text-sm mt-1">1/2 Active Access keys</p>
        </div>

        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-3">
            <img width={18} height={18} src="/Trash.svg" />
            Delete
          </button>
          <div>
            <CustomButton
              buttonText={buttonText}
              img="/Plus.svg"
              handleLogic={handleModal}
            />
          </div>
        </div>
      </section>
      <TableContents rows={rows} setRows={setRows} rowname1={rowname1} rowname2={rowname2} webhook={webhook}/>
    </div>
  );
};

export default TableComponent;
