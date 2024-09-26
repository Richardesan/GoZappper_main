import { useState } from "react";

import HeaderText from "../components/headerText";
import Modal from "../components/modals";
import ConfigureEndpoint from "./component/configureEndpoint";
import WebhookForm from "./component/webhookForm";
import TableComponent from "../components/tableComponent";

const Webhook = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openWebhook, setOpenWebhook] = useState(false);
  const [input, setInput] = useState("");

  const [rows, setRows]: any = useState([]);

  const addCredentials = () => {
    if (input.trim()) {
      const today = new Date();
      const formattedDate = today.toLocaleDateString("en-US", {
        month: "short", // Use short month format (e.g., Sep)
        day: "numeric", // Use numeric day (e.g., 9)
        year: "numeric", // Use full year (e.g., 2024)
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

  function handleModal() {
    setOpenModal(true);
  }
  return (
    <main>
      <HeaderText
        headerText="Configure an endpoint to receive updates from Gozapper when the status of a delivery changes"
        headerTitle="Webhooks"
      />
      {!openWebhook ? (
        <ConfigureEndpoint handleModal={handleModal} />
      ) : (
        <TableComponent
          name="Endpoints"
          buttonText="Configure Endpoint"
          handleModal={handleModal}
          rows={rows}
          rowname1="Url"
          rowname2="Authentication Header"
          setRows={setRows}
          webhook={true}
        />
      )}
       <Modal
        descriptionSlim={true}
        description="Set up an endpoint to receive webhook events for delivery updates. "
        isCancel={false}
        setOpenModal={setOpenModal}
        buttonText="Configure Endpoint"
        handleModal={addCredentials}
        name="Configure Endpoint"
        openModal={openModal}
      >
        <WebhookForm  input={input} setInput={setInput} />
      </Modal> 
    </main>
  );
};

export default Webhook;
