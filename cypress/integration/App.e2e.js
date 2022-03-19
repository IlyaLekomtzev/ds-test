describe('Main', () => {
   it('should have required DOM-elements', () => {
       cy.visit('/');

       cy.get('header').should('exist');
       cy.get('section.page').should('exist');
       cy.get('div.board').should('exist');
       cy.get('div.column').should('exist');
   });

    it('should redirect to the main page with a non-existent route', () => {
        cy.visit('/test');

        cy.url().should('eq', 'http://localhost:3000/');
    });

    it('should open detail page', () => {
        cy.visit('/');

        cy.get('a.card-link').then((links) => {
            const link = links[0];
            link.click();
            cy.url().should('eq', link.href);

            cy.get('div.details-info').should('exist');
            cy.get('nav.details-info__breadcrumb').should('exist');
        });
    });
});