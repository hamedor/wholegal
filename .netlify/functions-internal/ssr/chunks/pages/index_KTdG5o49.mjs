import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, i as renderSlot, j as renderComponent, k as renderHead } from '../astro_S1dQG2mO.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                          */

const $$Astro$e = createAstro("https://wholegal.ru");
const $$Container = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Container;
  const { narrow } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`content__container ${narrow ? `content__container--narrow` : ``}`, "class")} data-astro-cid-d6puh33w> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "C:/Users/dnpop/Desktop/work/wholegal/landing/src/components/Container.astro", void 0);

const $$Astro$d = createAstro("https://wholegal.ru");
const $$TextSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$TextSection;
  const { narrow } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Container", $$Container, { "narrow": narrow, "data-astro-cid-umdwotzd": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="text__section" data-astro-cid-umdwotzd> ${renderSlot($$result2, $$slots["default"])} </section> ` })} `;
}, "C:/Users/dnpop/Desktop/work/wholegal/landing/src/components/sections/TextSection.astro", void 0);

const $$Astro$c = createAstro("https://wholegal.ru");
const $$TwoColumnTextSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$TwoColumnTextSection;
  return renderTemplate`${renderComponent($$result, "Container", $$Container, { "data-astro-cid-xzruzkbr": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="three-col-text__section" data-astro-cid-xzruzkbr> <div class="three-col-text__column" data-astro-cid-xzruzkbr> ${renderSlot($$result2, $$slots["column-1-body"])} ${renderSlot($$result2, $$slots["column-1-cta"])} </div> <div class="three-col-text__column" data-astro-cid-xzruzkbr> ${renderSlot($$result2, $$slots["column-2-body"])} ${renderSlot($$result2, $$slots["column-2-cta"])} </div> </section> ` })} `;
}, "C:/Users/dnpop/Desktop/work/wholegal/landing/src/components/sections/TwoColumnTextSection.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$b = createAstro("https://wholegal.ru");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Header;
  const { rightMenu } = Astro2.props;
  return renderTemplate(_a || (_a = __template([`<script type="module">
  const bodyElement = document.querySelector('body');
  const menuButton = document.querySelector('#menuButton')
  const navHeader = document.querySelector('#odysseyNavHeader');
  const menuButtonIconHam = document.querySelector('#menuButtonIconHam');
  const menuButtonIconClose = document.querySelector('#menuButtonIconClose');
  let scrollPosition = 0;

  menuButton.addEventListener('click', toggleMenu)

  function toggleMenu() {
    menuButtonIconHam.toggleAttribute('hidden');
    menuButtonIconClose.toggleAttribute('hidden');
    
    if (navHeader.hasAttribute('mobile-menu-open', true)) {
      menuButton.title = "Open Main Menu"
      // unlock scroll position
      bodyElement.style.removeProperty('overflow');
      bodyElement.style.removeProperty('position');
      bodyElement.style.removeProperty('top');
      bodyElement.style.removeProperty('width');
      window.scrollTo(0, scrollPosition);
    } else {
      menuButton.title = "Close Main Menu"
      // lock scroll position
      scrollPosition = window.pageYOffset;
      bodyElement.style.overflow = 'hidden';
      bodyElement.style.position = 'fixed';
      bodyElement.style.top = \`-\${scrollPosition}px\`;
      bodyElement.style.width = '100%';
    }
    
    navHeader.toggleAttribute('mobile-menu-open');
  }
<\/script> `, '<header id="odysseyNavHeader"', ' data-astro-cid-3ef6ksr2> <div class="header-logo-menu__container" data-astro-cid-3ef6ksr2> <button id="menuButton" title="Open Main Menu" data-astro-cid-3ef6ksr2></button> <a class="header-logo__link" href="/" data-astro-cid-3ef6ksr2> ', ' </a> </div> <div class="header-nav__container" data-astro-cid-3ef6ksr2></div> <div class="header-action-item__container" data-astro-cid-3ef6ksr2> ', " </div> </header> "], [`<script type="module">
  const bodyElement = document.querySelector('body');
  const menuButton = document.querySelector('#menuButton')
  const navHeader = document.querySelector('#odysseyNavHeader');
  const menuButtonIconHam = document.querySelector('#menuButtonIconHam');
  const menuButtonIconClose = document.querySelector('#menuButtonIconClose');
  let scrollPosition = 0;

  menuButton.addEventListener('click', toggleMenu)

  function toggleMenu() {
    menuButtonIconHam.toggleAttribute('hidden');
    menuButtonIconClose.toggleAttribute('hidden');
    
    if (navHeader.hasAttribute('mobile-menu-open', true)) {
      menuButton.title = "Open Main Menu"
      // unlock scroll position
      bodyElement.style.removeProperty('overflow');
      bodyElement.style.removeProperty('position');
      bodyElement.style.removeProperty('top');
      bodyElement.style.removeProperty('width');
      window.scrollTo(0, scrollPosition);
    } else {
      menuButton.title = "Close Main Menu"
      // lock scroll position
      scrollPosition = window.pageYOffset;
      bodyElement.style.overflow = 'hidden';
      bodyElement.style.position = 'fixed';
      bodyElement.style.top = \\\`-\\\${scrollPosition}px\\\`;
      bodyElement.style.width = '100%';
    }
    
    navHeader.toggleAttribute('mobile-menu-open');
  }
<\/script> `, '<header id="odysseyNavHeader"', ' data-astro-cid-3ef6ksr2> <div class="header-logo-menu__container" data-astro-cid-3ef6ksr2> <button id="menuButton" title="Open Main Menu" data-astro-cid-3ef6ksr2></button> <a class="header-logo__link" href="/" data-astro-cid-3ef6ksr2> ', ' </a> </div> <div class="header-nav__container" data-astro-cid-3ef6ksr2></div> <div class="header-action-item__container" data-astro-cid-3ef6ksr2> ', " </div> </header> "])), maybeRenderHead(), addAttribute(`${rightMenu ? "header--right" : ``.trim()}`, "class"), renderSlot($$result, $$slots["logo"]), renderSlot($$result, $$slots["action-item"]));
}, "C:/Users/dnpop/Desktop/work/wholegal/landing/src/components/Header.astro", void 0);

