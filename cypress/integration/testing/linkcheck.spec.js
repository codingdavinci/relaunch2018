/// <reference types="cypress" />
context('Link-Check', () => {
  it('Startseite', () =>{
    cy.visit('https://'+Cypress.env('user')+':'+Cypress.env('password')+'@test.codingdavinci.de/de');
    cy.get("a:not([href*='mailto:'])").each(item => {
      cy.request(item.prop("href"));
      cy.on('fail', (e) => {
    if (e.message.includes('cy.request() requires a url.')) {e
      return false
    }
    return true
  })
    });
  })

  it("Über - Was ist Coding da Vinci", () => {
    cy.visit('https://'+Cypress.env('user')+':'+Cypress.env('password')+'@test.codingdavinci.de/de/was-ist-coding-da-vinci');
    cy.get("a:not([href*='mailto:'])").each(item => {
      cy.request(item.prop("href"));
      cy.on('fail', (e) => {
    if (e.message.includes('cy.request() requires a url.')) {
      return false
    }
    return true
  })
    });
  });

  it("Über - Ziele Chancen und Challenges", () => {
    cy.visit('https://'+Cypress.env('user')+':'+Cypress.env('password')+'@test.codingdavinci.de/de/ziele-chancen-und-challenges');
    cy.get("a:not([href*='mailto:'])").each(item => {
      cy.request(item.prop("href"));
      cy.on('fail', (e) => {
    if (e.message.includes('cy.request() requires a url.')) {
      return false
    }
    return true
  })
    });
  });
  it("Über - Dokumentationen", () => {
    cy.visit('https://'+Cypress.env('user')+':'+Cypress.env('password')+'@test.codingdavinci.de/de/dokumentationen');
    cy.get("a:not([href*='mailto:'])").each(item => {
      cy.request(item.prop("href"));
      cy.on('fail', (e) => {
    if (e.message.includes('cy.request() requires a url.')) {
      return false
    }
    return true
  })
    });
  });
  it("Über - Wer steckt hinter Coding da Vinci", () => {
    cy.visit('https://'+Cypress.env('user')+':'+Cypress.env('password')+'@test.codingdavinci.de/de/wer-steckt-hinter-coding-da-vinci');
    cy.get("a:not([href*='mailto:'])").each(item => {
      cy.request(item.prop("href"));
      cy.on('fail', (e) => {
    if (e.message.includes('cy.request() requires a url.')) {
      return false
    }
    return true
  })
    });
  });

  it("Über - Presse", () => {
    cy.visit('https://'+Cypress.env('user')+':'+Cypress.env('password')+'@test.codingdavinci.de/de/presse');
    cy.get("a:not([href*='mailto:'])").each(item => {
      cy.request(item.prop("href"));
      cy.on('fail', (e) => {
    if (e.message.includes('cy.request() requires a url.')) {
      return false
    }
    return true
  })
    });
  });
  it("Events", () => {
    cy.visit('https://'+Cypress.env('user')+':'+Cypress.env('password')+'@test.codingdavinci.de/de/events');
    cy.get("a:not([href*='mailto:'])").each(item => {
      cy.request(item.prop("href"));
      cy.on('fail', (e) => {
    if (e.message.includes('cy.request() requires a url.')) {
      return false
    }
    return true
  })
    });
  });
  it("Daten", () => {
    cy.visit('https://'+Cypress.env('user')+':'+Cypress.env('password')+'@test.codingdavinci.de/de/daten');
    cy.get("a:not([href*='mailto:'])").each(item => {
      cy.request(item.prop("href"));
      cy.on('fail', (e) => {
    if (e.message.includes('cy.request() requires a url.')) {
      return false
    }
    return true
  })
    });
  });
  it("Projekte", () => {
    cy.visit('https://'+Cypress.env('user')+':'+Cypress.env('password')+'@test.codingdavinci.de/de/projekte');
    cy.get("a:not([href*='mailto:'])").each(item => {
      cy.request(item.prop("href"));
      cy.on('fail', (e) => {
    if (e.message.includes('cy.request() requires a url.')) {
      return false
    }
    return true
  })
    });
  });
  it("News", () => {
    cy.visit('https://'+Cypress.env('user')+':'+Cypress.env('password')+'@test.codingdavinci.de/de/news');
    cy.get("a:not([href*='mailto:'])").each(item => {
      cy.request(item.prop("href"));
      cy.on('fail', (e) => {
    if (e.message.includes('cy.request() requires a url.')) {
      return false
    }
    return true
  })
    });
  });
  it("Stipendien - Antrag und Bedingungen", () => {
    cy.visit('https://'+Cypress.env('user')+':'+Cypress.env('password')+'@test.codingdavinci.de/de/stipendien/antrag-und-bedingungen');
    cy.get("a:not([href*='mailto:'])").each(item => {
      cy.request(item.prop("href"));
      cy.on('fail', (e) => {
    if (e.message.includes('cy.request() requires a url.')) {
      return false
    }
    return true
  })
    });
  });
  it("Stipendien - Übersicht", () => {
    cy.visit('https://'+Cypress.env('user')+':'+Cypress.env('password')+'@test.codingdavinci.de/de/stipendien/uebersicht');
    cy.get("a:not([href*='mailto:'])").each(item => {
      cy.request(item.prop("href"));
      cy.on('fail', (e) => {
    if (e.message.includes('cy.request() requires a url.')) {
      return false
    }
    return true
  })
    });
  });
  it("FAQ", () => {
    cy.visit('https://'+Cypress.env('user')+':'+Cypress.env('password')+'@test.codingdavinci.de/de/faq');
    cy.get("a:not([href*='mailto:'])").each(item => {
      cy.request(item.prop("href"));
      cy.on('fail', (e) => {
    if (e.message.includes('cy.request() requires a url.')) {
      return false
    }
    return true
  })
    });
  });
  it("Impressum", () => {
    cy.visit('https://'+Cypress.env('user')+':'+Cypress.env('password')+'@test.codingdavinci.de/impressum-datenschutz');
    // cy.get("a:not([href*='mailto:'])").each(item => {
    //   cy.request(item.prop("href"));
    //   cy.on('fail', (e) => {
    // if (e.message.includes('cy.request() requires a url.')) {
    //   // we expected this error, so let's ignore it
    //   // and let the test continue
    //   return false
    // }
    // return true
  // })
    // });
  });
  it("Login", () => {
    cy.visit('https://'+Cypress.env('user')+':'+Cypress.env('password')+'@test.codingdavinci.de/de/user/login');
    cy.get("a:not([href*='mailto:'])").each(item => {
      cy.request(item.prop("href"));
      cy.on('fail', (e) => {
    if (e.message.includes('cy.request() requires a url.')) {
      return false
    }
    return true
  })
    });
  });

})