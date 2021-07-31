import $ from 'jquery';

class DistributeOnOrbit {

	constructor(){
        this.radius = 350;
        this.fields = $('.planet');
        this.orbit = $('.orbit');
        this.width = this.orbit.width();
        this.height = this.orbit.height();
        this.angle = 0;
        this.step = (2*Math.PI) / this.fields.length;
        this.distributeElements();
	}

    distributeElements() {
        var that = this;
        this.fields.each(function() {
            var currentItem = this;
            var x = Math.round(that.width/2 + that.radius * Math.cos(that.angle) - $(this).width()/2),
                y = Math.round(that.height/2 + that.radius * Math.sin(that.angle) - $(this).height()/2);
            $(currentItem).css({
                left: x + 'px',
                top: y + 'px'
            });
            that.angle += that.step;
        });
    }
}

export default DistributeOnOrbit