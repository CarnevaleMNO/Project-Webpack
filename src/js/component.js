import Logo from '../assets/logo.svg';


function component(){
    const main = document.createElement('main');
    const p = document.createElement('p');
    const img = document.createElement('img');
    main.append(p)
    p.append(img)
    img.src = Logo;
    img.alt = 'default logo';
    return main;
}

export default component;