# Streamer Leaderboard

This project is a dynamic and interactive streamer leaderboard built with React. The leaderboard displays the scores of 10 streamers, updates their scores randomly every second, and reorders the leaderboard accordingly. It also adds extra points to a random streamer (excluding the first position) based on the difference between their score and the score of the streamer directly above them.

## Features

- **Dynamic Score Updates**: Scores for each streamer are updated randomly every second.
- **Leaderboard Reordering**: The leaderboard reorders itself automatically based on the updated scores.
- **Extra Points**: A random streamer (excluding the first position) gets extra points based on the difference between their score and the score of the streamer directly above them.
- **Smooth Animations**: Transitions for score updates and position changes are smooth and visually appealing.
- **Responsive Design**: The leaderboard is responsive and works well on different screen sizes.

## Technologies Used

- **React**: For building the user interface.
- **Styled-Components**: For styling the components and ensuring a visually appealing design.
- **JavaScript**: For implementing the logic and functionality of the leaderboard.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/streamer-leaderboard.git
2. Navigate to the project directory:
   ```bash
   cd streamer-leaderboard
3. Install the dependencies:
   ```bash
   npm install

### Running the App

1. Start the development server:
   ```bash
   npm start
2. Open your browser and go to http://localhost:3000 to view the app.

### Code Structure

```bash
streamer-leaderboard/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Leaderboard.js
│   │   ├── Leaderboard.css
│   │   ├── Streamer.js
│   │   └── Streamer.css
│   ├── data.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── .gitignore
├── package.json
└── README.md
