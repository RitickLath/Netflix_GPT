# Netflix GPT

## Overview

**Netflix GPT** is a Netflix clone built using **React**, offering a seamless and immersive user experience similar to the original Netflix platform. The app integrates the **TMDB API** for fetching and displaying movie data, including trailers, while incorporating **Firebase Authentication** to securely manage user access. A unique feature of this project is the integration of **OpenAI GPT**, allowing users to receive personalized movie recommendations based on prompts or descriptions. The app is fully responsive, styled using **Tailwind CSS**, and achieves a **Lighthouse score of 95+** for exceptional performance.

## Features

- **Netflix UI**: Developed an exact replica of Netflix's user interface for a familiar and intuitive experience.
- **TMDB API Integration**: Fetches a comprehensive list of movies, genres, and trailers from the **TMDB (The Movie Database) API**.
- **Movie Recommendations via GPT**: Leverages **OpenAI GPT** to recommend movies based on user-provided prompts or descriptions.
- **User Authentication**: Secure user login and sign-up using **Firebase Authentication**.
- **Responsive Design**: Fully responsive, ensuring smooth functionality on mobile, tablet, and desktop screens.
- **High Performance**: Achieves a **Lighthouse score of 95+** for superior performance, accessibility, and SEO.
  
## Tech Stack

- **React**: JavaScript library for building the user interface.
- **React Router**: For handling dynamic page routing and navigation.
- **TMDB API**: For fetching movie data and trailers.
- **Firebase Authentication**: For secure user authentication and account management.
- **OpenAI GPT**: For generating movie recommendations based on user inputs.
- **Tailwind CSS**: Utility-first CSS framework for styling and responsiveness.
- **Firebase Hosting**: For deployment and hosting.

## Installation & Setup

### Prerequisites

Before running the project, make sure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** or **yarn**

### Installation Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/netflix-gpt.git
    ```

2. Navigate to the project directory:
    ```bash
    cd netflix-gpt
    ```

3. Install the project dependencies:
    ```bash
    npm install
    ```

4. Set up your environment variables by creating a `.env` file in the project root with the following keys:
    ```
    REACT_APP_TMDB_API_KEY=your_tmdb_api_key
    REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
    REACT_APP_GPT_API_KEY=your_openai_api_key
    ```

5. Start the development server:
    ```bash
    npm start
    ```

6. Open the app in your browser at `http://localhost:3000`.

### Build for Production

To create a production build, run:
```bash
npm run build
```

## Key Functionalities

### 1. TMDB API Integration
This app utilizes the **TMDB API** to fetch trending, popular, and genre-specific movies, including detailed information such as descriptions, ratings, and trailers.

### 2. Movie Recommendations with GPT
The app integrates **OpenAI GPT**, allowing users to input prompts or movie descriptions, and GPT will return relevant movie recommendations based on the input.

### 3. Firebase Authentication
Users can sign up, log in, and log out securely using **Firebase Authentication**, ensuring that personal preferences and data are protected.

### 4. Responsive Design
The UI is fully responsive, ensuring a seamless experience on mobile devices, tablets, and desktop screens, powered by **Tailwind CSS**.

### 5. Exceptional Performance
Achieving a **Lighthouse score of 95+**, the app excels in performance, accessibility, and best coding practices.

## Project Structure

```
/src
│   ├── /components        # Reusable React components (MovieList, Banner, Navbar, etc.)
│   ├── /pages             # Pages (Home, Login, etc.)
│   ├── /hooks             # Custom React hooks (e.g., useAuth, useFetchMovies)
│   ├── /context           # Context API for managing global state
│   ├── /utils             # Helper functions (e.g., API requests, GPT integration)
│   ├── App.js             # Main app component
│   ├── index.js           # Entry point for the React application
│   ├── tailwind.css       # Tailwind CSS configuration and global styles
├── /public
├── .env                   # Environment variables (API keys)
├── firebaseConfig.js       # Firebase configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── package.json           # Project dependencies and scripts
```

## Deployment

This project is hosted on **Firebase Hosting**. To deploy it yourself:

1. Install the Firebase CLI:
    ```bash
    npm install -g firebase-tools
    ```

2. Log in to Firebase:
    ```bash
    firebase login
    ```

3. Initialize Firebase in your project:
    ```bash
    firebase init
    ```

4. Build and deploy the project:
    ```bash
    npm run build
    firebase deploy
    ```

## Lighthouse Performance

The project achieves a **Lighthouse score of 95+**, excelling in:
- **Performance**
- **Accessibility**
- **Best Practices**
- **SEO**

## Contributing

Contributions are welcome! If you'd like to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push the branch (`git push origin feature-name`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.
