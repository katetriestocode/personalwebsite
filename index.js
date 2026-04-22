document.getElementById('copy-email').addEventListener('click', function(event) {
  // This prevents the link from trying to "go" anywhere
  event.preventDefault(); 
  
  const email = 'caterina.camerlengo@icloud.com';
  
  navigator.clipboard.writeText(email).then(function() {
    alert('Email copied to clipboard: ' + email);
  }).catch(function(error) {
    console.error('Failed to copy: ', error);
  });
});



// Select the modal elements
const modal = document.getElementById("image-modal");
const modalText = document.getElementById("modal-text");
const closeBtn = document.querySelector(".close-button");

// Select all scattered photos (across all sections)
const allPhotos = document.querySelectorAll('.scatter-photo, .scatter-photo2, .scatter-photo3');

allPhotos.forEach(photo => {
    photo.addEventListener('click', () => {
        const description = photo.getAttribute('data-description');
        
        // Only open if there is actually a description
        if (description) {
            modalText.innerText = description;
            modal.style.display = "block";
        }
    });
});

// Close when clicking the X
closeBtn.onclick = () => { modal.style.display = "none"; }

// Close when clicking anywhere outside the white box
window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}