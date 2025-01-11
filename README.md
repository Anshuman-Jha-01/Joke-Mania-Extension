# Joke Mania

**Joke Mania** is a lighthearted web application and browser extension designed to brighten your day with a random joke. By fetching data from the Official Joke API, it presents a joke's setup and punchline in a user-friendly interface. Whether you're visiting the app or using the extension, you're guaranteed a reason to smile.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Project Structure](#project-structure)
- [License](#license)

---

## Project Overview

**Joke Mania** is a project aimed at spreading joy through humor. It features a responsive design that displays a random joke from the Official Joke API. It also includes a browser extension feature, making it accessible anytime you need a quick laugh.

The project is written in JavaScript, HTML, and CSS, and the browser extension utilizes a manifest file for Chrome compatibility.

---

## Features

- Fetches random jokes from the **Official Joke API**.
- Displays the joke's setup and punchline dynamically.
- Responsive design with attractive styles.
- Lightweight browser extension that shows a popup with a joke.
- Includes custom scripts for additional interactivity.

---

## Technologies Used

- **Frontend:**
  - HTML5
  - CSS3
  - JavaScript
- **API:**
  - Official Joke API
- **Browser Extension:**
  - Chrome Manifest V3

---

## Installation
- No additional installations required. 

### Prerequisites

- A modern browser (e.g., Chrome)
- Text editor (e.g., VS Code) for exploring the codebase

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Anshuman-Jha-01/Joke-Mania-Extension.git
   cd Joke-Mania-Extension

2. **Load the browser extension:**
- Open Chrome and navigate to ```chrome://extensions```.
- Enable Developer mode.
- Click Load unpacked and select the project folder.

---

## Usage

1. **Web Application:**
- Open the app in your browser by accessing index.html.
- A random joke will load automatically upon page load.

2. **Browser Extension:**
- Click the Joke Mania icon in the browser's toolbar.
- A popup will display a random joke.

3. **Additional Interaction:**
- Visit the specified match URL (as per the manifest) to trigger custom scripts.

---

## Components

1. ```index.html```
    - The main structure of the application.
    - Includes the container for jokes (setup and punchline) and references external scripts and styles.

2. ```style.css```
    - Adds responsive styles and an elegant design to the joke container.
    - Highlights include:
        - Coral background for the body.
        - Stylish container with a shadow effect.

3. ```app.js```
    - Fetches a random joke from the Official Joke API upon page load.
    - Dynamically updates the content of the ```#setup``` and ```#punchline``` elements.

4. ```school.js```
    - Displays a custom alert message ("Have you laughed today?") on a specific webpage (defined in the manifest).

5. ```manifest.json```
     - Configures the Chrome extension.
     - Defines the popup (```index.html```), default icon, and additional content scripts for specified URLs.

---

## Project Structure

```bash
    /src
    ├── app.js             # Fetches and displays jokes
    ├── index.html         # Main HTML file for the web app
    ├── manifest.json      # Chrome extension configuration
    ├── school.js          # Custom script for specific webpages
    ├── style.css          # Styles for the application
    └── lol.png            # Icon for the browser extension

  ```

