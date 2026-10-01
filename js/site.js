(function () {
  "use strict";

  var form = document.querySelector("[data-contact-form]");
  if (!form) return;

  var result = document.querySelector("[data-contact-result]");
  var status = document.querySelector("[data-contact-status]");
  var bodyField = document.querySelector("[data-contact-body]");
  var copyButton = document.querySelector("[data-copy-message]");
  var maxMessage = 800;

  function oneLine(value) {
    return value.replace(/[\r\n]+/g, " ").trim();
  }

  function showError(input, errorId, message) {
    var error = document.getElementById(errorId);
    if (message) {
      error.hidden = false;
      error.textContent = message;
      input.setAttribute("aria-invalid", "true");
    } else {
      error.hidden = true;
      error.textContent = "";
      input.removeAttribute("aria-invalid");
    }
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var nameInput = form.querySelector("#name");
    var emailInput = form.querySelector("#email");
    var messageInput = form.querySelector("#message");
    var name = oneLine(nameInput.value);
    var email = oneLine(emailInput.value);
    var message = messageInput.value.trim();
    var firstInvalid = null;

    var nameMessage = name ? "" : "Enter your name.";
    var emailMessage = "";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      emailMessage = "Enter a valid email address.";
    }
    var messageError = "";
    if (!message) {
      messageError = "Enter your question.";
    } else if (message.length > maxMessage) {
      messageError = "Shorten your question to 800 characters.";
    }

    showError(nameInput, "name-error", nameMessage);
    showError(emailInput, "email-error", emailMessage);
    showError(messageInput, "message-error", messageError);

    if (nameMessage) firstInvalid = nameInput;
    else if (emailMessage) firstInvalid = emailInput;
    else if (messageError) firstInvalid = messageInput;

    if (firstInvalid) {
      firstInvalid.focus();
      return;
    }

    var composed = "Name: " + name + "\nEmail: " + email + "\n\n" + message;
    var subject = "Question about the peptid.co.uk website";
    var mailto = "mailto:info@peptid.co.uk?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(composed);

    bodyField.value = composed;
    result.hidden = false;
    copyButton.textContent = "Copy message";

    if (mailto.length < 1900) {
      status.textContent = "Your email program should open, addressed to info@peptid.co.uk. If it does not, copy the message below and send it yourself. This is not an order.";
      window.location.href = mailto;
    } else {
      status.textContent = "Copy the message below and send it to info@peptid.co.uk. This page has not kept a copy, and this is not an order.";
    }

    result.querySelector("h2").focus();
  });

  copyButton.addEventListener("click", function () {
    var text = bodyField.value;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(
        function () {
          copyButton.textContent = "Copied";
        },
        function () {
          bodyField.focus();
          bodyField.select();
        }
      );
      return;
    }
    bodyField.focus();
    bodyField.select();
  });
})();
