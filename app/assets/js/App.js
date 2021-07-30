import $ from 'jquery';

import Header from './modules/Header';
import Footer from './modules/Footer';

import ButtonLink from './modules/ButtonLink';
import DistributeOnOrbit from './modules/DistributeOnOrbit';

  
customElements.define('my-header', Header); 
customElements.define('my-footer', Footer);  

var buttonLink = new ButtonLink();
var distributeOnOrbit = new DistributeOnOrbit()
