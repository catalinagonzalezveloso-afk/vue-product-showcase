describe('Catálogo de productos', () => {
  it('permite filtrar productos por categoría', () => {
    cy.visit('/')
    cy.get('[data-cy="category-filter"]').click()
    cy.contains('jewelery').click()
    cy.get('[data-cy="product-card"]').should('exist')
  })
})