const chatObj = require('../fixtures/chat')

describe('Airline Co.', {viewportWidth: 1800, viewportHeight: 1520}, () => {
  beforeEach(() => {
    cy.intercept('POST', '/chat', chatObj).as('chatResponse')
    cy.visit('/')
    cy.wait('@chatResponse')

    cy.contains('h2', 'Available Agents')
      .should('be.visible')
      .next()
      .as('agents')
      .find('div:contains(Triage Agent)')
      .should('be.visible')
      .and('contains.text', 'Active')

    cy.contains('h2', 'Customer View')
      .should('be.visible')
      .parent()
      .next()
      .as('chatHistory')
      .find('div:contains(Hi, Byro! How can I help you?)')
      .should('be.visible')
  })

  it('simulates a chat between customer and multiple agents', () => {
    const randomDelay = Math.floor(Math.random() * (3500 - 500 + 1)) + 500

    cy.intercept('POST', '/chat', { delay: randomDelay, fixture: 'chat2' }).as('chatResponse2')

    cy.get('textarea[placeholder="Message..."]')
      .type('What is your next available flight to NY?', { delay: 50 })
    cy.get('button').click()
    cy.wait('@chatResponse2')

    cy.get('@chatHistory')
      .find('div:contains(We have an available flight to NY tomorrow at 3pm.)')
      .should('be.visible')
    cy.get('@chatHistory')
      .find('div:contains(How does that sound to you?)')
      .should('be.visible')

    cy.intercept('POST', '/chat', { delay: randomDelay, fixture: 'chat3' }).as('chatResponse3')

    cy.get('textarea[placeholder="Message..."]')
      .type('Sound good.', { delay: 50 })
    cy.get('button').click()
    cy.wait('@chatResponse3')

    cy.get('@chatHistory')
      .find('div:contains(Alright.)')
      .should('be.visible')
    cy.get('@chatHistory')
      .find('div:contains(I\'ll transfer you to the Booking Agent so they can assit you with booking your flight, ok?)')
      .should('be.visible')

    cy.intercept('POST', '/chat', { delay: randomDelay, fixture: 'chat4' }).as('chatResponse4')

    cy.get('textarea[placeholder="Message..."]')
      .type('Ok.', { delay: 50 })
    cy.get('button').click()
    cy.wait('@chatResponse4')

    cy.get('@chatHistory')
      .find('div:contains(Hey Byro, I\'m the Booking Agent and I\'ll book your flight to NY tomorrow at 3pm.)')
      .should('be.visible')
    cy.get('@chatHistory')
      .find('div:contains(Can you please send your your passport number?)')
      .should('be.visible')

    cy.intercept('POST', '/chat', { delay: randomDelay, fixture: 'chat5' }).as('chatResponse5')

    cy.get('textarea[placeholder="Message..."]')
      .type('Sure. He it is: XX555444', { delay: 50 })
    cy.get('button').click()
    cy.wait('@chatResponse5')

    cy.get('@chatHistory')
      .find('div:contains(There you go.)')
      .should('be.visible')
    cy.get('@chatHistory')
      .find('div:contains(You are booked for tomorrow at 3pm for the flight number JK333 to NY.)')
      .should('be.visible')
    cy.get('@chatHistory')
      .find('div:contains(Your seat nuber is: 3A.)')
      .should('be.visible')
    cy.get('@chatHistory')
      .find('div:contains(Have a good flight!)')
      .should('be.visible')

    cy.intercept('POST', '/chat', { delay: randomDelay, fixture: 'chat6' }).as('chatResponse6')

    cy.get('textarea[placeholder="Message..."]')
      .type('I have a quick question. Do they have vegan food options during the flight', { delay: 50 })

    cy.get('button').click()
    cy.wait('@chatResponse6')

    cy.get('@chatHistory')
      .find('div:contains(I\'ll have to transfer you to our FAQ Agent.)')
      .should('be.visible')
    cy.get('@chatHistory')
      .find('div:contains(Is that ok?)')
      .should('be.visible')

    cy.intercept('POST', '/chat', { delay: randomDelay, fixture: 'chat7' }).as('chatResponse7')

    cy.get('textarea[placeholder="Message..."]')
      .type('Sure thing.', { delay: 50 })

    cy.get('button').click()
    cy.wait('@chatResponse7')

    cy.get('@chatHistory')
      .find('div:contains(Hi Byro, I\'m glad to inform you we will have vegan options at tomorrow\'s flgith to NY.)')
      .should('be.visible')
    cy.get('@chatHistory')
      .find('div:contains(Is there anything else I can help you with?)')
      .should('be.visible')

    cy.intercept('POST', '/chat', { delay: randomDelay, fixture: 'chat8' }).as('chatResponse8')

    cy.get('textarea[placeholder="Message..."]')
      .type('Write me a poem about a delayed flight.', { delay: 50 })

    cy.get('button').click()
    cy.wait('@chatResponse8')

    cy.get('@chatHistory')
      .find('div:contains(I can\'t do that.)')
      .should('be.visible')
    cy.get('@chatHistory')
      .find('div:contains(But if you have questions related to flights, bookings, baggage, check-in, flight status, policies, loyalty programs, etc. I\'ll be happy to help.)')
      .should('be.visible')
  })

  it('hides and shows the agents', () => {
    cy.get('.lucide-chevron-down')
      .first()
      .click()

    cy.get('@agents').should('not.exist')

    cy.get('.lucide-chevron-right').click()

    cy.get('@agents')
      .should('be.visible')
      .find('div:contains(Triage Agent)')
      .should('be.visible')
      .and('contains.text', 'Active')

    cy.get('@agents')
      .should('be.visible')
      .find('div:contains(Booking Agent)')
      .should('be.visible')

    cy.get('@agents')
      .should('be.visible')
      .find('div:contains(FAQ Agent)')
      .should('be.visible')

    cy.get('@agents')
      .should('be.visible')
      .find('div:contains(Flight Status Agent)')
      .should('be.visible')
  })

  it('hides and shows the guardrails', () => {
    cy.get('.lucide-chevron-down')
      .eq(1)
      .click()

    cy.contains('h2', 'Guardrails')
      .should('be.visible')
      .next()
      .should('not.exist')

    cy.get('.lucide-chevron-right').click()

    cy.contains('h2', 'Guardrails')
      .should('be.visible')
      .next()
      .as('context')
      .should('be.visible')
      .find('div:contains(Relevance Guardrail)')
      .should('be.visible')
      .and('contain', 'Passed')

    cy.get('@context')
      .should('be.visible')
      .find('div:contains(Jailbreak Guardrail)')
      .should('be.visible')
      .and('contain', 'Passed')
  })

  it('hides and shows the conversation context', () => {
    cy.get('.lucide-chevron-down')
      .eq(2)
      .click()

    cy.contains('h2', 'Conversation Context')
      .should('be.visible')
      .next()
      .should('not.exist')

    cy.get('.lucide-chevron-right').click()

    cy.contains('h2', 'Conversation Context')
      .should('be.visible')
      .next()
      .as('context')
      .should('be.visible')
      .find('div:contains(passenger_name: Byro)')
      .should('be.visible')

    cy.get('@context')
      .should('be.visible')
      .find('div:contains(account_number: 442679)')
      .should('be.visible')
  })

  it('shows no runner output', () => {
    cy.contains('h2', 'Runner Output')
      .should('be.visible')
      .next()
      .find('.text-card-foreground')
      .should('not.exist')
  })
})
