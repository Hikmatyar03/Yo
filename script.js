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
  bgMusic.play().catch(e => {
    console.log("Autoplay blocked. Waiting for interaction...");
    document.body.addEventListener("click", () => bgMusic.play(), { once: true });
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