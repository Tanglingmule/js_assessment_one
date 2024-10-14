const generateButton = document.getElementById('generateColorBtn'); // Updated ID
const clearButton = document.getElementById('clearColorsBtn'); // Updated ID
const previewContainer = document.getElementById('colorPreviewList'); // Updated ID
const noColorsMessage = document.getElementById('noColorsMsg'); // Updated ID

let colors = []; // Array to store generated colors
let lastGeneratedColor = ''; // To track the last generated color

// Function to generate a random color
function generateRandomColor() {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    return randomColor;
}

// Function to update the background color and previews
function updateColor() {
    const newColor = generateRandomColor();

    // Prevent duplicates
    if (!colors.includes(newColor)) {
        colors.push(newColor);
        lastGeneratedColor = newColor;
        document.body.style.backgroundColor = newColor;
        updatePreviewList();
    } else {
        updateColor(); // Retry if duplicate
    }
}

// Function to update the color preview list
function updatePreviewList() {
    previewContainer.innerHTML = ''; // Clear current previews

    colors.forEach(color => {
        const colorDiv = document.createElement('div');
        colorDiv.className = 'color-preview';
        colorDiv.style.backgroundColor = color;

        // Add mouseover and mouseout events
        colorDiv.addEventListener('mouseover', () => {
            document.body.style.backgroundColor = color;
        });

        colorDiv.addEventListener('mouseout', () => {
            document.body.style.backgroundColor = lastGeneratedColor;
        });

        previewContainer.appendChild(colorDiv);
    });

    // If there are colors, hide the message
    if (colors.length > 0) {
        noColorsMessage.style.display = 'none';
    }
}

// Function to clear colors
function clearColors() {
    colors = [];
    lastGeneratedColor = '';
    previewContainer.innerHTML = '<p id="noColorsMsg">No colors generated yet.</p>'; // Updated message
    document.body.style.backgroundColor = ''; // Reset background
}

// Event listeners
generateButton.addEventListener('click', updateColor);
clearButton.addEventListener('click', clearColors);
