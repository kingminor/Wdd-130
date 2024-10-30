const slider = document.getElementById('timelineSlider');
const timeline = document.querySelector('.timeline');

// Set the max value based on the number of events
const numberOfEvents = document.querySelectorAll('.event').length;
slider.max = (numberOfEvents - 1) * 20; // Max is based on the number of events

slider.addEventListener('input', (event) => {
    const value = event.target.value;
    // Calculate the new left position based on the slider value
    const newLeft = -value + '%'; // Move the timeline left
    timeline.style.left = newLeft;

    // Set the slider to ensure it displays the first event at 0 and last at max
    if (value === '0') {
        timeline.style.left = '0%'; // Start position
    } else if (value === slider.max) {
        timeline.style.left = `-${value}%`; // End position
    }
});
