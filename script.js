// Toggle mobile menu
function toggleMenu(){
  document.getElementById("mobileMenu").classList.toggle("active");
}

// Function to open notes page based on course & semester
function openNotes(btn){
  const card = btn.closest('.course-card');
  const select = card.querySelector('.semester-select');
  const semester = select.value;
  const course = select.dataset.course;

  if(!semester){
    alert("Please select a semester!");
    return;
  }

  // Replace with your actual page links
  let url = `${course}-${semester.replace(" ","-").toLowerCase()}.html`;

  window.open(url, "_blank");
}
