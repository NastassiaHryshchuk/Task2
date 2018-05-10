describe('The Home Page', () => {
  it('should have a header', () => {
    cy.visit('/');

    cy.get('h2')
      .should('have.text', 'Find your move');
  });
});
