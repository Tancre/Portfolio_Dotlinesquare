import $ from 'jquery';

class DistributeOnOrbit {
	constructor(){
        this.radius = 350;
        this.fields = $('.planet'),
        this.container = $('.orbit'),
        this.width = container.width(),
        this.height = container.height(),
        this.angle = 0,
        this.step = (2*Math.PI) / fields.length;
        this.distributeElements();
	}

    distributeElements() {
        var self = this;
        this.fields.each(function() {
            var x = Math.round(self.width/2 + self.radius * Math.cos(self.angle) - $(this).width()/2),
                y = Math.round(self.height/2 + self.radius * Math.sin(self.angle) - $(this).height()/2);
            $(this).css({
                left: x + 'px',
                top: y + 'px'
            });
            self.angle += step;
    }
}

export default DistributeOnOrbit