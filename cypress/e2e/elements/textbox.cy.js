describe('test textbox element', {testIsolation: false}, () => {
  
  it('goes to demoqa website', () => {
    cy.visit('https://demoqa.com/')
    cy.url().should('contain', 'demoqa')
  })

  it('select elements by clicking elements card', () => {
    cy.get('.category-cards > :nth-child(1)').click()
    cy.url().should('contain', '/elements')
  })

  it('Textbox must be found under Element header wrapper',() => {
    cy.get(':nth-child(1) > .group-header > .header-wrapper').invoke('text').should('contain', 'Elements')
  })

  it('select Textbox',() => {
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').should('contain', 'Text Box').click()
  })

  it('check contents of Text Box',() => {
    cy.get('.text-center').should('contain', 'Text Box')
  })

  it('check full name input',() => {
    cy.get('#userName-label').should('contain', 'Full Name')
    cy.get('#userName').then(($list) => {
      cy.wrap($list)
        .should('be.visible')
        .and('not.be.disabled')
        .and('have.attr', 'id', 'userName')
        .and('have.attr', 'autocomplete', 'off')
        .and('have.attr', 'type', 'text')
        .and('have.attr', 'placeholder', 'Full Name')
    })
  })

  it('check email input',() => {
    cy.get('#userEmail-label').should('contain', 'Email')
    cy.get('#userEmail').then(($list) => {
      cy.wrap($list)
        .should('be.visible')
        .and('not.be.disabled')
        .and('have.attr', 'id', 'userEmail')
        .and('have.attr', 'autocomplete', 'off')
        .and('have.attr', 'type', 'email')
        .and('have.attr', 'placeholder', 'name@example.com')
    })
  })

  it('check current address input',() => {
      cy.get('#currentAddress-label').should('contain', 'Current Address')
      cy.get('#currentAddress').then(($list) => {
        cy.wrap($list)
          .should('be.visible')
          .and('not.be.disabled')
          .and('have.attr', 'id', 'currentAddress')
          .and('have.attr', 'class', 'form-control')
          .and('have.attr', 'placeholder', 'Current Address')
      })
  })

  it('check permanent address input',() => {
    cy.get('#permanentAddress-label').should('contain', 'Permanent Address')
    cy.get('#permanentAddress').then(($list) => {
      cy.wrap($list)
        .should('be.visible')
        .and('not.be.disabled')
        .and('have.attr', 'id', 'permanentAddress')
        .and('have.attr', 'class', 'form-control')
        .and('have.attr', 'placeholder', 'Permanent Address')
    })
  })

})