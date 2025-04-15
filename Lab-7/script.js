document.getElementById('lastModified').textContent = document.lastModified;

document.getElementById("madLibForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const adjective = document.getElementById("adjective").value.trim();
    const noun = document.getElementById("noun").value.trim();
    const verb = document.getElementById("verb").value.trim();
    const adverb = document.getElementById("adverb").value.trim();
    const place = document.getElementById("place").value.trim();

    if (!adjective || !noun || !verb || !adverb || !place) {
        alert("⚠️ Please fill out all fields!");
        return;
    }

    const story = `Once upon a time in ${place}, there was a very ${adjective} ${noun} who loved to ${verb} ${adverb}. Everyone in town thought it was hilarious!`;
    alert("🎉 Here's your story:\n\n" + story);
    this.reset();
});
