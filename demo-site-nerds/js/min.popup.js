(function(){const a=document.querySelector(".feedback__button"),b=document.querySelector(".popup"),c=document.querySelector(".popup__button-close"),d=b.querySelector("[name=name]"),e=b.querySelector("[name=mail]"),f=b.querySelector("form"),g=b.querySelector("[name=letter]");let h=!0,i="",j="";try{i=localStorage.getItem("name"),j=localStorage.getItem("mail")}catch(a){h=!1}a.addEventListener("click",function(a){a.preventDefault(),b.classList.add("popup--show"),i&&j?(d.value=i,e.value=j,g.focus()):d.focus()}),c.addEventListener("click",function(a){a.preventDefault(),b.classList.remove("popup--show"),b.classList.remove("popup--error")}),f.addEventListener("submit",function(a){d.value&&e.value?h&&(localStorage.setItem("name",d.value),localStorage.setItem("mail",e.value)):(a.preventDefault(),b.classList.remove("popup--error"),b.offsetWidth=b.offsetWidth,b.classList.add("popup--error"),console.log("\u041D\u0443\u0436\u043D\u043E \u0432\u0435\u0441\u0442\u0438 \u0438\u043C\u044F, \u0444\u0430\u043C\u0438\u043B\u0438\u044E \u0438 \u043F\u043E\u0447\u0442\u0443"))}),window.addEventListener("keydown",function(a){a.keyCode===27&&b.classList.contains("popup--show")&&(a.preventDefault(),b.classList.remove("popup--show"),b.classList.remove("popup--error"))})})();
