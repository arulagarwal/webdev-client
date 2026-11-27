"use client";
import { useState } from "react";
import * as client from "./client";
export default function Connection() {
  const [output, setOutput] = useState("Click to read the connection status.");
  const readStatus = async () => {
    try {
      const status = await client.fetchStatus();
      setOutput(JSON.stringify(status, null, 2));
    } catch {
      setOutput("Could not reach the server.");
    }
  };
  return (
    <div id="wd-lab6-connection">
      <h3>MongoDB connection</h3>
      <p>
        Set <code>DATABASE_CONNECTION_STRING</code> on Express. This demo
        checks the server&apos;s database connection status.
      </p>
      <button
        type="button"
        id="wd-lab6-status"
        className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
        onClick={readStatus}
      >
        Read connection status
      </button>
      <pre id="wd-lab6-status-output" className="mt-2 overflow-x-auto text-sm">
        {output}
      </pre>
      <hr />
    </div>
  );
}
