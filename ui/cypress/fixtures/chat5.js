module.exports = {
  conversation_id: "f1a2b3c4-d5e6-7f8a-9b0c-1d2e3f4a5b6c",
  current_agent: "Booking Agent",
  messages: [
    {
      id: "123ABC",
      content: "There you go.",
      role: "assistant",
      agent: "Booking Agent",
      timestamp: "Tue Jun 24 2025 00:17:15 GMT+0200 (Central European Summer Time)"
    },
    {
      id: "123ABC",
      content: "You are booked for tomorrow at 3pm for the flight number JK333 to NY.",
      role: "assistant",
      agent: "Booking Agent",
      timestamp: "Tue Jun 24 2025 00:17:15 GMT+0200 (Central European Summer Time)"
    },
    {
      id: "123ABC",
      content: "Your seat nuber is: 3A.",
      role: "assistant",
      agent: "Booking Agent",
      timestamp: "Tue Jun 24 2025 00:17:15 GMT+0200 (Central European Summer Time)"
    },
    {
      id: "123ABC",
      content: "Have a good flight!",
      role: "assistant",
      agent: "Booking Agent",
      timestamp: "Tue Jun 24 2025 00:17:15 GMT+0200 (Central European Summer Time)"
    }
  ]
  ,
  events: [
    {
      id: "b3e4f5a6-c7d8-4e9f-8b0a-1c2d3e4f5a6b",
      type: "context_update",
      agent: "Booking Agent",
      content: "Client Byro is scheduled to flight to NY tomorrow at 3pm at flight JK333 at seat 3A.",
      timestamp: "Tue Jun 24 2025 00:16:13 GMT+0200 (Central European Summer Time)",
      metadata: {
        source_agent: "string",
        target_agent: "string",
        tool_name: "string",
        tool_args: ["Record<string, any>"],
        tool_result: "any",
        context_key: "string",
        context_value: "any",
        changes: ""
      }
    }
  ],
  context: {
    passenger_name: "Byro",
    confirmation_number: "8875",
    seat_number: "3A",
    flight_number: "JK333",
    account_number: "442679",
    passport_number: "XX555444"
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
      id: "e7f8a9b0-c1d2-4134-9e5f-6a7b8c9d0e1f",
      name: "Relevance Guardrail",
      input: [],
      reasoning: "",
      passed: true,
      timestamp: "1750725739"
    },
    {
      id: "f8a9b0c1-d2e3-4245-9f6a-7b8c9d0e1f2a",
      name: "Jailbreak Guardrail",
      input: [],
      reasoning: "",
      passed: true,
      timestamp: "1750726536"
    }
  ]
}
