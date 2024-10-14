// Cache DOM elements
const generateColorBtn = document.getElementById("generateColorBtn");
const clearColorsBtn = document.getElementById("clearColorsBtn");
const colorPreviewList = document.getElementById("colorPreviewList");
const noColorsMsg = document.getElementById("noColorsMsg");

// State to keep track of generated colors
let generatedColors = [];
let currentBackgroundColor = "#e0e0e0";

// Helper function to generate a random hex color
const generateRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
};

// Helper function to update the background color of the page
const updateBackgroundColor = (color) => {
    document.body.style.backgroundColor = color;
    currentBackgroundColor = color;
};

// Function to display or hide the "No colours generated yet" message
const toggleNoColorsMessage = () => {
    noColorsMsg.style.display = generatedColors.length === 0 ? "block" : "none";
};

// Function to create a color preview element and add event listeners
const createColorPreviewElement = (color) => {
    const colorDiv = document.createElement("div");
    colorDiv.className = "color-preview";
    colorDiv.style.backgroundColor = color;

    // Mouseover event: temporarily change the background color
    colorDiv.addEventListener("mouseover", () => updateBackgroundColor(color));

    // Mouseout event: revert to the most recently generated color
    colorDiv.addEventListener("mouseout", () => updateBackgroundColor(currentBackgroundColor));

    return colorDiv;
};

// Function to add a new color preview to the list
const addColorPreview = (color) => {
    if (!generatedColors.includes(color)) {
        generatedColors.push(color);
        const colorDiv = createColorPreviewElement(color);
        colorPreviewList.appendChild(colorDiv);
        toggleNoColorsMessage();
    }
};

// Function to generate a new color and update the background
const generateColor = () => {
    const newColor = generateRandomColor();
    updateBackgroundColor(newColor);
    addColorPreview(newColor);
};

// Function to clear all color previews and reset the background
const clearColors = () => {
    generatedColors = [];
    colorPreviewList.innerHTML = "";
    updateBackgroundColor("#e0e0e0");
    toggleNoColorsMessage();
};

// Set up event listeners
generateColorBtn.addEventListener("click", generateColor);
clearColorsBtn.addEventListener("click", clearColors);

// Initialize
toggleNoColorsMessage();
