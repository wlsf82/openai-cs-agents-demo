module.exports = {
  conversation_id: "a9b8c7d6-e5f4-4a3b-9c2d-1e0f2a3b4c5d",
  current_agent: "FAQ Agent",
  messages: [
    {
      id: "123ABC",
      content: "I can't do that.",
      role: "assistant",
      agent: "FAQ Agent",
      timestamp: "Tue Jun 24 2025 00:17:15 GMT+0200 (Central European Summer Time)"
    },
    {
      id: "123ABC",
      content: "But if you have questions related to flights, bookings, baggage, check-in, flight status, policies, loyalty programs, etc. I'll be happy to help.",
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
      id: "c1d2e3f4-a5b6-4c7d-8e9f-0a1b2c3d4e5f",
      name: "Relevance Guardrail",
      input: [],
      reasoning: "",
      passed: false,
      timestamp: "1750725739"
    },
    {
      id: "d2e3f4a5-b6c7-4d8e-9f0a-1b2c3d4e5f6a",
      name: "Jailbreak Guardrail",
      input: [],
      reasoning: "",
      passed: true,
      timestamp: "1750726536"
    }
  ]
}
