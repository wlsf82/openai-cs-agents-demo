module.exports = {
  conversation_id: "c8f7e6d5-4c3b-2a1f-9e8d-7c6b5a4e3d2f",
  current_agent: "Triage Agent",
  messages: [
    {
      id: "123ABC",
      content: "We have an available flight to NY tomorrow at 3pm.",
      role: "assistant",
      agent: "Triage Agent",
      timestamp: "Tue Jun 24 2025 00:17:13 GMT+0200 (Central European Summer Time)"
    },
    {
      id: "123ABC",
      content: "How does that sound to you?",
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
      id: "b2c3d4e5-f6a7-4890-9a1b-2c3d4e5f6a7b",
      name: "Relevance Guardrail",
      input: [],
      reasoning: "",
      passed: true,
      timestamp: "1750725739"
    },
    {
      id: "c3d4e5f6-a7b8-4901-9b2c-3d4e5f6a7b8c",
      name: "Jailbreak Guardrail",
      input: [],
      reasoning: "",
      passed: true,
      timestamp: "1750726536"
    }
  ]
}
