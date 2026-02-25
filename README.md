Recipe Finder App
Project Overview

The Recipe Finder App is a React-based web application that allows users to search for meals and view detailed recipe information dynamically using a public API.

Users can search for a meal by name, view a list of recipe results, and navigate to a dedicated details page that displays ingredients, preparation instructions, video tutorials, and external source links where available.

This project was built during the ALX Frontend Capstone phase to demonstrate practical understanding of React fundamentals, API integration, routing, and responsive design.

Technologies Used

React (Vite)
JavaScript (ES6+)
React Router DOM
Tailwind CSS
TheMealDB API

Features Implemented

The application allows users to search for meals by name. Data is fetched dynamically from TheMealDB API and displayed in a structured format.

Recipe cards display the meal image, name, category, and cuisine. Clicking on a recipe navigates to a detailed view page.

The recipe details page displays the full list of ingredients with measurements, cooking instructions, an embedded YouTube tutorial when available, and a source link if provided by the API.

The application includes loading state handling while data is being fetched and user-friendly error handling in case of failed API requests.

The layout is responsive and adapts to mobile, tablet, and desktop screen sizes.

Project Structure

src/
components/
pages/
App.jsx
main.jsx

Development Process

The project is being developed incrementally with structured commits to demonstrate progressive feature implementation, debugging and problem-solving, API integration, routing implementation, state management, and proper version control practices.

Future Improvements

Future enhancements may include implementing a favorites feature using localStorage, adding category-based filtering, improving UI consistency and spacing, and refining user feedback for empty search results.

Author

Developed as part of the ALX Frontend Engineering Capstone phase.