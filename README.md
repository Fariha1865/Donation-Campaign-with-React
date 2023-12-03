# Donation Campaign Site

This is a Donation Campaign website made using React JS, CSS3 (Tailwind and DaisyUI) and javascript
site-Link:  https://donation-campaign-site.netlify.app/

### Website pages:

- Home page with Banner(with Search Box), all categories of Donation
- Donations page with all the donation category cards where the current user has donated
- Donation Details page containing the details of a particular donation category
- Statistics page containing a pie chart showing current users donation againts total donation (12)
- Error page to handle page not found error

## Features:

- When user types any category name in the SearchBox in homepage, only that catagory donation cards are shown in home page categories section

- When user clicks on any category card, website navigates to that particular catagories details page ( Title,description and a donation button with price)

- When the user clicks the Donation button of a particular category, Donation for that category is saved in localStorage and a success toast is shown
- If user tries to donate in the same category, an warning toast is given
- When user navigates to Donations page, all the donation category cards where the current user has donated are shown(Maximum four cards will be shown and if donations are more thatn 4, then a "Show All" button is visible)
- When user clicks "Show All" button, all the rest donation category cards are shown and the show all button gets hidden
- When user navigates to statistics page, a pie chart is shown containing current users donation againts total donation (12)
- Tootltip in the pie chart shows total donation number and total user donation number
- If user navigates a non-existing page, an customized error page is shown with "go back" button, when the go back button is pressed, user is navigated to the Home page
- Website is responsive for desktop, tablet and large mobile devices

## Required:
- Tech Stack: React, Vite, CSS3 (Tailwind and DaisyUI)
- Programming Language: JavaScript
- Code Editor: Visual Studio Code (VSCode)
- Terminal: Git Bash
