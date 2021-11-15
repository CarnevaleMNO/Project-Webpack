const menuBtn = document.querySelector("#menu-btn");
const content = document.querySelector(".content");

const Menu = () => {
  menuBtn.addEventListener("click", function () {
    content.innerHTML = "";
    const menuContent = document.createElement('div');
    menuContent.classList.add('menuContent');
    const specialtyItem = document.createElement('div');
    specialtyItem.innerHTML = '<h3 class="specialty-item-title">Our current special: <span>Spicy Red-Pork Ramen</span></h3>'
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');
    const div4 = document.createElement('div');
    const div5 = document.createElement('div');
    const divTitle = document.createElement('div');
    const img1 = document.createElement('img');
    const img2 = document.createElement('img');
    const img3 = document.createElement('img');
    const img4 = document.createElement('img');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const p4 = document.createElement('p');
    p1.innerText = 'Miso Ramen';
    p2.innerText = 'Shio Ramen';
    p3.innerText = 'Pork Ramen';
    p4.innerText = 'Sweet Ramen';
    img1.src = 'https://images.unsplash.com/photo-1623341214825-9f4f963727da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80';
    img1.alt = 'Specialty Ramen';
    img2.src = 'https://images.unsplash.com/photo-1591325418441-ff678baf78ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80';
    img2.alt = 'Specialty Ramen';
    img3.src = 'https://images.unsplash.com/photo-1557872943-16a5ac26437e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1731&q=80';
    img3.alt = 'Specialty Ramen';
    img4.src = 'https://images.unsplash.com/photo-1618889482923-38250401a84e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80';
    img4.alt = 'Specialty Ramen';
    div1.append(img1)
    div1.append(p1)
    div2.append(img2)
    div2.append(p2)
    div3.append(img3)
    div3.append(p3)
    div4.append(img4)
    div4.append(p4)
    divTitle.classList.add('theSpecial');
    divTitle.append(specialtyItem, div5)
    div1.classList.add('specialty');
    div2.classList.add('specialty');
    div3.classList.add('specialty');
    div4.classList.add('specialty');
    div5.classList.add('borderBot')
    menuContent.append(divTitle, div1, div2, div3, div4);
    return content.append(menuContent);
  });
};

export default Menu;

{
  /* <div class="specialty item-one">
            <img src="https://images.unsplash.com/photo-1623341214825-9f4f963727da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="specialty ramen">
            <p>This is our famous miso ramen.</p>
        </div>
        <div class="specialty item-two">
            <img src="https://images.unsplash.com/photo-1591325418441-ff678baf78ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80" alt="specialty ramen">
            <p>This is our famous shio ramen.</p>
        </div>
        <div class="specialty item-three">
            <img src="https://images.unsplash.com/photo-1557872943-16a5ac26437e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1731&q=80" alt="specialty ramen">
            <p>This is our famous pork ramen.</p>
        </div>
        <div class="specialty item-four">
            <img src="https://images.unsplash.com/photo-1618889482923-38250401a84e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80" alt="specialty ramen">
            <p>This is our famous sweet ramen.</p>
        </div> */
}
