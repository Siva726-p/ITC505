document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const generateButton = document.getElementById('generateButton');
    const colorBoxes = document.querySelectorAll('.color-box');
    const modeRadios = document.querySelectorAll('input[name="colorMode"]');
    const copyMessage = document.getElementById('copyMessage');
    
    // Generate initial colors
    generateColors();
    
    // Add event listener to generate button
    generateButton.addEventListener('click', generateColors);
    
    // Add event listeners to color boxes for copying
    colorBoxes.forEach(box => {
        box.addEventListener('click', function() {
            const colorCode = this.querySelector('.color-code').textContent;
            copyToClipboard(colorCode);
            
            // Show copy message
            copyMessage.classList.remove('hidden');
            setTimeout(() => {
                copyMessage.classList.add('hidden');
            }, 2000);
        });
    });
    
    // Function to generate colors based on selected mode
    function generateColors() {
        // Get selected mode
        let selectedMode = 'random';
        modeRadios.forEach(radio => {
            if (radio.checked) {
                selectedMode = radio.value;
            }
        });
        
        // Generate colors based on mode
        let colors = [];
        
        switch (selectedMode) {
            case 'monochromatic':
                colors = generateMonochromaticColors(4);
                break;
            case 'analogous':
                colors = generateAnalogousColors(4);
                break;
            default:
                colors = generateRandomColors(4);
                break;
        }
        
        // Apply colors to color boxes
        colorBoxes.forEach((box, index) => {
            const color = colors[index];
            box.style.backgroundColor = color;
            box.querySelector('.color-code').textContent = color;
        });
    }
    
    // Function to generate random colors
    function generateRandomColors(count) {
        const colors = [];
        for (let i = 0; i < count; i++) {
            const hex = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
            colors.push(hex);
        }
        return colors;
    }
    
    // Function to generate monochromatic colors
    function generateMonochromaticColors(count) {
        // Generate a random base color in HSL
        const hue = Math.floor(Math.random() * 360);
        const saturation = 70 + Math.floor(Math.random() * 30); // 70-100%
        
        const colors = [];
        for (let i = 0; i < count; i++) {
            // Vary the lightness for monochromatic scheme
            const lightness = 20 + Math.floor((i * 60) / count);
            const hslColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
            
            // Convert HSL to HEX
            const rgb = hslToRgb(hue / 360, saturation / 100, lightness / 100);
            const hex = rgbToHex(rgb[0], rgb[1], rgb[2]);
            colors.push(hex);
        }
        
        return colors;
    }
    
    // Function to generate analogous colors
    function generateAnalogousColors(count) {
        // Generate a random base color in HSL
        const baseHue = Math.floor(Math.random() * 360);
        const saturation = 70 + Math.floor(Math.random() * 30); // 70-100%
        const lightness = 50 + Math.floor(Math.random() * 20); // 50-70%
        
        const colors = [];
        const hueStep = 30; // Analogous colors are typically 30° apart
        
        for (let i = 0; i < count; i++) {
            // Calculate hue by stepping around the color wheel
            const hue = (baseHue + (i - Math.floor(count / 2)) * hueStep + 360) % 360;
            const hslColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
            
            // Convert HSL to HEX
            const rgb = hslToRgb(hue / 360, saturation / 100, lightness / 100);
            const hex = rgbToHex(rgb[0], rgb[1], rgb[2]);
            colors.push(hex);
        }
        
        return colors;
    }
    
    // Helper function to copy to clipboard
    function copyToClipboard(text) {
        navigator.clipboard.writeText(text).catch(err => {
            console.error('Could not copy text: ', err);
        });
    }
    
    // Helper function to convert HSL to RGB
    function hslToRgb(h, s, l) {
        let r, g, b;
        
        if (s === 0) {
            r = g = b = l; // achromatic
        } else {
            const hue2rgb = (p, q, t) => {
                if (t < 0) t += 1;
                if (t > 1) t -= 1;
                if (t < 1/6) return p + (q - p) * 6 * t;
                if (t < 1/2) return q;
                if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
                return p;
            };
            
            const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            const p = 2 * l - q;
            
            r = hue2rgb(p, q, h + 1/3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1/3);
        }
        
        return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
    }
    
    // Helper function to convert RGB to HEX
    function rgbToHex(r, g, b) {
        return '#' + [r, g, b].map(x => {
            const hex = x.toString(16);
            return hex.length === 1 ? '0' + hex : hex;
        }).join('');
    }
});