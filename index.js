// Add your code here

const submitData = (name, email) => {
  const formData = {
    name,
    email,
  };
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  };

  return fetch("http://localhost:3000/users", configurationObject)
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      document.body.append(object.id);
    })
    .catch(function (error) {
      alert("Bad things! Ragnarők!");
      document.body.append(error.message);
    });
};

submitData("Jack", "jack@gmail.com");
console.log("hereeeee");
