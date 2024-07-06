describe('My First Test', () => {
  it('Does not do much!', () => {
    cy.visit("/")
    cy.get('[data-cy="order"]').click()
    cy.get('[data-cy="select-input"]').select('option1')
    cy.get('[type="checkbox"]').check().should('be.checked');
    cy.get('[data-cy="submit-button"]').click()
    cy.pause()
  })
})