import React from "react";
import { use } from "react";
import Ticket from "./Ticket";
const Tickets = ({ ticketsPromise }) => {
  const tickets = use(ticketsPromise);
  return (
    <div>
      <h1 className="font-semibold text-2xl pb-4">Customer Tickets</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tickets.map((ticket) => (
          <Ticket key={ticket.id} ticket={ticket}></Ticket>
        ))}
      </div>
    </div>
  );
};

export default Tickets;
