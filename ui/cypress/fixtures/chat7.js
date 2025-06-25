module.exports = {
  conversation_id: "b2c1d3e4-f5a6-4b7c-8d9e-0f1a2b3c4d5e",
  current_agent: "FAQ Agent",
  messages: [
    {
      id: "123ABC",
      content: "Hi Byro, I'm glad to inform you we will have vegan options at tomorrow\'s flgith to NY.",
      role: "assistant",
      agent: "FAQ Agent",
      timestamp: "Tue Jun 24 2025 00:17:15 GMT+0200 (Central European Summer Time)"
    },
    {
      id: "123ABC",
      content: "Is there anything else I can help you with?",
      role: "assistant",
      agent: "FAQ Agent",
      timestamp: "Tue Jun 24 2025 00:17:15 GMT+0200 (Central European Summer Time)"
    }
  ]
  ,
  events: [],
  context: {
    passenger_name: "Byro",
    confirmation_number: "8875",
    seat_number: "3A",
    flight_number: "JK333",
    account_number: "442679",
    passport_number: "XX555444",
    vegan_food_available_at_the_flight: "true"
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
      id: "e6f7a8b9-c0d1-4e2f-9a3b-4c5d6e7f8a9b",
      name: "Relevance Guardrail",
      input: [],
      reasoning: "",
      passed: true,
      timestamp: "1750725739"
    },
    {
      id: "f7a8b9c0-d1e2-4f3a-9b4c-5d6e7f8a9b0c",
      name: "Jailbreak Guardrail",
      input: [],
      reasoning: "",
      passed: true,
      timestamp: "1750726536"
    }
  ]
}
