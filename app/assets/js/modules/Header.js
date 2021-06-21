class Header extends HTMLElement {
    constructor() {
        super()  
        this.innerHTML =`
        <header class="menu">
            <div class"menu__right"><a id="whoIam" href="#">Who I am</a></div>
            <h1 class="menu__title"><a id="mainTitle" href="#">dotlinesqr</a></h1>
            <nav> 
                <ul>
                    <li class="menu__project"><a id="project9" href="#">Ilinx</a></li>
                    <li class="menu__project"><a id="project8" href="#">Out-of-Hardware Experience</a></li>
                    <li class="menu__project"><a id="project7" href="#">Blurry Boundaries</a></li>
                    <li class="menu__project"><a id="project6" href="#">A text Inside a map</a></li>
                    <li class="menu__project"><a id="project5" href="#">A map Inside a text</a></li>
                    <li class="menu__project"><a id="project4" href="#">Iris</a></li>
                    <li class="menu__project"><a id="project3" href="#">X thesis on lifehacks</a></li>
                    <li class="menu__project"><a id="project2" href="#">The Dot</a></li>
                    <li class="menu__project"><a id="project1" href="#">Wittgenstein</a></li>
                </ul>
                <hr id="separator" class="menu__separator"><br>
                <ul>
                    <li class="menu__project"><a id="projectX" href="#">Web Developement</a></li>                
                    <li class="menu__project"><a id="projectY" href="#">Art Handling</a></li>
                </ul>
            </nav>
            <a class="menu__refresh" href="javascript:location.reload(true)" ><img id="refresh" alt="Random Sketch" src="./assets/media/imgs/refresh.png"></a>
        </header>
        `
    }
} 

export default Header 