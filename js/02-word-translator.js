// Creating variable
let langCode = String(prompt("Enter one of four language codes: es, de, en or fr."));

// The result of the application execution
if (langCode === "es") {
    window.console.log("Hello World translated in Spanish is: Hola Mundo.");
} else if (langCode === "de") {
    window.console.log("Hello World translated in German is: Hallo Welt.");
} else if (langCode === "en") {
    window.console.log("Hello World translated in English is: Hello World.");
} else if (langCode === "fr") {
    window.console.log("Hello World translated in French is: Bonjour le monde.");
} else {
    window.console.log("Hello World translated in English is: Hello World.");
}