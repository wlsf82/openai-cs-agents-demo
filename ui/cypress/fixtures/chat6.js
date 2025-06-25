module.exports = {
  conversation_id: "e3b5c7d9-1a2f-4e6b-8c3d-7f2a1b4c5d6e",
  current_agent: "Booking Agent",
  messages: [
    {
      id: "123ABC",
      content: "I'll have to transfer you to our FAQ Agent.",
      role: "assistant",
      agent: "Booking Agent",
      timestamp: "Tue Jun 24 2025 00:17:15 GMT+0200 (Central European Summer Time)"
    },
    {
      id: "123ABC",
      content: "Is that ok?",
      role: "assistant",
      agent: "Booking Agent",
      timestamp: "Tue Jun 24 2025 00:17:15 GMT+0200 (Central European Summer Time)"
    }
  ]
  ,
  events: [
    {
      id: "b1c2d3e4-f5a6-4b7c-8d9e-0f1a2b3c4d5e",
      type: "handoffs",
      agent: "Booking Agent",
      content: "",
      timestamp: "Tue Jun 24 2025 00:16:13 GMT+0200 (Central European Summer Time)",
      metadata: {
        source_agent: "string",
        target_agent: "string",
        tool_name: "string",
        tool_args: ["Record<string, any>"],
        tool_result: "any",
        context_key: "string",
        context_value: "any",
        changes: "Record<string, any>"
      }
    },
    {
      id: "c2d3e4f5-a6b7-4c8d-9e0f-1a2b3c4d5e6f",
      type: "context_update",
      agent: "FAQ Agent",
      content: "Client Byro wants to know if there will be vegan options at tomorrow's flight to NY at 3pm (flight number: JK333).",
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
