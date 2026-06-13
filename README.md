\# Shiv Jobs Portal Pro - Premium Government Jobs Portal



A complete, production-ready Government Jobs Portal built with Vanilla JS and Firebase. Outperforms competitors with modern UI/UX and real-time updates.



\## Features

\- \*\*Public\*\*: Real-time job listings, Search, Categories, Application System, Dark Mode, SEO Optimized.

\- \*\*Admin\*\*: Dashboard with stats, CRUD for Jobs, Application Management, Secure Login.

\- \*\*PWA\*\*: Installable on mobile devices.



\## Setup Instructions



1\. \*\*Firebase Setup\*\*:

&#x20;  - Create a project at \[Firebase Console](https://console.firebase.google.com/).

&#x20;  - Enable \*\*Firestore Database\*\*, \*\*Authentication\*\* (Email/Password), and \*\*Storage\*\*.

&#x20;  - Copy your config into `assets/js/firebase-config.js`.



2\. \*\*Database Rules\*\*:

&#x20;  Set these rules in Firestore for security:

&#x20;  ```javascript

&#x20;  service cloud.firestore {

&#x20;    match /databases/{database}/documents {

&#x20;      match /jobs/{job} {

&#x20;        allow read: if true;

&#x20;        allow write: if request.auth != null;

&#x20;      }

&#x20;      match /applications/{app} {

&#x20;        allow write: if true;

&#x20;        allow read: if request.auth != null;

&#x20;      }

&#x20;    }

&#x20;  }

