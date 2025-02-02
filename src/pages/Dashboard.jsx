import React, { useState } from "react";
import AgentCard from "../components/AgentCard";

const agentsList = [
  { id: 1, name: "Chatbot", status: "stopped" },
  { id: 2, name: "Summarizer", status: "stopped" },
  { id: 3, name: "Assistant", status: "stopped" },
];

export default function Dashboard() {
  const [agents, setAgents] = useState(agentsList);

  const toggleAgent = (id) => {
    setAgents((prevAgents) =>
      prevAgents.map((agent) =>
        agent.id === id
          ? { ...agent, status: agent.status === "running" ? "stopped" : "running" }
          : agent
      )
    );
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">NeuronCLI AI Agent Control</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {agents.map((agent) => (
          <AgentCard key={agent.id} agent={agent} toggleAgent={toggleAgent} />
        ))}
      </div>
    </div>
  );
}
