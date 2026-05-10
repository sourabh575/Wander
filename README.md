# Wanderlust - Travel Stay Booking Platform

Wanderlust is a full-stack web application that allows users to discover, list, and book unique stays. Built with Node.js, Express, MongoDB, and EJS, it provides a polished travel listing experience with user authentication, reviews, and listing management.

## Features

- 🏨 Browse all listings with price, location, and images
- 👤 Sign up, log in, and manage sessions
- ✏️ Add, edit, and delete your own listings
- 💬 Post and delete reviews on listings
- 🔒 Authorization checks for owners and review authors
- 📍 Location-based listing details
- ⚡ Flash messages for user feedback

## Setup and Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file in the project root with:
   ```bash
   ATLASDB_URL=<your_mongodb_connection_string>
   SECRET=<your_session_secret>
   ```

3. Start the application:
   ```bash
   npm run dev
   ```

## Project Structure

```
majorProject/
├── controllers/
├── models/
├── routes/
├── views/
├── public/
├── utils/
├── init/
├── middleware.js
├── schema.js
├── app.js
├── package.json
└── README.md
```

## Notes

- The root route now redirects to `/listings`.
- `app.js` uses Passport for user authentication.
- `models/listing.js` cleans up related reviews when a listing is deleted.

