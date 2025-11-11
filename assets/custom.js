// ES6 or Vanilla JavaScript


// Function to handle opening the matching <details>
function setupSegmentDetailToggles() {
    const segments = document.querySelectorAll('.seg-link');
    const allDetails = document.querySelectorAll('details');

    // Hide all <details> on load
    allDetails.forEach(d => {
        d.removeAttribute('open');
        d.classList.add('hidden');
    });

    segments.forEach(seg => {
        seg.addEventListener('click', () => {

          // Do nothing if this segment is already active
          if (seg.classList.contains('active')) {
                return;
          }
            
            const targetId = seg.dataset.id;
            const targetDetail = document.getElementById(targetId);
            const introText = document.getElementById('intro-text')

            // Highlight the clicked segment
            segments.forEach(s => s.classList.remove('active'));
            seg.classList.add('active');

            // Hide intro text
            introText.classList.add('hidden');

            // Fade out all <details>
            allDetails.forEach(d => {
                if (!d.classList.contains('hidden')) {
                    d.classList.remove('fade-in');
                    d.classList.add('fade-out');
                    setTimeout(() => {
                        d.classList.add('hidden');
                        d.classList.remove('fade-out');
                        d.removeAttribute('open');
                    }, 300); // match the transition duration
                }
            });

            // Fade in the target <details>
            if (targetDetail) {
                targetDetail.classList.remove('hidden');
                targetDetail.setAttribute('open', true);
                setTimeout(() => {
                    targetDetail.classList.add('fade-in');
                }, 0); // slight delay to trigger transition
            }
        });
    });
}

// Initialize the click bindings
setupSegmentDetailToggles();


function removeHrefFromAlinks() {
    document.querySelectorAll('a.seg-link').forEach(link => {
        link.removeAttribute('href');
    });
}

// Call on page load
window.addEventListener('DOMContentLoaded', removeHrefFromAlinks);

