const getElementById = (id) => {
  let element = document.getElementById(id);
  return element;
};

const sendHandler = (id, key) => {
  let InputField = getElementById(id);
  localStorage.setItem(key, InputField.value);
  InputField.value = "";
};

document.getElementById("send-name-btn").addEventListener("click", function () {
  sendHandler("name-input", "Name");
});
document
  .getElementById("send-email-btn")
  .addEventListener("click", function () {
    sendHandler("email-input", "Email");
  });
document.getElementById("send-mess-btn").addEventListener("click", function () {
  sendHandler("message-input", "Message");
});

const deleteElement = (key) => {
  localStorage.removeItem(key);
};

document
  .getElementById("delete-name-btn")
  .addEventListener("click", function () {
    deleteElement("Name");
  });
document
  .getElementById("delete-email-btn")
  .addEventListener("click", function () {
    deleteElement("Email");
  });
document
  .getElementById("delete-mess-btn")
  .addEventListener("click", function () {
    deleteElement("Message");
  });

document.getElementById("reset-btn").addEventListener("click", function () {
  localStorage.clear();
});

document.getElementById("submit-btn").addEventListener("click", function () {
  let InputField = getElementById("name-input");
  localStorage.setItem("Name", InputField.value);
  let InputFieldd = getElementById("email-input");
  localStorage.setItem("Email", InputFieldd.value);
  let InputFielddd = getElementById("message-input");
  localStorage.setItem("Message", InputFielddd.value);
});
