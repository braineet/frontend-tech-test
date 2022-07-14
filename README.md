# New frontend technical test

# Introduction

---

Welcome to the **Braineet Frontend Technical Test**. In this test, the candidate
has to create a small frontend application using the technologies that we at
Braineet use in our daily routine.

# \***\*What is the candidate going to develop?\*\***

---

This technical test is about creating a simple front-end application that
retrieves data from a server and displays a list of entities. The candidate will
use the Star Wars API to list the various characters, and the candidate must
allow the user to search for a character by name. The main page should::

-   On start up, show an empty page with no results
-   When the user searches for a character by typing in the search box and
    pressing Enter, a list of 6 results is displayed. The results displayed
    should contain characters whose name begins with the text entered by the
    user in the search box.
-   At the bottom of the page, when there are more results, a simple pagination
    system is displayed that allows the user to see more results.

# Mockup

---

Below is a low-fidelity mockup of the application to give you an idea of how the
application should work. This does not mean that the applicant's test must be
exactly identical to the design, this test does not assess the applicant's
ability to create web applications that are pixel perfect. However, it does
assess general consistency in style, spacing, and sizes.

Each result displays:

-   Character's image
-   Character's name
-   Switch to add/remove the character on favoris

The Pagination component should be present at the bottom of the page. It is the
candidate's responsibility to define the design of this component and how it
will work. The requirement for this component is that it allows the user to
navigate between pages.

For the switch, the candidate must create a UI package in the repo that contains
this switch component and use it in the app.

![App mockup](mockup.png)

# \***\*Acceptance criteria\*\***

---

For this test to be completed, the candidate's application should:

-   Allow the user to search for star wars characters by their name
-   Display a list of 6 results, each of them with an image, title and Switch to
    add/remove the character in favoris.
-   A Switch component that allow to add/remove the character in favoris by
    using the localStorage
-   A pagination component that allows the user to navigate between pages.

These features are what Braineet needs to consider this test complete, and the
candidate should focus on developing these features before developing other
features. If the search or pagination functions do not work or are not
developed, the test will be considered incomplete and the final score will be
affected.

The candidate should not control how much time he needs for the exam. Each
candidate may take as much time as he or she wishes (as long as it is within the
reasonable time frame of the braineet setting schedule), but the amount of time
the candidate takes has no bearing on the scoring of the test itself.

# \***\*What will be evaluated?\*\***

---

The objective of this test is to evaluate different topics of frontend
development. Specifically:

-   The level of expertise that a candidate has with the web stack, which
    includes HTML, CSS and JavaScript, and how the candidate uses these
    languages in order to solve a problem.
-   The level of expertise when it comes to JavaScript and React in general.
-   The attention that the candidate has for the general quality of the
    application. Specifically in terms of:
    -   Accessibility
    -   Performance
    -   Usability and visual coherence
    -   Maintainability
    -   Edge case management

# \***\*Stack\*\***

---

In this test, we encourage the candidate to use the technologies that we use in
our daily basis:

-   HTML
-   JavaScript
-   React JS
-   Styled-components
-   Yarn
-   NextJS

As for using a components library, the candidate has multiple choices:

-   If the candidate already knows and uses a specific React components library,
    they can use it and save sometime on the development process.
-   If the candidate does not know any library, they can use the following:
    [https://www.npmjs.com/package/@braineet/ui](https://www.npmjs.com/package/@braineet/ui).
    This is an open source library created by Braineet and that we use in our
    current product.

For the API that the candidate will use, the candidate must use SWAPI to
retrieve the various characters and their information. The candidate can take a
look at the API and how to use it here:
[https://swapi.dev/documentation](https://swapi.dev/documentation).

# \***\*Setup\*\***

---

The candidate should fork the repo and create their own, downloading it locally.

In the project directory, the candidate needs to run: `yarn` This will setup the
necessary dependencies to execute this project.

The candidate will need to use Node JS v.14 in order to run this project. Not
doing so will result in an error. The candidate can install this particular
version using [nvm](https://github.com/nvm-sh/nvm).

To start development:

-   `yarn storybook:` which will run a playground for develop the Switch
    component
-   `yarn build:ui:` Allow to build the ui package
-   `yarn dev:` which will run the app in development mode

---

# \***\*Project delivery\*\***

---

This project should be accessible on GitHub as either a private or public
repository. The candidate's recruiter will provide further details when it comes
to who to give access to the repository.
