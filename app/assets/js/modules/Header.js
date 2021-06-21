class Header extends HTMLElement {
    constructor() {
        super()  
        this.innerHTML =`
        <header class="menu">
            <h1 id="mainTitle" class="menu__title"><a href="#">dotlinesqr</a></h1>
            <nav> 
                <ul>
                    <li id="project9" class="menu__project"><a href="#">Ilinx</a></li>
                    <li id="project8" class="menu__project"><a href="#">Out-of-Hardware Experience</a></li>
                    <li id="project7" class="menu__project"><a href="#">Blurry Boundaries</a></li>
                    <li id="project6" class="menu__project"><a href="#">A text Inside a map</a></li>
                    <li id="project5" class="menu__project"><a href="#">A map Inside a text</a></li>
                    <li id="project4" class="menu__project"><a href="#">Iris</a></li>
                    <li id="project3" class="menu__project"><a href="#">X thesis on lifehacks</a></li>
                    <li id="project2" class="menu__project"><a href="#">The Dot</a></li>
                    <li id="project1" class="menu__project"><a href="#">Wittgenstein</a></li>
                </ul>
                <hr id="separator" class="menu__separator"><br>
                <ul>
                    <li id="projectX" class="menu__project"><a href="#">Web Developement</a></li>                
                    <li id="projectY" class="menu__project"><a href="#">Art Handling</a></li>
                </ul>
            </nav>
            <a class="menu__refresh" href="javascript:location.reload(true)" ><img alt="Random Sketch" src="./assets/media/imgs/refresh.png"></a>
        </header>
        `
    }
} 

export default Header 