function openNotes(btn) {
    const card = btn.closest(".course-card");
    const select = card.querySelector(".semester-select");
    const semester = select.value;
    const course = select.dataset.course;

    const notes = {
        "bcs": {
      "Semester 1": "../bcs/1sembcs.html",
      "Semester 2": "../bcs/2sembcs.html",
      "Semester 3": "../bcs/3sembcs.html",
      "Semester 4": "../bcs/4sembcs.html",
      "Semester 5": "../bcs/5sembcs.html",
      "Semester 6": "../bcs/6thsem.html",
      "Semester 7": "bcs-semester-7.html",
      "Semester 8": "bcs-semester-8.html"
    },
    "bca": {
      "Semester 1": "bca-semester-1.html",
      "Semester 2": "bca-semester-2.html",
      "Semester 3": "bca-semester-3.html",
      "Semester 4": "bca-semester-4.html",
      "Semester 5": "bca-semester-5.html",
      "Semester 6": "bca-semester-6.html",
      "Semester 7": "bca-semester-7.html",
      "Semester 8": "bca-semester-8.html"
    },
    "datascience": {
      "Semester 1": "datascience-semester-1.html",
      "Semester 2": "datascience-semester-2.html",
      "Semester 3": "datascience-semester-3.html",
      "Semester 4": "datascience-semester-4.html",
      "Semester 5": "datascience-semester-5.html",
      "Semester 6": "datascience-semester-6.html",
      "Semester 7": "datascience-semester-7.html",
      "Semester 8": "datascience-semester-8.html"
    },
    "mcs": {
      "Semester 1": "mcs-semester-1.html",
      "Semester 2": "mcs-semester-2.html",
      "Semester 3": "mcs-semester-3.html",
      "Semester 4": "mcs-semester-4.html",
      "Semester 5": "mcs-semester-5.html",
      "Semester 6": "mcs-semester-6.html",
      "Semester 7": "mcs-semester-7.html",
      "Semester 8": "mcs-semester-8.html"
    },
    "mca": {
      "Semester 1": "mca-semester-1.html",
      "Semester 2": "mca-semester-2.html",
      "Semester 3": "mca-semester-3.html",
      "Semester 4": "mca-semester-4.html",
      "Semester 5": "mca-semester-5.html",
      "Semester 6": "mca-semester-6.html",
      "Semester 7": "mca-semester-7.html",
      "Semester 8": "mca-semester-8.html"
    }
  };

 if (notes[course] && notes[course][semester]) {
        window.location.href = notes[course][semester];
    } else {
        alert("Please select valid semester");
    }
}