const $$Astro$a = createAstro("https://wholegal.ru");
const $$BaseHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const settings = {
    title: `\u0410\u0434\u0432\u043E\u043A\u0430\u0442`,
    description: `\u041F\u043E\u043C\u043E\u0449\u044C \u0432 \u043F\u043E\u0438\u0441\u043A\u0435 \u0430\u0434\u0432\u043E\u043A\u0430\u0442\u0430, \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C \u0430\u0434\u0432\u043E\u043A\u0430\u0442\u043E\u0432`,
    url: `https://wholegal.ru`,
    name: `Wholegal`
  };
  const title = Astro2.props.title || settings.title;
  const description = Astro2.props.description || settings.description;
  const canonicalURL = Astro2.props.canonicalURL || new URL(Astro2.url.pathname, Astro2.site);
  const image = new URL(Astro2.props.image || "./social.png", Astro2.site);
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/png" href="/favicon.svg"><!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Generator --><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(canonicalURL, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(image, "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(canonicalURL, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(image, "content")}><!-- Google Analytics -->`;
}, "C:/Users/dnpop/Desktop/work/wholegal/landing/src/components/head/BaseHead.astro", void 0);

const $$Astro$9 = createAstro("https://wholegal.ru");
const $$Base = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Base;
  const { seo } = Astro2.props;
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { ...seo })}${renderHead()}</head> <body> ${renderSlot($$result, $$slots["announcement-bar"])} ${renderSlot($$result, $$slots["header"])} <main id="content"> ${renderSlot($$result, $$slots["default"])} </main> ${renderSlot($$result, $$slots["footer"])} </body></html>`;
}, "C:/Users/dnpop/Desktop/work/wholegal/landing/src/layouts/Base.astro", void 0);

