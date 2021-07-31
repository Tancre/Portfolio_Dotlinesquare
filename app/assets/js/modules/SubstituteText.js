import $ from 'jquery';

class SubstiuteText {
	constructor(){
        this.textContainer = $(".project__description--ilinx");
        this.events();
	}

    events() {
        var self = this;
        const alpha = Array.from(Array(26)).map((e, i) => i + 65);
        var alphabet = alpha.map((x) => String.fromCharCode(x));
        console.log(alphabet);
        
        this.textContainer.hover(function(){
           var text = $(this).text();
           alphabet.forEach(function( i, val ) {
            var rdomNum = self.randomNumber(0, alphabet.length);
            text = text.replaceAll(i.toLowerCase(), alphabet[rdomNum].toLowerCase());
           });

           text = $(this).html(text);
           

        });
    }

    randomNumber(min, max) { 
        return Math.floor(Math.random() * (max - min) + min);
    }

    refreshData() {
        
    }
}

export default SubstiuteText