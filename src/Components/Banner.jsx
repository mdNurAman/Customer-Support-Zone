import React, { Suspense, useState } from "react";
import { toast } from "react-toastify";
import Status from "./Status";
import Tickets from "./Tickets";

const fetchTickets = async () => {
  const response = await fetch("/infos.json");
  const data = await response.json();
  return data;
};

const Banner = () => {
  const [inProgressCount, setInProgressCount] = useState(0);
  const [resolved, setResolved] = useState(0);
  const [selectedTickets, setSelectedTickets] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);
  const [completedTicketIds, setCompletedTicketIds] = useState([]);
  const ticketsPromise = fetchTickets();

  const handleTicketClick = (ticket) => {
    if (selectedTickets.find((t) => t.id === ticket.id)) {
      toast.warning("Already in progress!");
      return;
    }

    setSelectedTickets([...selectedTickets, ticket]);
    setInProgressCount((prev) => prev + 1);
    toast.success("In progress!");
  };
  return (
    <section className="bg-[#f5f5f5] border-1 border-gray-200 px-5 md:px-0 py-10">
      <div className="container mx-auto">
        <Status inProgressCount={inProgressCount} resolvedCount={resolved} />
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
          <div className="lg:col-span-4">
            <Suspense
              fallback={
                <div className="flex justify-center items-center h-32 gap-2">
                  <span className="loading loading-bars loading-xs"></span>
                  <span className="loading loading-bars loading-sm"></span>
                  <span className="loading loading-bars loading-md"></span>
                  <span className="loading loading-bars loading-lg"></span>
                  <span className="loading loading-bars loading-xl"></span>
                </div>
              }
            >
              <Tickets
                ticketsPromise={ticketsPromise}
                onTicketClick={handleTicketClick}
                completedTicketIds={completedTicketIds}
              />
            </Suspense>
          </div>
          <aside>
            <div>
              <h2 className="font-semibold text-2xl pb-4">Task Status</h2>
              {selectedTickets.length === 0 ? (
                <p className="text-sm text-gray-500">
                  Select a ticket to add to Task Status.
                </p>
              ) : (
                <div className="space-y-3">
                  {selectedTickets.map((ticket) => (
                    <div key={ticket.id} className="bg-white p-3 rounded-lg">
                      <h3 className="font-medium text-xl">{ticket.title}</h3>
                      <button
                        className="bg-green-600  text-center w-full py-2 my-3 text-white rounded-2xl"
                        onClick={() => {
                          setSelectedTickets(
                            selectedTickets.filter((t) => t.id !== ticket.id)
                          );
                          setInProgressCount((prev) => prev - 1);
                          setResolved((prev) => prev + 1);
                          setResolvedTickets((prev) => [...prev, ticket]);
                          setCompletedTicketIds((prev) => [...prev, ticket.id]);
                        }}
                      >
                        Complete
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="mt-8">
              <h2 className="font-semibold text-2xl pb-4">Resolved Task</h2>
              {resolvedTickets.length === 0 ? (
                <p className="text-sm text-gray-500">No Resolved task yet.</p>
              ) : (
                <div className="space-y-3">
                  {resolvedTickets.map((ticket) => (
                    <div key={ticket.id} className="bg-white p-3 rounded-lg">
                      <h3 className="font-medium text-xl">{ticket.title}</h3>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Banner;
