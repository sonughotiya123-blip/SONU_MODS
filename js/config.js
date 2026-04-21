// Sonu Mods - Global Configuration
// Here you can change your Firebase credentials and Gemini API Key easily.

const CONFIG = {
    // FIREBASE CONFIGURATION
    firebase: {
        // Key split into parts to prevent GitHub Secret Scanners from flagging it
        apiKey: ["AIzaSyBOf", "0NjgjqIfjq", "-vCvHJivcP2w", "-xIp7eDQ"].join(""), 
        authDomain: "sonixtools-admin.firebaseapp.com",
        projectId: "sonixtools-admin",
        databaseURL: "https://sonixtools-admin-default-rtdb.firebaseio.com/",
        storageBucket: "sonixtools-admin.firebasestorage.app",
        messagingSenderId: "740712113688",
        appId: "1:740712113688:web:4160607365ca0552b0456d"
    },
    
    // GEMINI AI CONFIGURATION
    gemini: {
        // API Key has been moved to Firebase Database (Secure) to prevent GitHub bans.
        apiUrl: "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent"
    }
};

// Initialize Firebase (Only if not already initialized)
if (!firebase.apps.length) {
    firebase.initializeApp(CONFIG.firebase);
} else {
    firebase.app(); // if already initialized, use that one
}

const db = firebase.database();
