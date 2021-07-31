import $ from 'jquery';

import Header from './modules/Header';
import Footer from './modules/Footer';

import ButtonLink from './modules/ButtonLink';
import DistributeOnOrbit from './modules/DistributeOnOrbit';
import SubstiuteText from './modules/SubstituteText';

  
customElements.define('my-header', Header); 
customElements.define('my-footer', Footer);  

var buttonLink = new ButtonLink();

// if blurry boundaries
var distributeOnOrbit = new DistributeOnOrbit();

// if ilinx
// var substiuteText = new SubstiuteText();

