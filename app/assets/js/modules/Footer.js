class Footer extends HTMLElement {
    constructor() {
        super()  
        this.innerHTML =`
        <footer class="foot" id="foot">
            <a class="foot__link" id="whoiam" href="#"><strong>WHO I AM</strong></a>
        </footer>
        `
    }
} 

export default Footer 