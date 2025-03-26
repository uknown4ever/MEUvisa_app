// translations.js

const translations = {
    en: {
        // Header
        getVisa: "Get Visa",
        aboutUs: "About Us",
        login: "Log in",

        // Hero Section
        heroTitle: "The easiest way to get your travel visa",
        heroSubtitle: "Let us help you get your visa, so you can focus on your trip",
        getStarted: "Get Started",

        // Social Proof
        happyCustomers: "happy customers",
        support: "support",
        reviews: "29,000+ reviews",
        yearsOfExperience: "years of experience",
        visaApprovalRate: "visa approval rate",

        // Why Choose Us
        whyChooseUsTitle: "Why Choose Us?",
        whyChooseUsSubtitle: "Find out why we lead the travel document industry enabling travels to fly with ease",
        applyNow: "Apply Now",
        fastProcessing: "Fast Processing:",
        fastProcessingText: "Get your visa approved quickly.",
        expertGuidance: "Expert Guidance:",
        expertGuidanceText: "Our team helps you at every step.",
        secureReliable: "Secure & Reliable:",
        secureReliableText: "Your data is safe.",
        support247: "24/7 Support:",
        support247Text: "Always available for you.",

        // Most Popular Destinations
        popularDestinationsTitle: "Most Popular Destinations",
        popularDestinationsSubtitle: "Check out our customers' most frequented travel destinations",
        morocco: "Morocco",
        france: "France",
        spain: "Spain",
        processedVisas: "processed Visas",
        processedVisasCount: "208,000+",

        // Footer
        contactUs: "Contact Us",
        privacyPolicy: "Privacy Policy",
        termsConditions: "Terms & Conditions",
        followUs: "Follow Us",
        rightsReserved: "All rights reserved",

        // Login Page
        loginTitle: "Log in to your account",
        email: "Email",
        password: "Password",
        rememberMe: "Remember me",
        forgotPassword: "Forgot password?",
        loginButton: "Log in",
        noAccount: "Don't have an account? <a href='register.html' data-translate='registerNow'>Register now</a>",
        registerNow: "Register now",

        // Apply Visa Page
        applyForVisa: "Apply for Your Visa",
        fullName: "Full name",
        countryOfOrigin: "Country of origin",
        selectCountry: "Select your country",
        passportNumber: "Passport number",
        visaType: "Visa type",
        selectVisaType: "Select your visa type",
        touristVisa: "Tourist",
        businessVisa: "Business",
        studentVisa: "Student",
        workVisa: "Work",
        uploadDocuments: "Upload Documents",
        chooseFile: "Choose file",
        noFilesSelected: "No files selected",
        submit: "Submit",

        // Registration Page
        registerTitle: "Create an account",
        confirmPassword: "Confirm password",
        registerButton: "Register",
        termsAgreement: "I agree to <a href='terms.html'>the terms and conditions</a>",
        haveAccount: "Already have an account? <a href='login.html' data-translate='loginNow'>Log in now</a>",
        loginNow: "Log in",
        passwdMatch: "Passwords do not match !",
    },
    fr: {
        // Header
        getVisa: "Obtenir un visa",
        aboutUs: "À propos de nous",
        login: "Se connecter",

        // Hero Section
        heroTitle: "Le moyen le plus simple d'obtenir votre visa de voyage",
        heroSubtitle: "Laissez-nous vous aider à obtenir votre visa, afin que vous puissiez vous concentrer sur votre voyage",
        getStarted: "Commencer",

        // Social Proof
        happyCustomers: "clients satisfaits",
        support: "assistance",
        reviews: "29 000+ avis",
        yearsOfExperience: "années d'expérience",
        visaApprovalRate: "taux d'approbation des visas",

        // Why Choose Us
        whyChooseUsTitle: "Pourquoi nous choisir ?",
        whyChooseUsSubtitle: "Découvrez pourquoi nous sommes leaders dans l'industrie des documents de voyage, permettant aux voyageurs de voyager en toute simplicité",
        applyNow: "Postuler maintenant",
        fastProcessing: "Traitement rapide :",
        fastProcessingText: "Obtenez votre visa rapidement.",
        expertGuidance: "Conseils d'experts :",
        expertGuidanceText: "Notre équipe vous aide à chaque étape.",
        secureReliable: "Sécurisé et fiable :",
        secureReliableText: "Vos données sont protégées.",
        support247: "Assistance 24/7 :",
        support247Text: "Toujours disponible pour vous.",

        // Most Popular Destinations
        popularDestinationsTitle: "Destinations les plus populaires",
        popularDestinationsSubtitle: "Découvrez les destinations de voyage les plus fréquentées par nos clients",
        morocco: "Maroc",
        france: "France",
        spain: "Espagne",
        processedVisas: "visas traités",

        // Footer
        contactUs: "Contactez-nous",
        privacyPolicy: "Politique de confidentialité",
        termsConditions: "Conditions générales",
        followUs: "Suivez-nous",
        rightsReserved: "Tous droits réservés",

        // Login Page
        loginTitle: "Connectez à votre compte",
        email: "E-mail",
        password: "Mot de passe",
        rememberMe: "Se souvenir de moi",
        forgotPassword: "Mot de passe oublié ?",
        loginButton: "Se connecter",
        noAccount: "Vous n'avez pas de compte? <a href='register.html' data-translate='registerNow'>Inscrivez-vous</a>",
        registerNow: "Inscrivez-vous",

        // Apply Visa Page
        applyForVisa: "Demandez votre visa",
        fullName: "Nom complet",
        countryOfOrigin: "Pays d'origine",
        selectCountry: "Sélectionnez votre pays",
        passportNumber: "Numéro de passeport",
        visaType: "Type de visa",
        selectVisaType: "Sélectionnez votre type de visa",
        touristVisa: "Touriste",
        businessVisa: "Affaires",
        studentVisa: "Étudiant",
        workVisa: "Travail",
        uploadDocuments: "Télécharger des documents",
        chooseFile: "Choisir un fichier",
        noFilesSelected: "Aucun fichier sélectionné",
        submit: "Soumettre",

        // Registration Page
        registerTitle: "Créer un compte",
        confirmPassword: "Confirmez le mot de passe",
        registerButton: "S'inscrire",
        termsAgreement: "J'accepte <a href='terms.html'>les conditions générales</a>",
        haveAccount: "Vous avez déjà un compte? <a href='login.html' data-translate='loginNow'>Connectez-vous</a>",
        loginNow: "Connectez-vous",
        passwdMatch: "Les mots de passe ne correspondent pas !",
    }   
};

