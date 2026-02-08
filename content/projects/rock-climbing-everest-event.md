# Side Project: Rock Climbing Everest Event
## Tracking and Gamifying a 30-Day Rock Climbing Competition

**Role:** Solo Creator (Design & Development)  
**Year:** 2025

---

## The Challenge

The gym runs a month-long climbing challenge every year. In the past, they just used a static leaderboard. It had a few problems that hurt the experience:

* **No individual visibility**: It was a team competition, but people couldn't see their own specific contribution to the total score.
* **Low engagement**: Without fresh data or updates, people stopped checking the site after the first week.
* **Sandbagging**: Stronger teams would wait until the very end of the month to log all their points at once, which made the leaderboard feel fake or uncompetitive.

The goal was to build a tool that made the competition feel live and encouraged people to log their climbs every day.

---

## The Solution

I built a mobile web app that turned raw climbing logs into a social experience with personalized stats.

### Features

**Quick Logging**
* Optimized for mobile with large buttons because users have chalky hands and are tired between climbs.
* Simple email login to keep the friction as low as possible.

**Team & Personal Stats**
* Users can see their personal distance climbed in meters alongside their team's rank.
* Added a "Fog of War" feature for the final 3 days. This hid the top 3 scores so teams couldn't see exactly where their rivals were, which stopped the sandbagging and made the finish more exciting.

**End-of-Event Wrapped**
* Created custom personas based on climbing habits. Users got titles like "The Night Owl" or "The Weekend Warrior."
* Included a simple share button so people could post their stats to social media.

---

## How I Built It

### Technical Setup
I used Google Sheets as the database and Apps Script for the logic.

* **Ease of use**: This allowed gym staff to manage the data themselves. They didn't need to know how to code to delete a mistake or verify a score; they just opened the spreadsheet.
* **Scale**: The system handled about 275 users and 2,500 individual entries over the month.
* **Performance**: I had to optimize the code mid-event to handle the traffic by batching data requests, which fixed some initial lag.

---

## Results

* **Higher Retention**: Unlike previous years, site activity stayed high through the entire 30 days.
* **Zero Disputes**: The blind leaderboard at the end successfully prevented teams from gaming the system.
* **Social Proof**: The Wrapped stats were widely shared among the community.
* **Repeat Business**: The gym was happy with the results and asked me to run the platform again for next year.

---

## Why This Matters

This project shows I can take a vague problem like low engagement and build a technical solution from scratch. I handled everything from the database structure to the user interface, making sure the product worked for both the athletes and the gym staff.
