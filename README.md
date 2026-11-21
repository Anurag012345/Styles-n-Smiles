# Styles n Smiles

A website for a beauty salon: browse services and prices, book an appointment, send a
message to the salon, and add products to a cart. Built with React on the front end and
an Express + MongoDB API behind it.

**Live site:** https://anurag012345.github.io/Styles-n-Smiles/

> The live site is the front end only (GitHub Pages). Login, sign-up, appointment
> booking and the contact form call an API at `http://localhost:9002`, so they work
> only when you run the backend yourself (see below).

## Features

- **Service pages** for hair care, skin care, body care and bridal, plus a price list,
  about and contact pages.
- **Appointment booking** with date picker and multi-select services; saved to MongoDB
  and followed by a confirmation email.
- **Accounts:** sign-up with an email verification message, and login.
- **Shop:** product cards, a cart with add, remove and quantity changes (React context
  and reducer), and a checkout page with card and UPI options.
- **Contact form** saved to MongoDB, with the salon's social links.
- Responsive layout with Material UI, Bootstrap and CSS modules.

## Tech stack

| Part | Tools |
|---|---|
| Front end | React 18, React Router 6, Material UI, Bootstrap, Swiper, Axios |
| Back end | Node.js (ES modules), Express, Mongoose, Nodemailer |
| Database | MongoDB (`StylesDB` on `127.0.0.1:27017`) |
| Hosting | GitHub Pages via `gh-pages` (front end) |

## Run it locally

You need Node.js and a MongoDB server running locally.

```bash
# 1. Backend (http://localhost:9002)
cd Backend
npm install
cp .env.example .env     # then fill in MAIL_USER and MAIL_PASS
node index.js
```

```bash
# 2. Front end (http://localhost:3000), in a second terminal
cd Front-end
npm install
npm start
```

`MAIL_USER` and `MAIL_PASS` are a Gmail address and a Gmail
[app password](https://myaccount.google.com/apppasswords), used to send verification
and appointment confirmation emails.

## API

| Method | Route | Purpose |
|---|---|---|
| POST | `/sign-in` | Create an account and send a verification email |
| POST | `/login` | Log in |
| POST | `/appointments` | Book an appointment and send a confirmation email |
| POST | `/contactus` | Save a contact message |
| GET | `/verify?id=` | Mark an account as verified |

## Project structure

```
Backend/     Express API, Mongoose models, mail sending
Front-end/   React app (src/Pages, src/Components, src/Images)
```

## Known limitations

This was an early learning project, and these are known gaps:

- **Passwords are stored and compared in plain text.** Do not use real passwords. It
  needs hashing (for example bcrypt) before any real use.
- There is no session or token, so login state lives only in the React app's memory.
- The verification email links to `localhost:3000`, and the checkout does not process
  real payments.
- The API URL is hard-coded to `localhost:9002` in the front end.
- No automated tests.