// Function to update content based on the selected language
function updateContent(language) {
    const translation = translations[language];
    
    // Define elements that should use innerHTML instead of textContent
    const htmlElements = ['termsAgreement', 'haveAccount', 'noAccount'];
    
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translation[key]) {
            console.log(`Translating ${key}: ${translation[key]}`); // Debugging log
            
            // Check if this is an element that should use innerHTML
            if (htmlElements.includes(key)) {
                element.innerHTML = translation[key];
            } else {
                element.textContent = translation[key];
            }
        } else {
            console.warn(`Missing translation for key: ${key}`); // Warn if key is missing
        }
    });
}

// Function to set the selected language in localStorage
function setLanguage(language) {
    localStorage.setItem('language', language);
    updateContent(language);
}

// Function to initialize the language switcher
function initLanguageSwitcher() {
    const languageSwitcher = document.getElementById('language-switcher');
    const savedLanguage = localStorage.getItem('language') || 'en';

    // Set the initial language
    languageSwitcher.value = savedLanguage;
    updateContent(savedLanguage);

    // Add event listener for language switching
    languageSwitcher.addEventListener('change', (event) => {
        const selectedLanguage = event.target.value;
        setLanguage(selectedLanguage);
    });
}

// Initialize the language switcher when the DOM is loaded
document.addEventListener('DOMContentLoaded', initLanguageSwitcher);
