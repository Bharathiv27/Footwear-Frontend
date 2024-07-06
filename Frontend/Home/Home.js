let currentContent = 1;
const totalContents = 4;

function nextContent() {
    // Hide the current content
    document.getElementById(`content${currentContent}`).style.display = 'none';
    
    // Increment the content index
    currentContent = currentContent % totalContents + 1;

    // Show the next content
    document.getElementById(`content${currentContent}`).style.display = 'flex';
}