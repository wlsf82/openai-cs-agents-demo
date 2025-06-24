const chatObj = require('../fixtures/chat')

describe('Airline Co.', {viewportWidth: 1520, viewportHeight: 1280}, () => {
  beforeEach(() => {
    cy.intercept('POST', '/chat', chatObj).as('chatResponse')
    cy.visit('/')
    cy.wait('@chatResponse')

    cy.contains('h2', 'Available Agents')
      .should('be.visible')
      .next()
      .as('agents')
      .find('div:contains(C3PO)')
      .should('be.visible')
      .and('contains.text', 'Active')

    cy.contains('h2', 'Customer View')
      .should('be.visible')
      .parent()
      .next()
      .as('chatHistory')
      .find('div:contains(Hey, there! How can I help you?)')
      .should('be.visible')
  })

  it('simulates a chat between customer and multiple agents', () => {
    const randomDelay = Math.floor(Math.random() * (3000 - 500 + 1)) + 500

    cy.intercept('POST', '/chat', { delay: randomDelay, fixture: 'chat2' }).as('chatResponse2')

    cy.get('textarea[placeholder="Message..."]')
      .type('What is your next available flight to NY?', { delay: 50 })
    cy.get('button').click()
    cy.wait('@chatResponse2')

    cy.get('@chatHistory')
      .find('div:contains(We have one tomorrow at 3pm.)')
      .should('be.visible')
    cy.get('@chatHistory')
      .find('div:contains(Does that work for you?)')
      .should('be.visible')

    cy.intercept('POST', '/chat', { delay: randomDelay, fixture: 'chat3' }).as('chatResponse3')

    cy.get('textarea[placeholder="Message..."]')
      .type('Sound good.', { delay: 15 })
    cy.get('button').click()
    cy.wait('@chatResponse3')

    cy.get('@chatHistory')
      .find('div:contains(Alright.)')
      .should('be.visible')
    cy.get('@chatHistory')
      .find('div:contains(I\'ll transfer you to R2D2 so he can assit you with booking your flight, ok?)')
      .should('be.visible')

    cy.intercept('POST', '/chat', { delay: randomDelay, fixture: 'chat4' }).as('chatResponse4')

    cy.get('textarea[placeholder="Message..."]')
      .type('Ok.', { delay: 50 })
    cy.get('button').click()
    cy.wait('@chatResponse4')

    cy.get('@chatHistory')
      .find('div:contains(Hey Byro, I\'m R2D2 and I\'ll book your flight to NY tomorrow at 3pm.)')
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
      .find('div:contains(You are booked for tomorrow at 3pm for the flight number AB123 to NY.)')
      .should('be.visible')
    cy.get('@chatHistory')
      .find('div:contains(Your seat nuber is: 5A.)')
      .should('be.visible')
    cy.get('@chatHistory')
      .find('div:contains(Have a good flight!)')
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
      .find('div:contains(C3PO)')
      .should('be.visible')
      .and('contains.text', 'Active')

    cy.get('@agents')
      .should('be.visible')
      .find('div:contains(R2D2)')
      .should('be.visible')

    cy.get('@agents')
      .should('be.visible')
      .find('div:contains(BB8)')
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

  it('shows four runner output', () => {
    cy.contains('h2', 'Runner Output')
      .should('be.visible')
      .next()
      .find('.text-card-foreground')
      .should('have.length', 1)
      .and('be.visible')
  })
})