const $$Astro$8 = createAstro("https://wholegal.ru");
const $$Logo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Logo;
  return renderTemplate`${maybeRenderHead()}<p class="odyssey-logo" data-astro-cid-tvrurpns>Wholegal</p> `;
}, "C:/Users/dnpop/Desktop/work/wholegal/landing/src/components/Logo.astro", void 0);

const $$Astro$7 = createAstro("https://wholegal.ru");
const $$Page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Page;
  const { seo } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Base, { "seo": seo }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div id="page"> ${renderSlot($$result2, $$slots["default"])} </div> `, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "rightMenu": true, "slot": "header" }, { "default": ($$result3) => renderTemplate`  <button>Напиши нам</button> `, "logo": ($$result3) => renderTemplate`<span> ${renderComponent($$result3, "Logo", $$Logo, {})} </span>` })}` })} `;
}, "C:/Users/dnpop/Desktop/work/wholegal/landing/src/layouts/Page.astro", void 0);

const $$Astro$6 = createAstro("https://wholegal.ru");
const $$HeroSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$HeroSection;
  return renderTemplate`${renderComponent($$result, "Container", $$Container, { "data-astro-cid-7nmnspah": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="hero-section__section" data-astro-cid-7nmnspah> <div class="hero-section__text" data-astro-cid-7nmnspah> ${renderSlot($$result2, $$slots["text-container"])} </div> <div class="hero-section__image" data-astro-cid-7nmnspah> ${renderSlot($$result2, $$slots["image-container"])} </div> </section> ` })} `;
}, "C:/Users/dnpop/Desktop/work/wholegal/landing/src/components/sections/HeroSection.astro", void 0);

const $$Astro$5 = createAstro("https://wholegal.ru");
const $$Relax = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Relax;
  return renderTemplate`${maybeRenderHead()}<div class="parallax" data-astro-cid-4h22mfat> <h1 data-astro-cid-4h22mfat>
Спокойствие
</h1> <div class="mask" data-astro-cid-4h22mfat></div> </div> `;
}, "C:/Users/dnpop/Desktop/work/wholegal/landing/src/components/Relax.astro", void 0);

const $$Astro$4 = createAstro("https://wholegal.ru");
const $$FormInput = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$FormInput;
  const { type = "text", label, name, placeholder, required } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="form-field__container" data-astro-cid-m5hqu5ue> ${label && renderTemplate`<label${addAttribute(name, "for")} data-astro-cid-m5hqu5ue>${label}</label>`} <input${addAttribute(type, "type")}${addAttribute(name, "name")}${addAttribute(placeholder, "placeholder")}${addAttribute(required, "required")} data-astro-cid-m5hqu5ue> </div> `;
}, "C:/Users/dnpop/Desktop/work/wholegal/landing/src/components/forms/formFields/FormInput.astro", void 0);

const $$Astro$3 = createAstro("https://wholegal.ru");
const $$FormTextarea = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$FormTextarea;
  const { label, name, placeholder, rows = 4, required } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="form-field__container" data-astro-cid-fuyfqhu4> ${label && renderTemplate`<label${addAttribute(name, "for")} data-astro-cid-fuyfqhu4>${label}</label>`} <textarea${addAttribute(name, "name")}${addAttribute(placeholder, "placeholder")}${addAttribute(rows, "rows")}${addAttribute(required, "required")} data-astro-cid-fuyfqhu4></textarea> </div> `;
}, "C:/Users/dnpop/Desktop/work/wholegal/landing/src/components/forms/formFields/FormTextarea.astro", void 0);

