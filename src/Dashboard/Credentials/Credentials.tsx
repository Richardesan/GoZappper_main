import { useState } from "react";
import HeaderText from "../components/headerText";
import Modal from "../components/modals";
import TableComponent from "../components/tableComponent";
import Credentialform from "./component/form";

const Credentials = () => {
  const [openModal, setOpenModal] = useState(false);
  const [input, setInput] = useState("");
  const [rows, setRows]:any = useState([
  ]);

  function handleModal() {
    setOpenModal(true);
  }

  const modalProperty = {
    name: "Create Key Access",
    descriptions: `After generating the key, immediately copy it and insert it into your code. Be aware that for security purposes, the key will not be accessible again after this point, so make sure to store it securely during this initial access.`,
  };

  const addCredentials = () => {
    if (input.trim()) {
      const today = new Date();
      const formattedDate = today.toLocaleDateString('en-US', {
        month: 'short', // Use short month format (e.g., Sep)
        day: 'numeric', // Use numeric day (e.g., 9)
        year: 'numeric' // Use full year (e.g., 2024)
      });
    
      setRows([
        ...rows,
        {
          id: Date.now(),
          name: input,
          environment: "Unknown",
          keyId: "NewlyGeneratedKeyID",
          status: true,
          dateCreated: formattedDate, // Use formatted date
        },
      ]);
      setInput("");
      setOpenModal(false);
    }
    
  };

  return (
    <main>
      <HeaderText
        headerTitle="Credentials"
        headerText="Manage your API credentials for this instance"
      />
      <TableComponent
        name="API keys"
        buttonText="Create Access key"
        handleModal={handleModal}
        rows={rows} setRows={setRows}
        rowname1="Enviromment"
        rowname2="Key ID"
      />

      <Modal
        setOpenModal={setOpenModal}
        openModal={openModal}
        name={modalProperty.name}
        description={modalProperty.descriptions}
        handleModal={addCredentials}
        buttonText="Configure Endpoints"
      >
        <Credentialform input={input} setInput={setInput} />
      </Modal>
    </main>
  );
};

export default Credentials;
