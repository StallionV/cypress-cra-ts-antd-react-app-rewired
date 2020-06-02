describe('My First Test', () => {
  it('Has something', () => {
    cy.visit('http://localhost:7000')
      .contains(/content/i)
      .should('exist')
    cy.contains(/cypress demo test/i).should('exist')
  })
})
export {}
