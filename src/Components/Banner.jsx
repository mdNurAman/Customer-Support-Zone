import React, { Suspense } from "react";
import Status from "./Status";
import Tickets from "./Tickets";

const fetchTickets = async () => {
  const response = await fetch("/infos.json");
  const data = await response.json();
  return data;
};

const Banner = () => {
  const ticketsPromise = fetchTickets();
  return (
    <section className="bg-[#f5f5f5] border-1 border-gray-200 px-5 md:px-0 py-10">
      <div className="container mx-auto">
        <Status />
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
          <div className="lg:col-span-4">
            <Suspense fallback={<div>Loading...</div>}>
              <Tickets ticketsPromise={ticketsPromise} />
            </Suspense>
          </div>
          <aside>
            <div>
              <h2 className="font-semibold text-2xl pb-4">Task Status</h2>
              <p className="text-sm text-gray-500">
                Select a ticket to add to Task Status.
              </p>
            </div>
            <div className="mt-8">
              <h2 className="font-semibold text-2xl pb-4">Resolved Task</h2>
              <p className="text-sm text-gray-500">No Resolved task yet.</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Banner;
