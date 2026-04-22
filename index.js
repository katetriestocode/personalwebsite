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