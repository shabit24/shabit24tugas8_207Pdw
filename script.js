// Open modal with text content
function showText(textContent) {
    var modal = document.querySelector('.modal');
    var modalText = document.getElementById('modal-text');
    modalText.textContent = textContent;
    modal.style.display = 'block';
  }
  
  // Close modal
  function closeModal() {
    var modal = document.querySelector('.modal');
    modal.style.display = 'none';
  }
  // Function to display an alert when the page loads
function showAlert() {
    alert("Welcome to my website!");
  }
  
  // Open modal with text content
  function showText(textContent) {
    var modal = document.querySelector('.modal');
    var modalText = document.getElementById('modal-text');
    modalText.textContent = textContent;
    modal.style.display = 'block';
  }
  
  // Close modal
  function closeModal() {
    var modal = document.querySelector('.modal');
    modal.style.display = 'none';
  }
  
  // Call the showAlert function when the page loads
  window.onload = showAlert;
  