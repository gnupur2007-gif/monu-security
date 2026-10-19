// Check Service Location Availability in Meerut
function checkLocation() {
    const loc = document.getElementById('userLocation').value;
    const res = document.getElementById('locResult');
    
    if (!res) return;

    if (loc === 'ganga') {
        res.innerHTML = "Great! Instant Doorstep Service available in Ganga Nagar.";
        res.style.color = "#25d366";
    } else if (loc === 'meerut_city') {
        res.innerHTML = "Service available! Technician can visit your location in Meerut City / Outer Area.";
        res.style.color = "#25d366";
    } else {
        res.innerHTML = "Service available! Technician can visit your location.";
        res.style.color = "#25d366";
    }
}

function toggleReviews() {
  const wrapper = document.getElementById('reviewsWrapper');
  const btn = document.getElementById('toggleReviewsBtn');
  const btnText = btn.querySelector('span');

  wrapper.classList.toggle('collapsed');
  btn.classList.toggle('active');

  if (wrapper.classList.contains('collapsed')) {
    btnText.textContent = 'Read Customer Reviews';
  } else {
    btnText.textContent = 'Hide Customer Reviews';
  }
}