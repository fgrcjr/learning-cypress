describe('practice form', {testIsolation: false},() => {

    it('goes to demoqa website', () => {
        cy.visit('https://demoqa.com/')
        cy.url().should('contain', 'demoqa')
    })

    it('select elements by clicking forms card', () => {
        cy.get('.category-cards > :nth-child(2)').click()
        cy.url().should('contain', '/form')
    })

    it('click practice form',() => {
        cy.get(':nth-child(2) > .element-list > .menu-list > #item-0').click()
    })

    it('fillup form', () => {
        cy.get('#firstName').click()
        cy.get('#firstName').type('wee')

        cy.get('#lastName').click()
        cy.get('#lastName').type('wii')

        cy.get('#userEmail').click()
        cy.get('#userEmail').type('test@gmail.com')

        cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click()
        
        cy.get('#userNumber').click()
        cy.get('#userNumber').type('01239')

        const fileName = './images/deno.png'
        cy.get('#uploadPicture').attachFile(fileName);
    })

})