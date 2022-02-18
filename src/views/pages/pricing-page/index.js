/*
 * Copyright 2022 EPAM Systems
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { $ } from 'backbone';
import Epoxy from 'backbone.epoxy';
import Footer from 'components/footer';
import PricingPage from 'react-components/pricing-page/pricingPage.jsx';
import template from './pricing-page.jade';

export default Epoxy.View.extend({
  template,
  className: 'pricing-page',
  initialize() {
    this.renderTemplate();
    this.view = new PricingPage({ model: null, el: $('[data-js-sections-container]', this.$el) });
    $('[data-js-sections-container]', this.$el).append(this.view.render());
    this.footer = new Footer();
    $('[data-js-footer-container]', this.$el).html(this.footer.$el);
  },
  onDestroy() {
    this.view.destroy();
    this.footer.destroy();
  },
});
