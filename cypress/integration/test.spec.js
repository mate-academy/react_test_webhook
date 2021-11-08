describe('Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have "Welcome" component', () => {
    cy.get('.welcome').should('exist');
  });

  it('should have "Sticky Header!" welcome text', () => {
    cy.get('.welcome__text').should('contain', 'Sticky Header!');
  });

  it('should have "Header" component', () => {
    cy.get('.header').should('exist');
  });

  it('should have header title "Site Name"', () => {
     cy.get('.header__title').should('contain', 'Site Name');
   });
  }
);