const $$Astro$2 = createAstro("https://wholegal.ru");
const $$ContactForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ContactForm;
  return renderTemplate` ${maybeRenderHead()}<form name="Contact Form" method="POST" data-astro-cid-baqc3mtv> ${renderComponent($$result, "FormInput", $$FormInput, { "type": "text", "label": "\u0418\u043C\u044F", "name": "Name", "placeholder": "\u0418\u0432\u0430\u043D \u0418\u0432\u0430\u043D\u043E\u0432", "data-astro-cid-baqc3mtv": true })} ${renderComponent($$result, "FormInput", $$FormInput, { "type": "text", "label": "\u0422\u0435\u043B\u0435\u0444\u043E\u043D", "name": "Phone", "placeholder": "+71112233444", "data-astro-cid-baqc3mtv": true })} ${renderComponent($$result, "FormTextarea", $$FormTextarea, { "label": "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435", "name": "Message", "placeholder": "\u041A\u0440\u0430\u0442\u043A\u043E \u0438\u0437\u043B\u043E\u0436\u0438 \u0437\u0434\u0435\u0441\u044C \u0441\u0443\u0442\u044C \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u044B", "data-astro-cid-baqc3mtv": true })} <button class="button" id="submitBtn" data-astro-cid-baqc3mtv>
Отправить
</button> <div id="spinner" style="display: none;" data-astro-cid-baqc3mtv>Отправляем</div> </form> <div id="status" class="status" data-astro-cid-baqc3mtv></div> `;
}, "C:/Users/dnpop/Desktop/work/wholegal/landing/src/components/forms/ContactForm.astro", void 0);

