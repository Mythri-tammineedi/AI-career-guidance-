// Smooth Scroll to Section
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}
document.addEventListener("DOMContentLoaded", function() {
    console.log("GuideX Career Guidance Loaded");
});

document.addEventListener("DOMContentLoaded", function() {
    const chatIcon = document.getElementById("chat-icon");
    const chatbox = document.getElementById("chatbox");
    const closeChat = document.getElementById("close-chat");
    const zoomChat = document.getElementById("zoom-chat");

    let isZoomed = false;

    chatIcon.addEventListener("click", function() {
        chatbox.style.display = chatbox.style.display === "none" || chatbox.style.display === "" ? "flex" : "none";
    });

    closeChat.addEventListener("click", function() {
        chatbox.style.display = "none";
    });

    zoomChat.addEventListener("click", function() {
        isZoomed = !isZoomed;
        if (isZoomed) {
            chatbox.classList.add("chatbox-zoomed");
        } else {
            chatbox.classList.remove("chatbox-zoomed");
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const togglePassword = document.getElementById("toggle-password");

    // Show/Hide Password
    togglePassword.addEventListener("click", function () {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            togglePassword.textContent = "🔒";
        } else {
            passwordInput.type = "password";
            togglePassword.textContent = "👁";
        }
    });

    // Form Submission
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (email === "" || password === "") {
            alert("Please enter both email and password.");
            return;
        }

        // Basic Email Format Validation
        if (!email.includes("@") || !email.includes(".")) {
            alert("Please enter a valid email.");
            return;
        }

        // Simulated Login Process (Replace with real authentication later)
        alert("Login successful! Redirecting...");
        window.location.href = "dashboard.html"; // Redirect to homepage
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signup-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");
    const togglePassword = document.getElementById("toggle-password");
    const toggleConfirmPassword = document.getElementById("toggle-confirm-password");

    // Show/Hide Password
    togglePassword.addEventListener("click", function () {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            togglePassword.textContent = "🔒";
        } else {
            passwordInput.type = "password";
            togglePassword.textContent = "👁";
        }
    });

    toggleConfirmPassword.addEventListener("click", function () {
        if (confirmPasswordInput.type === "password") {
            confirmPasswordInput.type = "text";
            toggleConfirmPassword.textContent = "🔒";
        } else {
            confirmPasswordInput.type = "password";
            toggleConfirmPassword.textContent = "👁";
        }
    });

    // Form Submission
    signupForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();

        // Basic Validation
        if (name === "" || email === "" || password === "" || confirmPassword === "") {
            alert("Please fill in all fields.");
            return;
        }

        // Email Validation
        if (!email.includes("@") || !email.includes(".")) {
            alert("Please enter a valid email.");
            return;
        }

        // Password Length Validation
        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }

        // Confirm Password Check
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        // Simulated Sign-Up Process (Replace with Backend API Later)
        alert("Sign-up successful! Redirecting to login...");
        window.location.href = "login.html"; // Redirect to login page
    });
});
require('dotenv').config();
const express = require('express');
const Twilio = require('twilio');

const app = express();
const port = 3000;

// Twilio Credentials (Replace with your actual credentials)
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const apiKeySid = process.env.TWILIO_API_KEY_SID;
const apiKeySecret = process.env.TWILIO_API_KEY_SECRET;
const { AccessToken } = require('twilio').jwt;
const { VideoGrant } = AccessToken;

app.use(express.json());

// Generate Twilio Access Token
app.post('/token', (req, res) => {
    const identity = req.body.identity;  // User ID (can be dynamic)
    const token = new AccessToken(accountSid, apiKeySid, apiKeySecret, { identity });

    // Grant access to Twilio Video
    const videoGrant = new VideoGrant();
    token.addGrant(videoGrant);

    res.json({ token: token.toJwt() });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
function showRecommendation() {
    let interest = document.getElementById("interests").value;
    let careerText = "";

    switch (interest) {
        case "engineering":
            careerText = "You may be interested in Engineering fields like Computer Science, AI, or Civil Engineering!";
            break;
        case "medical":
            careerText = "Medical careers such as MBBS, Pharmacy, and Biotechnology could be a great fit for you!";
            break;
        case "commerce":
            careerText = "Consider careers in Business, Finance, or Data Analytics.";
            break;
        case "arts":
            careerText = "Creative fields such as Journalism, Design, and Psychology could be your path!";
            break;
        case "diploma":
            careerText = "Diploma programs in IT, Nursing, or Animation may be perfect for you!";
            break;
        default:
            careerText = "Explore various career options based on your interests!";
    }

    document.getElementById("result-text").innerText = careerText;
    document.getElementById("recommendation").classList.remove("hidden");
}
