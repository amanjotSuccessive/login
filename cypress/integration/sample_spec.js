describe('My First Test', function() {
    it('Visits the login', function() {
      cy.visit('http://localhost:3000/login')
      
      cy.get('#loginName')
      .type('aman')
     // .should('have.value', 'aman')

      cy.get('#loginPassword')
      .type('123456')
      //.should('have.value', '123456')
      
      //cy.get('button').contains('Login').click() 
      /* or below */
      cy.contains('Login').click()
      
      cy.url().should('include', 'http://localhost:3000/dashBoard')
      cy.wait(500)
      cy.document()             
     cy.contains("Logout").click()
    //    cy.find('Logout') 
     //cy.get('input').contains('Logout').click();
      
     cy.url().should('include', 'http://localhost:3000/login')
    })
  })