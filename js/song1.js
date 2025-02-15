document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('audio-player');
    const playPauseButton = document.getElementById('play-pause-button');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    const progressBar = document.getElementById('progress-bar');
    const currentTimeDisplay = document.getElementById('current-time');
    const durationDisplay = document.getElementById('duration');

    // Play or pause the audio
    playPauseButton.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            playPauseButton.innerHTML = '&#10074;&#10074;'; // Pause icon
        } else {
            audio.pause();
            playPauseButton.innerHTML = '&#9654;'; // Play icon
        }
    });

    // Update progress bar and time display as the audio plays
    audio.addEventListener('timeupdate', function() {
        const currentTime = audio.currentTime;
        const duration = audio.duration;
        const value = (currentTime / duration) * 100;
        progressBar.value = value;

        // Update time display
        currentTimeDisplay.textContent = formatTime(currentTime);
        durationDisplay.textContent = formatTime(duration);
    });

    // Seek through the audio
    progressBar.addEventListener('input', function() {
        const seekTime = (progressBar.value / 100) * audio.duration;
        audio.currentTime = seekTime;
    });

    // Format time in minutes and seconds
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }

    // Previous button (optional functionality)
    prevButton.addEventListener('click', function() {
        // Implement functionality to go to previous song if available
        alert('Botão de voltar não implementado.');
    });

    // Next button (optional functionality)
    nextButton.addEventListener('click', function() {
        // Implement functionality to go to next song if available
        alert('Botão de próxima música não implementado.');
    });
});
