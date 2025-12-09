document.addEventListener('DOMContentLoaded', () => {
    const crackBtn = document.getElementById('crackCookieBtn');
    const resetBtn = document.getElementById('resetBtn');
    const card = document.getElementById('fortuneCard');
    const cookieBox = document.getElementById('cookieContainer');
    const fortuneText = document.getElementById('fortuneText');

    const fortunes = [
        "Gas fees will be remarkably low for your next tx.",
        "A forgotten airdrop awaits discovery.",
        "HODL strong; volatility is temporary.",
        "Your private keys remain safe.",
        "A green candle is forming in your future.",
        "WAGMI.",
        "Verify, don't trust.",
        "The blocks are confirming in your favor.",
        "Smart money is following your lead.",
        "Diamond hands forge diamond outcomes."
    ];

    crackBtn.addEventListener('click', () => {
        crackBtn.disabled = true;
        crackBtn.textContent = "Cracking...";
        
        // Simple animation logic
        cookieBox.style.transform = "scale(1.1) rotate(5deg)";
        cookieBox.style.opacity = "0";
        
        setTimeout(() => {
            const msg = fortunes[Math.floor(Math.random() * fortunes.length)];
            fortuneText.textContent = `"${msg}"`;
            
            cookieBox.classList.add('hidden');
            card.classList.remove('hidden');
            
            // Trigger reflow
            void card.offsetWidth;
            card.classList.add('visible');
            crackBtn.classList.add('hidden');
        }, 500);
    });

    resetBtn.addEventListener('click', () => {
        card.classList.remove('visible');
        card.classList.add('hidden');
        cookieBox.classList.remove('hidden');
        crackBtn.classList.remove('hidden');
        
        setTimeout(() => {
            cookieBox.style.transform = "scale(1) rotate(0deg)";
            cookieBox.style.opacity = "1";
            crackBtn.textContent = "Crack Open Cookie";
            crackBtn.disabled = false;
        }, 100);
    });
});