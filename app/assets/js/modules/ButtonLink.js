import $ from 'jquery';

class ButtonLink {
	constructor(){
        this.btnsWrap = $('.project__btns');
        this.hideVisibleSections();
        this.hideHiglightedBtns();
		this.toggleSection();
        this.highlightBtn();
	}

	toggleSection(){
		this.btnsWrap.on('click', '.btnLink', function() {
            var idSection = "#dot" + this.id;
            var section = $(idSection);
            section.toggleClass("project__section--is-visible"); 
        }); 
	}

    highlightBtn() {
        this.btnsWrap.on('click', '.btnLink', function() { 
            $(this).toggleClass("btn--is-highlighted");
        });
    }

    hideVisibleSections() {
        this.btnsWrap.on('click', '.btnLink', function() {
            var visibleSections = $('.project__section');
            visibleSections.not(this).removeClass("project__section--is-visible");
        });
    }

    hideHiglightedBtns() {
        this.btnsWrap.on('click', '.btnLink', function() {
            var highlightedBtns = $(.btn');
            highlightedBtns.not(this).removeClass("btn--is-highlighted");
        });
    }
}

export default ButtonLink;