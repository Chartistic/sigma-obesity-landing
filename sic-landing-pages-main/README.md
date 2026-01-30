# Sigma Clinic Landing Pages
Accessible, semantic, minimal setup with **HTML, SCSS, JS**.

## Quickstart
```bash
npm install
npm run dev
npm run build
```

## Dev Notes

* Each page has one or more ```.skip-link``` elements at the top of the body to enable **accessibility** keyboard quick navigation.
* All navigation elements are reachable with keyboard navigation and having an outline as focus state.
* When the user set focus to hero input, the additional legal information incl. more info and privacy policy links are displayed.
  * **Accessibility features**
    * When navigating with keyboard our of the input field, the links will be focussed!
    * When navigatins back from section below (shift + tab), the links will not be focussed!
* When user sets focus to hero input, and has typed, the voice input button hides and the submit button appears.
* When any link with href="#start" is clicked, the page smoothly scrolls to the #start section and automatically focuses the hero input field, allowing the user to start typing immediately. This improves accessibility and user experience, especially for keyboard and assistive technology users.
* Using CSS Variables
  * all variables are defined in _variables.scss
  * it is possible to overwrite values on component level top maintain customizabilitty on demand, e.g.: ```<el class="bg-gradient-1" style="--gradients-bg-gradient-1-stop-1-color: red;" />```
  * Some are defined on component level, e.g. ```.symptom```
* Special component features:
  * ```.plus-grid``` has a css var (```--cols```) to control the amount of tiles. It’s all CSS calculations supported by modern brosers (>95% global browser coverage)
* images
  * all images are in ```public/img/``` and are already optimized (compressed, image optim)
* icons
  * we use Google Material Symbols, loaded via variable font. If you add new icons, make sure to only load the used icons with query param ```&icon_names=a,b,c```. **icon_names list must be alphabetically**
  * find icon names [here](https://fonts.google.com/icons?selected=Material+Symbols+Outlined:dew_point:FILL@0;wght@300;GRAD@0;opsz@24&icon.size=24&icon.color=%231f1f1f&icon.style=Outlined)
* Content
  * Legal pages content is in ```content/``` as Markdown formatted text.
  * Basic formatted markup can be added directly into ```body.legal-page #main > section.flow```
  * Make sure that the page header (h1 + p + hr.animated) are kept intact, the content starts below:

```html
<main id="main">
  <section class="flow" aria-labelledby="tos-title" data-width="narrow">

    <!-- Page Header Start -->
    <h1 id="tos-title">Privacy Policy (GDPR)</h1>
    <p>Effective date: August 26, 2025</p>
    <hr class="animated" />
    <!-- Page Header End -->

    <!-- ... content markup goes here ... -->

  </section>
</main>
```
