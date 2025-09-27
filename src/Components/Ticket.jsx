import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const showAlert = (ticketTitle) => {
  toast.success(`Ticket selected: ${ticketTitle}`, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
  });
};
const Ticket = ({ ticket }) => {
  return (
    <div
      className="bg-white p-4 rounded-sm shadow-sm "
      onClick={() => showAlert(ticket.title)}
    >
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-medium">{ticket.title}</h2>
        <p
          className={`flex items-center gap-2 font-medium px-4 py-2 rounded-4xl ${
            ticket.status === "Open"
              ? "bg-green-100"
              : ticket.status === "In Progress"
              ? "bg-yellow-100"
              : ticket.status === "Closed"
              ? "bg-gray-100"
              : "bg-gray-100"
          }`}
        >
          <span
            className={`inline-block w-4 h-4 rounded-full ${
              ticket.status === "Open"
                ? "bg-green-500"
                : ticket.status === "In Progress"
                ? "bg-yellow-500"
                : ticket.status === "Closed"
                ? "bg-gray-500"
                : "bg-gray-400"
            }`}
          ></span>
          {ticket.status}
        </p>
      </div>
      <p className="text-[#627382]">{ticket.description}</p>
      <div className="flex justify-between text-sm text-gray-600 mt-4">
        <div className="flex gap-4">
          <p className="text-[#627382] text-[14px]">#{ticket.id}</p>
          <p
            className={`font-medium ${
              (ticket.priority === "High" && "text-red-500") ||
              (ticket.priority === "Medium" && "text-yellow-500") ||
              "text-green-500"
            }`}
          >
            {ticket.priority}
          </p>
        </div>
        <div className="flex gap-4">
          <p className="font-medium">{ticket.customer}</p>
          <p>
            <i class="fa-regular fa-calendar pr-2"></i>
            {ticket.createdAt}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
