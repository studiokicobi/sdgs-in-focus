/* -------------------------------------------------------------------------------- */
// Fullpage.js init
/* -------------------------------------------------------------------------------- */
var myFullpage = new fullpage('#fullpage', {
  licenseKey: '54FE54D1-5B644D5F-8CA2FDA4-26E5EB8F',
  sectionSelector: '.fullpage-section',
  css3: true,
  scrollBar: true,
  keyboardScrolling: true,
  animateAnchor: true,
  recordHistory: true,
  responsiveHeight: 750,
  responsiveWidth: 1024,
  scrollOverflow: false,
  anchors: ['Start', 'Introduction', 'Our-Focus', 'Universal-Health-Coverage',
  'SDG-17', 'SDG-17-part-1', 'SDG-17-part-2', 'SDG-17-part-3', 'SDG-17-part-4', 'SDG-17-part-5',
  'SDG-3', 'SDG-3-part-1', 'SDG-3-part-2', 'SDG-3-part-3',
  'SDG-3-1-2', 'SDG-3-1-2-part-1', 'SDG-3-1-2-part-2', 'SDG-3-1-2-part-3',
  'SDG-3-3', 'SDG-3-3-part-1', 'SDG-3-3-part-2', 'SDG-3-3-part-3', 'SDG-3-3-part-4', 'SDG-3-3-part-5', 'SDG-3-3-part-6', 'SDG-3-3-part-7', 'SDG-3-3-part-8',
  'SDG-3-4', 'SDG-3-4-part-1', 'SDG-3-4-part-2', 'SDG-3-4-part-3', 'SDG-3-4-part-4',
  'SDG-5-10', 'SDG-5-10-part-1', 'SDG-5', 'SDG-10', 'SDG-5-10-part-2',
  'Call-to-Action'],
  menu: '#fullpage-nav'
});

/* -------------------------------------------------------------------------------- */
// Bulma burger icon
/* -------------------------------------------------------------------------------- */
$(document).ready(function() {
  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function() {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });
});

/* -------------------------------------------------------------------------------- */
// Pushy menu min.js
/* -------------------------------------------------------------------------------- */
!function(a){function b(){g.hasClass(k)?h.toggleClass(l):h.toggleClass(m),o&&g.one("transitionend",function(){o.focus()})}function c(){g.hasClass(k)?h.removeClass(l):h.removeClass(m)}function d(){g.hasClass(k)?(h.addClass(l),g.animate({left:"0px"},p),i.animate({left:q},p),j.animate({left:q},p)):(h.addClass(m),g.animate({right:"0px"},p),i.animate({right:q},p),j.animate({right:q},p)),o&&o.focus()}function e(){g.hasClass(k)?(h.removeClass(l),g.animate({left:"-"+q},p),i.animate({left:"0px"},p),j.animate({left:"0px"},p)):(h.removeClass(m),g.animate({right:"-"+q},p),i.animate({right:"0px"},p),j.animate({right:"0px"},p))}function f(){a(r).addClass(t),a(r).on("click",function(b){var c=a(this);c.hasClass(t)?(c.siblings(r).addClass(t).removeClass(s),c.removeClass(t).addClass(s)):c.addClass(t).removeClass(s),b.stopPropagation()})}var g=a(".pushy"),h=a("body"),i=a("#container"),j=a(".push"),k="pushy-left",l="pushy-open-left",m="pushy-open-right",n=a(".site-overlay"),o=a(g.data("focus")),p=200,q=g.width()+"px",r=".pushy-submenu",s="pushy-submenu-open",t="pushy-submenu-closed";a(r);if(void 0!==g.data("menu-btn-class"))var u=g.data("menu-btn-class");else var u=".menu-btn";var v=a(u+", .pushy-link"),w=a(u);a(document).keyup(function(a){27==a.keyCode&&(h.hasClass(l)||h.hasClass(m))&&(x?c():(e(),y=!1),w&&w.focus())});var x=function(){var a=document.createElement("p"),b=!1,c={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};if(null!==document.body){document.body.insertBefore(a,null);for(var d in c)void 0!==a.style[d]&&(a.style[d]="translate3d(1px,1px,1px)",b=window.getComputedStyle(a).getPropertyValue(c[d]));return document.body.removeChild(a),void 0!==b&&b.length>0&&"none"!==b}return!1}();if(x)f(),v.on("click",function(){b()}),n.on("click",function(){b()});else{h.addClass("no-csstransforms3d"),g.hasClass(k)?g.css({left:"-"+q}):g.css({right:"-"+q}),i.css({"overflow-x":"hidden"});var y=!1;f(),v.on("click",function(){y?(e(),y=!1):(d(),y=!0)}),n.on("click",function(){y?(e(),y=!1):(d(),y=!0)})}}(jQuery);
