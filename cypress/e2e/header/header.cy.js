import { Header } from "../data/UIListHeader";
import "cypress-real-events/support";
import { RegisterLogin } from "../data/UIListLoginRegister";

describe('Header functionality', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    context('Login and register buttons', () => {

        it(`I can validate register button is visible and workable`, () => {
            checkRegisterFunctionality(Header, RegisterLogin);
        });

        it(`I can validate login button is visible and workable`, () => {
            checkLoginFunctionality(Header, RegisterLogin);
        });
    });

    context('Header Sections', () => {

        it(`I can validate Plant & Offset section is visible and workable`, () => {
            checkPlantOffsetFunctionality(Header);
        });

        it(`I can validate Trees section is visible and workable`, () => {
            checkTreesFunctionality(Header);
        });

        it(`I can validate Projects section is visible and workable`, () => {
            checkProjectsFunctionality(Header);
        });

        it(`I can validate About section is visible and workable`, () => {
            checkAboutFunctionality(Header);
        });

        it(`I can validate Community section is visible and workable`, () => {
            checkCommunityFunctionality(Header);
        });
    });

    context('Header Sub-Sections', () => {

        it(`I can validate Projects sub-sections are visible and workable`, () => {
            checkProjectsListSubSectionFunctionality(Header);
            checkProjectsUpdatesSubSectionFunctionality(Header);
        });

        it(`I can validate About sub-sections are visible and workable`, () => {
            checkAboutUsSubSectionFunctionality(Header);
            checkOurBlogSubSectionFunctionality(Header);
            checkWhyPlantTreesSubSectionFunctionality(Header);
            checkLearnMoreSubSectionFunctionality(Header);
            checkKnowledgeBaseSubSectionFunctionality(Header);

        });

        it(`I can validate Community sub-sections are visible and workable`, () => {
            checkForumSubSectionFunctionality(Header);
            checkSeedsGameSubSectionFunctionality(Header);
            checkExploreSubSectionFunctionality(Header);

        });
    });

});

const checkRegisterFunctionality = (Header, RegisterLogin) => {
    cy.get(Header.registerButton).should('be.visible').click().then(() => {
        cy.get(RegisterLogin.registerLoginPopUp).should('be.visible');
    });
}

const checkLoginFunctionality = (Header, RegisterLogin) => {
    cy.get(Header.loginButton).should('be.visible').click().then(() => {
        cy.get(RegisterLogin.registerLoginPopUp).should('be.visible');
    });
}
const checkPlantOffsetFunctionality = (Header) => {
    cy.get(Header.headerSection).contains('Plant & Offset').should('be.visible').click().then(() => {
        cy.url().should('eq', 'https://tree-nation.com/plant-citizens');
        cy.contains('Select a planting option');
    });
}
const checkTreesFunctionality = (Header) => {
    cy.get(Header.headerSection).contains('Trees').should('be.visible').click().then(() => {
        cy.url().should('eq', 'https://tree-nation.com/hashtag/RoadtripOffset');
        cy.contains('trees planted for');
    });
}
const checkProjectsFunctionality = (Header) => {
    cy.get(Header.headerSection).contains('Projects').should('be.visible').click().then(() => {
        cy.url().should('eq', 'https://tree-nation.com/projects');
        cy.contains('Reforestation projects');
    });
}
const checkProjectsListSubSectionFunctionality = (Header) => {
    cy.get(Header.headerSection).contains('Projects').realHover('mouse');
    cy.get(Header.headerSubSection).contains('Projects List').should('be.visible').click().then(() => {
        cy.url().should('eq', 'https://tree-nation.com/projects');
        cy.contains('Reforestation projects');
    });
}
const checkProjectsUpdatesSubSectionFunctionality = (Header) => {
    cy.get(Header.headerSection).contains('Projects').realHover('mouse');
    cy.get(Header.headerSubSection).contains('Projects Updates').should('be.visible').click().then(() => {
        cy.url().should('eq', 'https://tree-nation.com/projects/updates');
        cy.contains('Reforestation projects');
    });
}
const checkAboutFunctionality = (Header) => {
    cy.get(Header.headerSection).contains('About').should('be.visible').click().then(() => {
        cy.url().should('eq', 'https://tree-nation.com/projects/inside-tree-nation/updates');
        cy.contains('Discover the Tree-Nation updates on how we manage the platform from the inside. Ask us questions and even leave your testimonials!');
    });
}
const checkAboutUsSubSectionFunctionality = (Header) => {
    cy.get(Header.headerSection).contains('About').realHover('mouse');
    cy.get(Header.headerSubSection).contains('About Us').should('be.visible').click().then(() => {
        cy.url().should('eq', 'https://tree-nation.com/about-us');
        cy.contains('About Tree-Nation');
    });
}

const checkOurBlogSubSectionFunctionality = (Header) => {
    cy.get(Header.headerSection).contains('About').realHover('mouse');
    cy.get(Header.headerSubSection).contains('Our Blog').should('be.visible').click().then(() => {
        cy.url().should('eq', 'https://tree-nation.com/projects/inside-tree-nation/updates');
        cy.contains('Discover the Tree-Nation updates on how we manage the platform from the inside. Ask us questions and even leave your testimonials!');
    });
}
const checkWhyPlantTreesSubSectionFunctionality = (Header) => {
    cy.get(Header.headerSection).contains('About').realHover('mouse');
    cy.get(Header.headerSubSection).contains('Why Plant Trees').should('be.visible').click().then(() => {
        cy.url().should('eq', 'https://tree-nation.com/why-plant-trees');
        cy.contains('Why plant trees');
    });
}
const checkLearnMoreSubSectionFunctionality = (Header) => {
    cy.get(Header.headerSection).contains('About').realHover('mouse');
    cy.get(Header.headerSubSection).contains('Learn More').should('be.visible').click().then(() => {
        cy.url().should('eq', 'https://tree-nation.com/discover-for-citizens');
        cy.contains('Tree-Nation features');
    });
}
const checkKnowledgeBaseSubSectionFunctionality = (Header) => {
    cy.get(Header.headerSection).contains('About').realHover('mouse');
    cy.get(Header.headerSubSection).contains('Knowledge Base').should('be.visible').click();
}
const checkCommunityFunctionality = (Header) => {
    cy.get(Header.headerSection).contains('Community').should('be.visible').click().then(() => {
        cy.url().should('eq', 'https://tree-nation.com/forum');
        cy.contains('Forum');
    });
}
const checkForumSubSectionFunctionality = (Header) => {
    cy.get(Header.headerSection).contains('Community').realHover('mouse');
    cy.get(Header.headerSubSection).contains('Forum').should('be.visible').click().then(() => {
        cy.url().should('eq', 'https://tree-nation.com/forum');
        cy.contains('Forum');
    });
}
const checkSeedsGameSubSectionFunctionality = (Header) => {
    cy.get(Header.headerSection).contains('Community').realHover('mouse');
    cy.get(Header.headerSubSection).contains('Seeds Game').should('be.visible').click().then(() => {
        cy.url().should('eq', 'https://tree-nation.com/seeds');
        cy.contains('Seeds Game');
    });
}
const checkExploreSubSectionFunctionality = (Header) => {
    cy.get(Header.headerSection).contains('Community').realHover('mouse');
    cy.get(Header.headerSubSection).contains('Explore').should('be.visible').click().then(() => {
        cy.url().should('eq', 'https://tree-nation.com/reforestation-learning-database');
        cy.contains('Lexicon');
    });
}