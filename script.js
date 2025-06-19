const sections = document.querySelectorAll('.fade-in-section');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
      else {
      entry.target.classList.remove('visible'); // ensures reverse scroll works
    }
    });
  }, {
    threshold: 0.20 // Trigger when 15% of section is visible
  });

  sections.forEach(section => {
    observer.observe(section);
  });

  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function(event){
    event.preventDefault(); // stops default refresh
    console.log("Form Submitted");

    emailjs.sendForm("service_r7lnalj", "template_mxf0joh", form, "g2hI2Uiq77uyzdN_Q")
        .then(function(response){
            console.log("SUCCESSFULL", response.status, response.text);
            alert("Message sent successfully ✅");
            form.reset();
        })
        .catch(function(error){
            console.error("FAILED");
            alert("❌Failed to send the message, please try again later");
        })
  });;