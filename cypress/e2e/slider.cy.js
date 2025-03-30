describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

describe('Slider Content Verification', function () {
  it('Verifies that each slide displays the correct title and description', function () {
    const slides = [
      { title: 'Rome', description: 'Italy' },
      { title: 'London', description: 'United Kingdom' },
      { title: 'Paris', description: 'France' }
    ];
    
    cy.visit('http://localhost:3000');

    cy.get('.swiper-slide-active').should('contain', slides[0].title)
      .and('contain', slides[0].description);
      
    slides.slice(1).forEach(slide => {
      cy.get('.swiper-button-next').click();
      cy.wait(2000);
      cy.get('.swiper-slide-active').should('contain', slide.title)
        .and('contain', slide.description);
    });
  });
});