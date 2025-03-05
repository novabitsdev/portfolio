function sendMail() {
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var message = document.getElementById("message").value.trim();

  // Validation check
  if (name === "" || email === "" || message === "") {
    alert("All fields are required!");
    return;
  }

  var params = {
    name: name,
    email: email,
    message: message,
  };

  const serviceID = "service_c6vtywy";
  const templateID = "template_55exufq";

  emailjs
    .send(serviceID, templateID, params)
    .then(function (response) {
      console.log("SUCCESS!", response.status, response.text);
      alert("Message sent successfully!");

      // Clear the input fields
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
    })
    .catch(function (error) {
      console.log("FAILED...", error);
      alert("Something went wrong. Please try again later.");
    });
}

// emailjs
//   .send(serviceID, templateID, params)
//   .then((res) => {
//     document.getElementById("name").value = "";
//     document.getElementById("email").value = "";
//     document.getElementById("message").value = "";
//     console.log(res);
//     alert("Your message sent successfully!!");
//   })
//   .catch((err) => console.log(err));
