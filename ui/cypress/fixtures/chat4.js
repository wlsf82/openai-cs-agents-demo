module.exports = {
  conversation_id: "e0f1a2b3-c4d5-6e7f-8a9b-0c1d2e3f4a5b",
  current_agent: "Booking Agent",
  messages: [
    {
      id: "123ABC",
      content: "Hey Byro, I'm the Booking Agent and I'll book your flight to NY tomorrow at 3pm.",
      role: "assistant",
      agent: "Booking Agent",
      timestamp: "Tue Jun 24 2025 00:17:15 GMT+0200 (Central European Summer Time)"
    },
    {
      id: "123ABC",
      content: "Can you please send your your passport number?",
      role: "assistant",
      agent: "Booking Agent",
      timestamp: "Tue Jun 24 2025 00:17:15 GMT+0200 (Central European Summer Time)"
    }
  ]
  ,
  events: [
    {
      id: "f6a7b8c9-d0e1-4234-9e5f-6a7b8c9d0e1f",
      type: "handoffs",
      agent: "Triage Agent",
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
      id: "a1b2c3d4-e5f6-4789-8a1b-2c3d4e5f6a7b",
      type: "context_update",
      agent: "Booking Agent",
      content: "Client Byro wants to schedule a flight to NY for tomorrow at 3pm.",
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
      id: "b3c4d5e6-f7a8-4901-9b2c-3d4e5f6a7b8c",
      name: "Relevance Guardrail",
      input: [],
      reasoning: "",
      passed: true,
      timestamp: "1750725739"
    },
    {
      id: "c4d5e6f7-a8b9-4012-9c3d-4e5f6a7b8c9d",
      name: "Jailbreak Guardrail",
      input: [],
      reasoning: "",
      passed: true,
      timestamp: "1750726536"
    }
  ]
}
