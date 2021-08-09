/// <reference types="cypress" />
context('Link-Check', () => {
  it('Startseite', () =>{
    cy.visit('https://codingdavinci.de/de');
    cy.get("a:not([href*='mailto:'])").each(item => {
      cy.request(item.prop("href"));
      cy.on('fail', (e) => {
    if (e.message.includes('cy.request() requires a url.')) {
      // we expected this error, so let's ignore it
      // and let the test continue
      return false
    }
    return true
    // on any other error message the test fails
  })
    });
  })

  it("Über - Was ist Coding da Vinci", () => {
    cy.visit('https://codingdavinci.de/de/was-ist-coding-da-vinci');
    cy.get("a:not([href*='mailto:'])").each(item => {
      cy.request(item.prop("href"));
      cy.on('fail', (e) => {
    if (e.message.includes('cy.request() requires a url.')) {
      // we expected this error, so let's ignore it
      // and let the test continue
      return false
    }
    return true
    // on any other error message the test fails
  })
    });
  });

  it("Über - Ziele Chancen und Challenges", () => {
    cy.visit('https://codingdavinci.de/de/ziele-chancen-und-challenges');
    cy.get("a:not([href*='mailto:'])").each(item => {
      cy.request(item.prop("href"));
      cy.on('fail', (e) => {
    if (e.message.includes('cy.request() requires a url.')) {
      // we expected this error, so let's ignore it
      // and let the test continue
      return false
    }
    return true
    // on any other error message the test fails
  })
    });
  });
  it("Über - Dokumentationen", () => {
    cy.visit('https://codingdavinci.de/de/dokumentationen');
    cy.get("a:not([href*='mailto:'])").each(item => {
      cy.request(item.prop("href"));
      cy.on('fail', (e) => {
    if (e.message.includes('cy.request() requires a url.')) {
      // we expected this error, so let's ignore it
      // and let the test continue
      return false
    }
    return true
    // on any other error message the test fails
  })
    });
  });
  it("Über - Wer steckt hinter Coding da Vinci", () => {
    cy.visit('https://codingdavinci.de/de/wer-steckt-hinter-coding-da-vinci');
    cy.get("a:not([href*='mailto:'])").each(item => {
      cy.request(item.prop("href"));
      cy.on('fail', (e) => {
    if (e.message.includes('cy.request() requires a url.')) {
      // we expected this error, so let's ignore it
      // and let the test continue
      return false
    }
    return true
    // on any other error message the test fails
  })
    });
  });

  it("Über - Presse", () => {
    cy.visit('https://codingdavinci.de/de/presse');
    cy.get("a:not([href*='mailto:'])").each(item => {
      cy.request(item.prop("href"));
      cy.on('fail', (e) => {
    if (e.message.includes('cy.request() requires a url.')) {
      // we expected this error, so let's ignore it
      // and let the test continue
      return false
    }
    return true
    // on any other error message the test fails
  })
    });
  });
  it("Events", () => {
    cy.visit('https://codingdavinci.de/de/events');
    cy.get("a:not([href*='mailto:'])").each(item => {
      cy.request(item.prop("href"));
      cy.on('fail', (e) => {
    if (e.message.includes('cy.request() requires a url.')) {
      // we expected this error, so let's ignore it
      // and let the test continue
      return false
    }
    return true
    // on any other error message the test fails
  })
    });
  });
  it("Daten", () => {
    cy.visit('https://codingdavinci.de/de/daten');
    cy.get("a:not([href*='mailto:'])").each(item => {
      cy.request(item.prop("href"));
      cy.on('fail', (e) => {
    if (e.message.includes('cy.request() requires a url.')) {
      // we expected this error, so let's ignore it
      // and let the test continue
      return false
    }
    return true
    // on any other error message the test fails
  })
    });
  });
  it("Projekte", () => {
    cy.visit('https://codingdavinci.de/de/projekte');
    cy.get("a:not([href*='mailto:'])").each(item => {
      cy.request(item.prop("href"));
      cy.on('fail', (e) => {
    if (e.message.includes('cy.request() requires a url.')) {
      // we expected this error, so let's ignore it
      // and let the test continue
      return false
    }
    return true
    // on any other error message the test fails
  })
    });
  });
  it("News", () => {
    cy.visit('https://codingdavinci.de/de/news');
    cy.get("a:not([href*='mailto:'])").each(item => {
      cy.request(item.prop("href"));
      cy.on('fail', (e) => {
    if (e.message.includes('cy.request() requires a url.')) {
      // we expected this error, so let's ignore it
      // and let the test continue
      return false
    }
    return true
    // on any other error message the test fails
  })
    });
  });
  it("Stipendien - Antrag und Bedingungen", () => {
    cy.visit('https://codingdavinci.de/de/stipendien/antrag-und-bedingungen');
    cy.get("a:not([href*='mailto:'])").each(item => {
      cy.request(item.prop("href"));
      cy.on('fail', (e) => {
    if (e.message.includes('cy.request() requires a url.')) {
      // we expected this error, so let's ignore it
      // and let the test continue
      return false
    }
    return true
    // on any other error message the test fails
  })
    });
  });
  it("Stipendien - Übersicht", () => {
    cy.visit('https://codingdavinci.de/de/stipendien/uebersicht');
    cy.get("a:not([href*='mailto:'])").each(item => {
      cy.request(item.prop("href"));
      cy.on('fail', (e) => {
    if (e.message.includes('cy.request() requires a url.')) {
      // we expected this error, so let's ignore it
      // and let the test continue
      return false
    }
    return true
    // on any other error message the test fails
  })
    });
  });
  it("FAQ", () => {
    cy.visit('https://codingdavinci.de/de/faq');
    cy.get("a:not([href*='mailto:'])").each(item => {
      cy.request(item.prop("href"));
      cy.on('fail', (e) => {
    if (e.message.includes('cy.request() requires a url.')) {
      // we expected this error, so let's ignore it
      // and let the test continue
      return false
    }
    return true
    // on any other error message the test fails
  })
    });
  });
  it("Impressum", () => {
    cy.visit('https://codingdavinci.de/impressum-datenschutz');
    // cy.get("a:not([href*='mailto:'])").each(item => {
    //   cy.request(item.prop("href"));
    //   cy.on('fail', (e) => {
    // if (e.message.includes('cy.request() requires a url.')) {
    //   // we expected this error, so let's ignore it
    //   // and let the test continue
    //   return false
    // }
    // return true
    // on any other error message the test fails
  // })
    // });
  });
  it("Login", () => {
    cy.visit('https://codingdavinci.de/de/user/login');
    cy.get("a:not([href*='mailto:'])").each(item => {
      cy.request(item.prop("href"));
      cy.on('fail', (e) => {
    if (e.message.includes('cy.request() requires a url.')) {
      // we expected this error, so let's ignore it
      // and let the test continue
      return false
    }
    return true
    // on any other error message the test fails
  })
    });
  });

})