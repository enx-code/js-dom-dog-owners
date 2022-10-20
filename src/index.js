console.log(data);

// WRITE YOUR CODE BELOW!
const dogsList = document.querySelector(".dogs-list");
const formButton = document.querySelector(".dogs-list__button--add");
const main = document.querySelector(".main");
function generateDogs() {
  data.forEach((dog) => {
    const li = document.createElement("li");
    li.classList.add("dogs-list__button");
    li.innerText = dog.name;
    dogsList.append(li);
    li.addEventListener("click", () => {
      const dogHtml = dogCard(dog);
      main.innerHTML = dogHtml;

      const button = document.querySelector(".btn");

      // toggle good dog/ bad dog button
      button.addEventListener("click", (e) => {
        const p = document.querySelector(".good-dog");
        const text = button.innerText;
        if (text === "Good dog!") {
          p.innerHTML = `<p><em>Is naughty?</em> no</p>`;
          button.innerText = "Bad dog!";
        }
        if (text === "Bad dog!") {
          p.innerHTML = `<p><em>Is naughty?</em> yes</p>`;
          button.innerText = "Good dog!";
        }
      });
    });
  });
}
generateDogs();
formButton.addEventListener("click", () => {
  const dogForm = addForm();
  main.innerHTML = dogForm;
  const form = document.querySelector(".form");
  const dogNameInput = document.querySelector("#name");
  const dogImageInput = document.querySelector("#image");
  const dogBioInput = document.querySelector("#bio");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const dogName = dogNameInput.value;
    const dogImage = dogImageInput.value;
    const dogBio = dogBioInput.value;
    const dogObject = {
      name: dogName,
      image: dogImage,
      bio: dogBio,
    };
    // data.push(dogObject);
    // dogsList.innerHTML = `
    //   <li class="dogs-list__button dogs-list__button--add">+</li>
    // `;
    const li = document.createElement("li");
    li.classList.add("dogs-list__button");
    li.innerText = dogObject.name;
    dogsList.append(li);
    li.addEventListener("click", () => {
      const dogHtml = dogCard(dogObject);
      main.innerHTML = dogHtml;
    });
  });
});
function dogCard(dog) {
  return `
        <section class="main__dog-section">
            <h2>${dog.name}</h2>
            <img
                src=${dog.image}
                alt=${dog.name}
            />
            <div class="main__dog-section__desc">
                <h3>Bio</h3>
                <p>
                    ${dog.bio}
                </p>
            </div class="main__dog-section__btn">
            <p><em>Is naughty?</em> ${dog.isGoodDog ? "yes" : "no"}</p>
            <button>Good dog!</button>
            <p class='good-dog'><em>Is naughty?</em> ${
              dog.isGoodDog ? "yes" : "no"
            }</p>
            ${buttonToggle(dog.isGoodDog)}
        </section>
    `;
}
function addForm() {
  return ` 
  <section class="main__dog-section">
    <h2>Add a new Dog</h2>
    <form class="form">
      <label for="name">Dog's name</label>
      <input type="text" id="name" name="name">
      <label for="image">Dog's picture</label>
      <input type="url" id="image" name="image">
       <label for="bio">Dog's bio</label>
       <textarea rows="5" id="bio" name="bio"></textarea>
       <input type="submit" id="submit" name="submit" value="Let's add a dog!" class="form__button">
    </form>
  </section>`;
}

function buttonToggle(isGoodDog) {
  // if isGoodDog === true, do something to the button
  if (!isGoodDog) return "<button class='btn'>Good dog!</button>";
  if (isGoodDog) return "<button class='btn'>Bad dog!</button>";
}