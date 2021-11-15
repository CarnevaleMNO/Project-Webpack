const homePage = () => {
    const homeBtn = document.querySelector('#home-btn');
    homeBtn.addEventListener('click', function(){
        return location.reload();
    })
  
}

export default homePage;