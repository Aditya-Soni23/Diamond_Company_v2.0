const teleportBtn = document.querySelector('.teleport-btn');
const overlay = document.getElementById('teleport-overlay');

teleportBtn.addEventListener('click', (e) => {
e.preventDefault();

overlay.classList.remove('active'); // reset
void overlay.offsetWidth; // force reflow
overlay.classList.add('active');

setTimeout(() => {
  window.open('https://diamondcompany.netlify.app/', '_blank');
  overlay.classList.remove('active');
}, 1800);
});







const heroBg = document.querySelector('.hero-bg');
const leafCount = 20; // more leaves for fuller effect

for(let i = 0; i < leafCount; i++){
  const leaf = document.createElement('span');

  // Spread evenly across width with some random offset
  const leftPercent = (i / leafCount * 100) + Math.random() * 5; 
  leaf.style.left = leftPercent + "%";

  // Random size for natural variation
  const width = 15 + Math.random()*15;
  const height = 60 + Math.random()*40;
  leaf.style.width = width + "px";
  leaf.style.height = height + "px";

  // Random animation delay
  leaf.style.animationDelay = Math.random()*20 + "s";

  // Parallax factor
  leaf.dataset.factor = Math.random() * 0.5 + 0.5;

  heroBg.appendChild(leaf);
}

// Cursor parallax
document.querySelector('.hero').addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 15;
  const y = (e.clientY / window.innerHeight - 0.5) * 15;
  
  heroBg.querySelectorAll('span').forEach(leaf => {
    const factor = leaf.dataset.factor;
    leaf.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
  });
});



const oldCards = document.querySelectorAll('.card');

oldCards.forEach(card => {
  const imgSrc = card.querySelector('img').src;
  const productName = card.querySelector('h3').innerText;
  const category = card.querySelector('p')?.innerText || 'Category';
  const link = card.querySelector('a').href;

  card.outerHTML = `
    <div class="product">
      <img src="${imgSrc}" alt="${productName} Preview">
      <div>
        <h4>${productName}</h4>
        <span>${category}</span><br>
        <a href="${link}" target="_blank" rel="noopener noreferrer">View Product →</a>
      </div>
    </div>
  `;
});
