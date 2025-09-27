import React from "react";
import { use } from "react";
import Ticket from "./Ticket";
const Tickets = ({
  ticketsPromise,
  onTicketClick,
  completedTicketIds = [],
}) => {
  const tickets = use(ticketsPromise);
  const activeTickets = tickets.filter(
    (ticket) => !completedTicketIds.includes(ticket.id)
  );

  return (
    <div>
      <h1 className="font-semibold text-2xl pb-4">Customer Tickets</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {activeTickets.map((ticket) => (
          <Ticket
            key={ticket.id}
            ticket={ticket}
            onTicketClick={onTicketClick}
          ></Ticket>
        ))}
      </div>
    </div>
  );
};

export default Tickets;