const $$Astro$1 = createAstro("https://wholegal.ru");
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${renderComponent($$result, "Container", $$Container, { "data-astro-cid-xmivup5a": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="contact-hero__section" data-astro-cid-xmivup5a> <div class="contact-hero__text-section" data-astro-cid-xmivup5a> <h1 data-astro-cid-xmivup5a>Напиши нам!</h1> <p data-astro-cid-xmivup5a>
Выслушаем твой запрос, придумаем как помочь:
</p> <div data-astro-cid-xmivup5a> <p data-astro-cid-xmivup5a> <a href="mailto:hello@odysseytheme.com" data-astro-cid-xmivup5a>wholegal@mail.ru</a> </p> </div> </div> <div class="col-2__container" data-astro-cid-xmivup5a> ${renderComponent($$result2, "ContactForm", $$ContactForm, { "data-astro-cid-xmivup5a": true })} </div> </section> ` })} `;
}, "C:/Users/dnpop/Desktop/work/wholegal/landing/src/components/Contact.astro", void 0);

const $$Astro = createAstro("https://wholegal.ru");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const seo = {
    title: "\u0410\u0434\u0432\u043E\u043A\u0430\u0442",
    description: "\u041F\u043E\u0438\u0441\u043A \u0430\u0434\u0432\u043E\u043A\u0430\u0442\u043E\u0432. \u041A\u043E\u043D\u0442\u0440\u043E\u043B\u044C \u0430\u0434\u0432\u043E\u043A\u0430\u0442\u043E\u0432"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Page, { "seo": seo }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroSection", $$HeroSection, {}, { "image-container": ($$result3) => renderTemplate`${maybeRenderHead()}<picture> <img src="/assets/images/home/classic-hero.jpg" alt="Astro Odyssee" id="home-hero-image"> </picture>`, "text-container": ($$result3) => renderTemplate`<div> <h1>Адвокат Ян Выигроделов</h1> <p>
Бывший судья, следователь, прокурор, оперуполномоченный, инспектор
        РосКлещНадзора.
</p> <p>
Помогаю решать любые судебные, досудебные и постсудебные юридические
        вопросы. Работаю с юридическими, физическими и химическими лицами.
</p> <p>
Победил тысячу дел. Пока писал этот текст, победил еще 3. Только что еще
        5 новых взял.
</p> <p>
Вот реальный отзыв: Ян мне очень помог. Ян сказал, что мы точно победим
        и мы победили! Обязательно запишитесь к нему на консультацию или
        попадете в тюрьму или проиграете дом или что там у вас...
</p> </div>` })} ${renderComponent($$result2, "QuestionsSection", $$TextSection, {}, { "default": ($$result3) => renderTemplate` <div> <p class="question">Не устал от тысяч однотипных резюме адвокатов?</p> <p class="question">
Есть ощущение, что пока будешь разбираться, как найти хорошего, уже и
        суд закончится?
</p> <p class="question">
Страшно узнать уровень адвоката только после решения суда?
</p> <p class="question">УСТАЛ! СТРАШНО!</p> </div> ` })} ${renderComponent($$result2, "TextSection", $$TextSection, {}, { "default": ($$result3) => renderTemplate` <p class="text-large">
НЕОПРЕДЕЛЕННОСТЬ ПУГАЕТ. СТРАШНО ФИЗИЧЕСКИМ ЛИЦАМ, СТРАШНО ЮРИДИЧЕСКИМ.
      ЭТО НОРМАЛЬНО!
</p> <p class="text-base">
Как вообще выбрать адвоката? Как проверить информацию из резюме? Как
      узнать специализацию и квалификацию? Где искать реальные отзывы и кто их
      проверял? Откуда мне знать, что адвокат не договорится с оппонентами и не
      начнет "сливать" дело? Почему у одного услуги стоят 50 000 за всё дело, а
      у другого 15 000 за час? Как узнать, что мой делает действительно ВСЁ
      возможное для победы? В конце концов, что делать, если адвокат меня просто
      начнет бесить как человек?
</p> ` })} ${renderComponent($$result2, "TextSection", $$TextSection, {}, { "default": ($$result3) => renderTemplate` <p class="text-large">
Не будем тянуть. Ведь если ты дочитал до этого места, то либо еще не нашел
      хорошего адвоката, либо есть основания сомневаться в "хорошести" своего.
</p> <p class="text-base">Мы предлагаем....</p> ` })} ${renderComponent($$result2, "Relax", $$Relax, {})} ${renderComponent($$result2, "TextSection", $$TextSection, {}, { "default": ($$result3) => renderTemplate` <p class="text-large">Ну и, конечно, контроль над ситуацией:</p> ` })} ${renderComponent($$result2, "TwoColumnTextSection", $$TwoColumnTextSection, {}, { "column-1-body": ($$result3) => renderTemplate`<div> <h2>Подбор адвоката</h2> <ul class="list"> <li class="list-item">Проведем за тебя собеседования с адвокатами</li> <li class="list-item">Предоставим тебе сравнительную таблицу с понятными критериями</li> <li class="list-item">Дадим рекомендации на что обращать внимание в процессе работы</li> </ul> </div>`, "column-2-body": ($$result3) => renderTemplate`<div> <h2>Супервизия дела</h2> <ul class="list"> <li class="list-item">Определим цель проекта</li> <li class="list-item">
Разобьём проект на составные процессуальные и материальные части
</li> <li class="list-item">Составим список задач, определим сроки и критерии выполнения</li> <li class="list-item">
Будем еженедельно предоставлять отчет о проделанной адвокатом работе,
          о нарушенных сроках и объективных (а не субъективных адвокатских)
          причинах их растягивания
</li> <li class="list-item">
Будем еженедельно актуализировать список задач и расставлять их по
          приоритетности
</li> <li class="list-item">
Сообщим тебе, если появятся основания сомневаться в качестве
          адвокатских услуг
</li> <li class="list-item">ПОМОЖЕМ ВЕРНУТЬ ДЕНЬГИ ЗА НЕКАЧЕСТВЕННО ОКАЗАННЫЕ УСЛУГИ</li> </ul> </div>` })} ${renderComponent($$result2, "Contact", $$Contact, {})} ` })}`;
}, "C:/Users/dnpop/Desktop/work/wholegal/landing/src/pages/index.astro", void 0);

const $$file = "C:/Users/dnpop/Desktop/work/wholegal/landing/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
