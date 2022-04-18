import React from 'react';

const Header = () => {
  return (
    <div>
    <nav class="navbar nav-first navbar-dark bg-dark">
    <div class="container">
        <a class="navbar-brand" href="#">
            <img src="assets/imgs/navbar-brand.svg" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Pigga Landing page" />
        </a>
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link text-primary" href="#home">CALL US : <span class="pl-2 text-muted">(123) 456 7890</span></a>
            </li>                   
        </ul>
    </div>
</nav>
    </div>
  );
}

export default Header;
