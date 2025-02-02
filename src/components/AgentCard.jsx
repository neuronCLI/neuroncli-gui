import React from "react";
import { Play, StopCircle } from "lucide-react";

export default function AgentCard({ agent, toggleAgent }) {
  return (
    <div className="p-4 border rounded-lg shadow-md flex justify-between items-center">
      <div>
        <h2 className="text-xl font-semibold">{agent.name}</h2>
        <p className={agent.status === "running" ? "text-green-500" : "text-red-500"}>
          {agent.status === "running" ? "Running" : "Stopped"}
        </p>
      </div>
      <button
        onClick={() => toggleAgent(agent.id)}
        className={`px-4 py-2 rounded ${agent.status === "running" ? "bg-red-500" : "bg-green-500"}`}
      >
        {agent.status === "running" ? <StopCircle className="w-5 h-5" /> : <Play className="w-5 h-5" />}
      </button>
    </div>
  );
}
