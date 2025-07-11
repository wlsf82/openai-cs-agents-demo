module.exports = {
  conversation_id: "d9e8f7c6-b5a4-3e2d-1c0b-9a8e7d6c5b4a",
  current_agent: "Triage Agent",
  messages: [
    {
      id: "123ABC",
      content: "Alright.",
      role: "assistant",
      agent: "Triage Agent",
      timestamp: "Tue Jun 24 2025 00:17:13 GMT+0200 (Central European Summer Time)"
    },
    {
      id: "123ABC",
      content: "I'll transfer you to the Booking Agent so they can assit you with booking your flight, ok?",
      role: "assistant",
      agent: "Triage Agent",
      timestamp: "Tue Jun 24 2025 00:17:15 GMT+0200 (Central European Summer Time)"
    }
  ]
  ,
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
      id: "d4e5f6a7-b8c9-4012-9c3d-4e5f6a7b8c9d",
      name: "Relevance Guardrail",
      input: [],
      reasoning: "",
      passed: true,
      timestamp: "1750725739"
    },
    {
      id: "e5f6a7b8-c9d0-4123-9d4e-5f6a7b8c9d0e",
      name: "Jailbreak Guardrail",
      input: [],
      reasoning: "",
      passed: true,
      timestamp: "1750726536"
    }
  ]
}
