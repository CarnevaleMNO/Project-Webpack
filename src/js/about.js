const aboutBtn = document.querySelector("#about-btn");
const content = document.querySelector(".content");

const about = () => {
  aboutBtn.addEventListener("click", function () {
    content.innerHTML = "";
    const aboutContent = document.createElement("div");
    aboutContent.classList.add("aboutContent");
    const aboutMe = document.createElement("div");
    const aboutMeP = document.createElement("p");
    const divTitle = document.createElement("div");
    divTitle.classList.add("borderBot");
    const img = document.createElement('img');
    img.src = 'https://images.unsplash.com/photo-1538128844159-f08f41bfb169?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1744&q=80';
    img.alt = 'A ramen shop in Japan';
    img.classList.add('background-img');
    aboutMe.innerHTML =
      '<h3 class="about-me-title">About Us: <span>A Little History</span></h3>';
    aboutMeP.innerText =
      "Hello, everyone. My name is Matthew and welcome to my shop, Project: Ramen. We are focused on bringing to you the gold standard of the ramen shops of Japan. We have traveled around Japan visiting large chains and small shops all in an effort to give you the opportunity to experience these wonderful flavors. At least one of us goes back every year to maintain our excellent quality and to disover perhaps a new style of ramen to add to our specialty menus. So please check them out. Of course the staple menu, too, is our creation after years of experience.";
    aboutContent.append(aboutMe, divTitle, aboutMeP);
    return content.append(aboutContent, img);
  });
};

export default about;
