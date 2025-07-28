document.addEventListener("DOMContentLoaded", () => {
  const sceneText = document.getElementById("scene-text");
  const laiba = document.querySelector(".photo.laiba");
  const you = document.querySelector(".photo.you");
  const bgMusic = document.getElementById("bg-music");
  const leftLine = document.querySelector(".left-line");
  const rightLine = document.querySelector(".right-line");
  const reasonBox = document.getElementById("reason-box");
  const reasonInput = document.getElementById("reason-input");
  const submitBtn = document.getElementById("submit-btn");

  // Set music volume
  bgMusic.volume = 0.25;

  // Play music (handle autoplay)
  // Play music only after user interaction
function playMusic() {
  bgMusic.play()
    .then(() => {
      console.log("Music playing");
      // Optional: Hide the button or show "Music On"
    })
    .catch(e => {
      console.log("Still blocked? Show manual button");
      showPlayButton();
    });

  // Remove listener after first click
  document.body.removeEventListener("click", playMusic);
}

// Show a floating music button if needed
function showPlayButton() {
  const btn = document.createElement("button");
  btn.innerHTML = "🎵 Tap to Listen";
  btn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 9999;
    background: linear-gradient(145deg, #ff6ec7, #9d4edd);
    color: white;
    border: none;
    padding: 12px 20px;
    border-radius: 30px;
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    cursor: pointer;
    animation: pulse 2s infinite;
  `;

  btn.onclick = () => {
    bgMusic.play().then(() => {
      btn.style.opacity = "0";
      setTimeout(() => btn.remove(), 500);
    }).catch(() => alert("Please try again..."));
  };

  document.body.appendChild(btn);
}

// Try autoplay first
bgMusic.play().catch(() => {
  // If blocked, wait for any tap/click
  document.body.addEventListener("click", playMusic, { once: true });
  // Also show button as fallback
  setTimeout(showPlayButton, 2000);
});

  // Grow glowing lines
  setTimeout(() => {
    leftLine.classList.add("grow");
    rightLine.classList.add("grow");
  }, 800);

  // Scene 1: "Abey…"
  setTimeout(() => {
    sceneText.innerHTML = '<span class="abey">Abey…</span>';
    sceneText.classList.add("visible");
    laiba.classList.add("active");
  }, 3000);

  // Scene 2: "My Bachaa…"
  setTimeout(() => {
    sceneText.innerHTML = 'My <span class="name">Bachaa</span>…\nI can feel something’s wrong.';
    sceneText.classList.remove("visible");
    setTimeout(() => sceneText.classList.add("visible"), 100);
  }, 6000);

  // Scene 3: Cut to You
  setTimeout(() => {
    laiba.classList.remove("active");
    you.classList.add("active");
    sceneText.innerHTML = 'It’s me, <span class="name">Hammo</span>.\nI’m here.';
  }, 9000);

  // Scene 4: "I won’t say Hat…"
  setTimeout(() => {
    sceneText.innerHTML = 'You know me…\nI never say <span class="hat">Hat</span>\nunless I mean it.';
  }, 12000);

  // Scene 5: "Tujh bin guzara kaise hai?"
  setTimeout(() => {
    sceneText.innerHTML = 'I won’t say “Hat” now.\nJust… talk to me?\nI care too much to pretend.';
  }, 15000);

  // Scene 6: Final Frame + Show Input Box
  setTimeout(() => {
    sceneText.innerHTML = 'You call me <span class="name">Hammo</span>.\nI call you <span class="name">My Bachaa</span>.\nOur world… still exists.\nI’m here ❤️';
    you.classList.add("active");

    // Show the romantic box
    setTimeout(() => {
      reasonBox.classList.add("visible");
    }, 1500);
  }, 18000);

  // Submit Button
  submitBtn.addEventListener("click", () => {
    const message = reasonInput.value.trim();

    if (!message) {
      alert("💬 Just a word, Bachaa… I’m listening.");
      return;
    }

    submitBtn.textContent = "Sent 💜";
    submitBtn.disabled = true;

    setTimeout(() => {
      alert("Thank you, Bachaa… Hammo is listening.");
    }, 1000);
  });
});