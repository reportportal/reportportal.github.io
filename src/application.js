import './common/css/fonts/fonts.scss';
import 'reset-css/reset.css';
import './common/css';
import Backbone from 'backbone';
import './utils/backboneUpdate';
import 'router';

Backbone.history.start({ pushState: true });
