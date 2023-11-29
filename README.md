# Eventbase

Eventbase shows you upcoming events filtered by city, date, genre, or a general keyword. It was created to offer a simple, easy-to-use event finder using a reliable 3rd-party API.

![Responsive Mockup](/assets/images/readme/mockup.png)

## Features

- __Hero section__

  - Big eye catching hero image that encourages the user to search for upcoming events
  - Clickable logo that brings you to the home page
  - Big input field in the middle of the screen that can't be missed
  - Advanced search provided by clicking on the universal show more button, the arrow down.

![Hero Section](/assets/images/readme/landing.jpg)

- __Search field__

  - Familiar magnifying glass icon to show the user that this is indeed a search field
  ![Search field](/assets/images/readme/searchfield.png)
  - Spinner icon while fetching data to show user that their seach query was received.
  ![spinner](/assets/images/readme/assets.png)

- __Advanced search__
    - Let's the user refine their search by adding variables like their city, date they're free and a genre.
    - Search button with interaction states
    - When opening advanced search the arrow down changes to an arrow up to show the user that they can close the advanced search window
    ![Advanced search](/assets/images/readme/advancedsearch.png)

- __Error prompt__
    - If the user search returns no results this window notifies them of that in a simple, non-intrusive way
    - When the error window shows up the arrow again changes to an arrow up to show the user that they can close the error window.
    
    ![Error prompt](/assets/images/readme/errorprompt.png)

- __Text paragraph__
    - Small text snippet that tells the user what the site is for.
    - CTA button right after the text that sets focus on the search field when clicked
![Text paragraph](/assets/images/readme/inforow.png)


- __Search results__
    - Event name front and center to quickly identify the results.
    - Official event picture supplied by ticketmaster
    - Location information, including venue, city and country.
    - Date shown in site signature color to draw attention to it.
    - Tickets information showing when tickets go on sale and where to buy them.
    - Sorted by relevance that's calculated by the Ticketmaster API.

    ![Search results](/assets/images/readme/searchquery.png)

## Upcoming Features

- Feature 1: Calendar file
    - Ability for the user to export search results as a iCal file or direct link to their google calendar

- Feature 2: Better filter
    - Ability to do more precise filtering, like artist or sports team

- Feature 3: Sorting
    - Ability to sort the search results by date, name, relevance
    - Sort in Ascending order or descending order

- Feature 4: Artist information
    - Ability to click on artist or sports team to get more general info about them
    - Artist example: Popular songs, Music streaming links, social links, tour itinerary.
    - Sports example: Placement in leaderboard, recent matches/games with scores, upcoming matches and player lineup for the picked event

- Feature 5: Event information
    - The event information could be expanded to show more local to the venue information
    - For example, Seating map, parking, bus/metro station, age restrictions, all important times, food and drinks available in the venue, alcohol policy and more.

- Feature 6: Monetization
    - If one were to make this into an actual site it could be monetized by having a referral code automatically built into the tickets purchase link
    - Ads, everyone hates them but if the referrals doesnt cover costs they can be added.


# Technical information

## Idea
When brainstorming for ideas, the one that really stuck with me was this event finder tool. In my vision, I wanted the user to be able to export their search results to their calendar. However, that was a big undertaking at this stage. It's still something I want to implement in the future because it's a function I actually really want.

## Planning

- My initial plan for the website flow
    - Some functions were not implemented due to difficulty and limitations of the ticketmaster API
![Brainstorm](/assets/images/readme/brainstorm.png)

- For this site, I used a wireframe tool to mock up the website before I started writing the code.
    - The mockups shown below are not the first mockups.
    - When adding an element or function, I always mocked it up first before implementing it.
![Figma](/assets/images/readme/figma.png)

## Manual Testing

1. Buttons Testing:

- Expected: Buttons should perform their designated actions when clicked.
- Testing: Clicked on each button in different sections of the site.
- Result: All buttons responded as expected, performing their respective actions.

2. JS Buttons Testing:

- Expected: Buttons should open the linked functions.
- Testing: Clicked on each JS button.
- Result: All buttons responded as expected, performing their respective actions. 

3. Responsiveness Testing:

- Expected: The site should be responsive across various devices.
- Testing: Used https://responsivedesignchecker.com/ to check responsiveness.
- Result: The site displayed well on different devices without layout issues.

4. Code Validation:

- Expected: CSS, HTML, and JS code should be valid.
- Testing: Ran the code through online validators
- Result: All code met validation standards.

5. Features Testing:

- Expected: All features should function as intended.
- Testing: Checked each feature on the site
- Result: Confirmed that all features worked as intended.

6. API Testing:

- Expected: Return results based on my search parameters
- Testing: Added keyword, date, city and genre.
- Result: Received valid results

6. API Error testing

- Expected: Show error box telling me there's something wrong
- Testing: Search for completely random strings and citys
- Result: Error box popped up on every test


7. Bug Documentation:

Encountered Bug: When trying to display response data from the api some values could be read and some threw an undefined error

    - Original code: ${concert._embedded.venues[0].country.countryCode}
    - Working code: "${concert._embedded && concert._embedded.venues && concert._embedded.venues[0] ? concert._embedded.venues[0].country.countryCode : ''}"

This problem was really hard to figure out. I spent a lot of time searching on Google and trying different things I found on Stack Overflow and other websites. My friend Adam tried to help, but we couldn't find a solution together.

To be honest i dont remember where i found the solution but either way, the solution was to add a ternary operator that checks that all stages of the path are truthy before accessing the wanted value, if no value is found it just returns an empty string.


### Validator

#### HTML

When running the HTML validator, I found some small errors, like open tags. The only real error I got was that I had used span tags as dummy tags to group some divs together. I replaced these span tags with divs instead.

#### CSS

There were some small errors in the css which all were values that didnt exist for that specific rule, so nothing site breaking but redundant code that didnt do anything.

    

## Validator testing


- CSS
  - No errors were returned when passing through the official [Jigsaw validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fzimmoc.github.io%2Feventbase%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
  ![w3c report](/assets/images/readme/reports/w3c.png)

- HTML
  - No errors were found when passing through the official [w3c validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fzimmoc.github.io%2Feventbase)
  ![w3c report](/assets/images/readme/reports/jigsaw.png)

- JavaScript
  - No valid errors were found when testing it with [JSHint](https://jshint.com/)
  
  ![w3c report](/assets/images/readme/reports/jshint.png)


### Performance

- __Tests performed using [Pagespeed](https://pagespeed.web.dev/)__

- Mobile Test
    - The performance is a bit underwhelming, but one significant factor contributing to the lower score is the cache policy. If I've understood correctly, I can't change that on GitHub Pages.
    - Another penalty is due to the image sizes. I've compressed the images twice and converted them into .webp format, but they are still slightly larger than desired.
 ![mobile pagespeed](/assets/images/readme/reports/mobile.png)

- Desktop test
    - Desktop test looks better.
    - However, the cache policy is also affecting performance score here.
![desktop pagespeed](/assets/images/readme/reports/desktop.png)

- __Tests performed using [GTmetrix](https://gtmetrix.com/)__

- Desktop test
    - GTmetrix reports a much better performance score than Pagespeed  
![desktop GTmetrix](/assets/images/readme/reports/gtmetrix.png)

## Deployment

#### The site was deployed on GitHub pages doing the following:
1. Log in to your GitHub account.
2. Navigate to the Eventbase repository on GitHub: Eventbase.
3. Click on "Settings" in the repository navigation menu at the top.
4. On the left-hand side of the website, select "Pages."
5. Choose "Deploy from a branch" as the source.
6. Select "Main" as the branch and "/root" as the folder, then click "Save."
7. Wait for a few minutes and click the "Code" menu in the top left corner.
8. On the right-hand side, navigate to "Deployment."
9. Click on the deployment icon on GitHub to access the live website.

The live link can be found here - https://zimmoc.github.io/eventbase/

# Credits 

Whenever I got stuck or didn't understand how to implement something, I used [w3schools](https://www.w3schools.com/) and [w3docs](https://www.w3docs.com/) to find a solution.

I also used Google whenever I couldn't make something work, which led me to various forums and help sites where people were asking about the same problem. I used that information to identify what was breaking my code and implemented fixes accordingly.

I also received help from my friend, [Adam](https://github.com/AdamAgerling), to solve some problems with the API response.

### Documentation

Since I used functions that I had not yet learned, I relied on a few guides to understand and write the base for the fetch function.
- Api
    - [Ticketmaster API](https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/)
    - [Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
    - [Digital ocean](https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data)
    - [dev.to](https://dev.to/easewithtuts/a-comprehensive-guide-to-the-fetch-api-b48)
    - Code Institute API section

### Content 

- The icons used were taken from [Font Awesome](https://fontawesome.com/)
- Favicon/Logo by [Font Awesome](https://fontawesome.com/)

### Media

- Images taken from [Pexels](https://www.pexels.com/)
- Concert images provided by the Ticketmaster API.
