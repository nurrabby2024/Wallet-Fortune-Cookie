const walletInput = document.getElementById("walletAddress");
const crackBtn = document.getElementById("crackCookieBtn");
const cookieContainer = document.getElementById("cookieContainer");
const fortuneCard = document.getElementById("fortuneCard");
const fortuneText = document.getElementById("fortuneText");
const resetBtn = document.getElementById("resetBtn");

const fortunes = [
  "A surprise airdrop may be closer than you think.",
  "Your next transaction will bring unexpected joy.",
  "A new on-chain friendship is about to appear.",
  "Gas fees will be kind to you this week.",
  "Your wallet hides a fortune of untapped potential.",
  "An old NFT may find new value soon.",
  "You will discover a gem before the crowd.",
  "Patience in bear markets brings bull market blessings."
];

function pickFortune(address) {
  if (!address) {
    // random if no wallet
    return fortunes[Math.floor(Math.random() * fortunes.length)];
  }

  // deterministic “random” based on wallet string
  let hash = 0;
  for (let i = 0; i < address.length; i++) {
    hash = (hash * 31 + address.charCodeAt(i)) >>> 0;
  }
  const idx = hash % fortunes.length;
  return fortunes[idx];
}

crackBtn.addEventListener("click", () => {
  const address = walletInput.value.trim();
  const f = pickFortune(address);

  // simple animation
  cookieContainer.classList.add("cracked");
  crackBtn.disabled = true;

  setTimeout(() => {
    fortuneText.textContent = f;
    fortuneCard.classList.remove("hidden");
  }, 400);
});

resetBtn.addEventListener("click", () => {
  crackBtn.disabled = false;
  fortuneCard.classList.add("hidden");
  cookieContainer.classList.remove("cracked");
});
