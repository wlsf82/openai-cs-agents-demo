module.exports = {
  conversation_id: "b7e6e2b1-2c4d-4f8e-9a1b-1a2e3c4d5e6f",
  current_agent: "Triage Agent",
  messages: [{
    id: "123ABC",
    content: "Hi, Byro! How can I help you?",
    role: "assistant",
    agent: "Triage Agent",
    timestamp: "Tue Jun 24 2025 00:16:13 GMT+0200 (Central European Summer Time)"
  }],
  events: [],
  context: {
    passenger_name: "Byro",
    account_number: "442679"
  },
  agents: [
    {
      name: "Triage Agent",
      description: "A triage agent that can delegate a customer's request to the appropriate agent.",
      handoffs: [],
      tools: [],
      input_guardrails: [
        "Relevance Guardrail",
        "Jailbreak Guardrail"
      ]
    },
    {
      name: "Booking Agent",
      description: "A helpful agent that can book flights.",
      handoffs: [],
      tools: [],
      input_guardrails: [
        "Relevance Guardrail",
        "Jailbreak Guardrail"
      ]
    },
    {
      name: "FAQ Agent",
      description: "A helpful agent that can answer questions about the airline",
      handoffs: [],
      tools: [],
      input_guardrails: [
        "Relevance Guardrail",
        "Jailbreak Guardrail"
      ]
    },
    {
      name: "Flight Status Agent",
      description: "A agent to provide flight status information.",
      handoffs: [],
      tools: [],
      input_guardrails: [
        "Relevance Guardrail",
        "Jailbreak Guardrail"
      ]
    }
  ],
  guardrails: [
    {
      id: "f1e2d3c4-b5a6-4789-8c7d-6e5f4a3b2c1d",
      name: "Relevance Guardrail",
      input: [],
      reasoning: "",
      passed: true,
      timestamp: "1750725739"
    },
    {
      id: "a2b3c4d5-e6f7-4890-9a1b-2c3d4e5f6a7b",
      name: "Jailbreak Guardrail",
      input: [],
      reasoning: "",
      passed: true,
      timestamp: "1750726536"
    }
  ]
}
