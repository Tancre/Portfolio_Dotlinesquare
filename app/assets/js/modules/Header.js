class Header extends HTMLElement {
    constructor() {
        super()  
        this.innerHTML = this.checkIndex() 
    }

    checkIndex() { 

        var beginning = `
        <header class="menu">
            <h1 class="menu__title"><a class="menu__link" id="mainTitle" href="index.html">dotlinesqr</a></h1>
            <nav> 
                <ul>
                    <li class="menu__project"><a class="menu__link" id="project9" href="ilinx.html">Ilinx</a></li>
                    <li class="menu__project"><a class="menu__link" id="project8" href="ohe.html">Out-of-Hardware <br> Experience</a></li>
                    <li class="menu__project"><a class="menu__link" id="project7" href="blurrybound.html">Blurry Boundaries</a></li>
                    <li class="menu__project"><a class="menu__link" id="project5" href="maptext.html">A map Inside a text<br>A text Inside a map</a></li>
                    <li class="menu__project"><a class="menu__link" id="project4" href="iris.html">Iris</a></li>
                    <li class="menu__project"><a class="menu__link" id="project3" href="xthesis.html">X thesis on lifehacks</a></li>
                    <li class="menu__project"><a class="menu__link" id="project2" href="dot.html">The Dot</a></li>
                    <li class="menu__project"><a class="menu__link" id="project1" href="wittgenstein.html">Wittgenstein</a></li>
                </ul>
                <hr id="separator" class="menu__separator"><br>
                <ul>
                    <li class="menu__project"><a class="menu__link" id="projectX" href="#">Web Developement</a></li>                
                    <li class="menu__project"><a class="menu__link" id="projectY" href="#">Art Handling</a></li>
                </ul>
            </nav>
            `

        var refresh = '<a class="menu__refresh" href="javascript:location.reload(true)" ><img id="refresh" alt="Random Sketch" src="./assets/media/imgs/refresh.png"></a>'
        var refreshNone = '<a class="menu__refresh hide"><img id="refresh" alt="Random Sketch" src="./assets/media/imgs/refresh.png"></a>'
        var end = '</header>' 



        if (typeof on_index !== 'undefined') { 

            var innerHTML = beginning + refresh + end

            return innerHTML
            
        } else {
            var innerHTML = beginning + refreshNone + end

            return innerHTML
        }
    }
} 

export default Header 
