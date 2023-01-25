(self.webpackChunkgrant_v1=self.webpackChunkgrant_v1||[]).push([[678],{3646:function(e,t,r){var a=r(7228);e.exports=function(e){if(Array.isArray(e))return a(e)},e.exports.__esModule=!0,e.exports.default=e.exports},9100:function(e,t,r){var a=r(9489),n=r(7067);function i(t,r,o){return n()?(e.exports=i=Reflect.construct.bind(),e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=i=function(e,t,r){var n=[null];n.push.apply(n,t);var i=new(Function.bind.apply(e,n));return r&&a(i,r.prototype),i},e.exports.__esModule=!0,e.exports.default=e.exports),i.apply(null,arguments)}e.exports=i,e.exports.__esModule=!0,e.exports.default=e.exports},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},7316:function(e){e.exports=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n},e.exports.__esModule=!0,e.exports.default=e.exports},319:function(e,t,r){var a=r(3646),n=r(6860),i=r(379),o=r(8206);e.exports=function(e){return a(e)||n(e)||i(e)||o()},e.exports.__esModule=!0,e.exports.default=e.exports},4811:function(e){"use strict";var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var r;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,r=!1,a=!1,n=0;n<e.length;n++){var i=e[n];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,a=r,r=!0,n++):r&&a&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,n-1)+"-"+e.slice(n-1),a=r,r=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,a=r,r=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),r=e,t.pascalCase?r.charAt(0).toUpperCase()+r.slice(1):r)};e.exports=t,e.exports.default=t},5928:function(e,t,r){var a=r(448);e.exports={siteMetadata:{title:" <Grant Wecker/>",siteUrl:"https://grantwecker.com",description:"Grant Wecker is a software developer and built this site from scratch.",image:"/preview.png",icon:"/icon.png"},trailingSlash:"never",plugins:["gatsby-plugin-image","gatsby-plugin-mdx","gatsby-plugin-sharp","gatsby-plugin-gatsby-cloud","gatsby-transformer-sharp","gatsby-plugin-robots-txt",{resolve:"gatsby-plugin-manifest",options:{name:"GrantWecker",short_name:"GrantWecker",start_url:"/",background_color:a.colors.darkGreen,theme_color:a.colors.white,display:"minimal-ui",icon:"src/images/icon.png"}},{resolve:"gatsby-plugin-styled-components",options:{displayName:"true"}},{resolve:"gatsby-source-filesystem",options:{name:"pages",path:"./src/pages/"},__key:"pages"},{resolve:"gatsby-source-filesystem",options:{name:"projects",path:"//projects/"}}]}},7059:function(e,t,r){"use strict";r.d(t,{G:function(){return z},L:function(){return h},M:function(){return k},P:function(){return w},_:function(){return s},a:function(){return o},b:function(){return p},c:function(){return d},g:function(){return c},h:function(){return l}});var a=r(7294),n=(r(4811),r(5697)),i=r.n(n);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t.indexOf(r=i[a])>=0||(n[r]=e[r]);return n}var l=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};var d=function(e){var t;return function(e){var t,r;return Boolean(null==e||null==(t=e.images)||null==(r=t.fallback)?void 0:r.src)}(e)?e:function(e){return Boolean(null==e?void 0:e.gatsbyImageData)}(e)?e.gatsbyImageData:function(e){return Boolean(null==e?void 0:e.gatsbyImage)}(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function p(e,t,r,a,n){return void 0===n&&(n={}),o({},r,{loading:a,shouldLoad:e,"data-main-image":"",style:o({},n,{opacity:t?1:0})})}function c(e,t,r,a,n,i,s,l){var d={};i&&(d.backgroundColor=i,"fixed"===r?(d.width=a,d.height=n,d.backgroundColor=i,d.position="relative"):("constrained"===r||"fullWidth"===r)&&(d.position="absolute",d.top=0,d.left=0,d.bottom=0,d.right=0)),s&&(d.objectFit=s),l&&(d.objectPosition=l);var p=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},d)});return p}var u,m=["children"],g=function(e){var t=e.layout,r=e.width,n=e.height;return"fullWidth"===t?a.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/r*100+"%"}}):"constrained"===t?a.createElement("div",{style:{maxWidth:r,display:"block"}},a.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+n+"' width='"+r+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},h=function(e){var t=e.children,r=s(e,m);return a.createElement(a.Fragment,null,a.createElement(g,o({},r)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],x=["fallback","sources","shouldLoad"],b=function(e){var t=e.src,r=e.srcSet,n=e.loading,i=e.alt,l=void 0===i?"":i,d=e.shouldLoad,p=s(e,f);return a.createElement("img",o({},p,{decoding:"async",loading:n,src:d?t:void 0,"data-src":d?void 0:t,srcSet:d?r:void 0,"data-srcset":d?void 0:r,alt:l}))},v=function(e){var t=e.fallback,r=e.sources,n=void 0===r?[]:r,i=e.shouldLoad,l=void 0===i||i,d=s(e,x),p=d.sizes||(null==t?void 0:t.sizes),c=a.createElement(b,o({},d,t,{sizes:p,shouldLoad:l}));return n.length?a.createElement("picture",null,n.map((function(e){var t=e.media,r=e.srcSet,n=e.type;return a.createElement("source",{key:t+"-"+n+"-"+r,type:n,media:t,srcSet:l?r:void 0,"data-srcset":l?void 0:r,sizes:p})})),c):c};b.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},v.displayName="Picture",v.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};var y=["fallback"],w=function(e){var t=e.fallback,r=s(e,y);return t?a.createElement(v,o({},r,{fallback:{src:t},"aria-hidden":!0,alt:""})):a.createElement("div",o({},r))};w.displayName="Placeholder",w.propTypes={fallback:n.string,sources:null==(u=v.propTypes)?void 0:u.sources,alt:function(e,t,r){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Validation failed."):null}};var k=function(e){return a.createElement(a.Fragment,null,a.createElement(v,o({},e)),a.createElement("noscript",null,a.createElement(v,o({},e,{shouldLoad:!0}))))};k.displayName="MainImage",k.propTypes=v.propTypes;var _,E,C=function(e,t,r){for(var a=arguments.length,n=new Array(a>3?a-3:0),o=3;o<a;o++)n[o-3]=arguments[o];return e.alt||""===e.alt?i().string.apply(i(),[e,t,r].concat(n)):new Error('The "alt" prop is required in '+r+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},S={image:i().object.isRequired,alt:C},L=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],O=["style","className"],j=new Set,I=function(e){var t=e.as,n=void 0===t?"div":t,i=e.image,d=e.style,p=e.backgroundColor,c=e.className,u=e.class,m=e.onStartLoad,g=e.onLoad,h=e.onError,f=s(e,L),x=i.width,b=i.height,v=i.layout,y=function(e,t,r){var a={},n="gatsby-image-wrapper";return"fixed"===r?(a.width=e,a.height=t):"constrained"===r&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:a}}(x,b,v),w=y.style,k=y.className,C=s(y,O),S=(0,a.useRef)(),I=(0,a.useMemo)((function(){return JSON.stringify(i.images)}),[i.images]);u&&(c=u);var z=function(e,t,r){var a="";return"fullWidth"===e&&(a='<div aria-hidden="true" style="padding-top: '+r/t*100+'%;"></div>'),"constrained"===e&&(a='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+r+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),a}(v,x,b);return(0,a.useEffect)((function(){_||(_=Promise.all([r.e(774),r.e(680)]).then(r.bind(r,8680)).then((function(e){var t=e.renderImageToString,r=e.swapPlaceholderImage;return E=t,{renderImageToString:t,swapPlaceholderImage:r}})));var e,t,a=S.current.querySelector("[data-gatsby-image-ssr]");return a&&l()?(a.complete?(null==m||m({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((function(){a.removeAttribute("data-gatsby-image-ssr")}),0)):document.addEventListener("load",(function e(){document.removeEventListener("load",e),null==m||m({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((function(){a.removeAttribute("data-gatsby-image-ssr")}),0)})),void j.add(I)):E&&j.has(I)?void 0:(_.then((function(r){var a=r.renderImageToString,n=r.swapPlaceholderImage;S.current&&(S.current.innerHTML=a(o({isLoading:!0,isLoaded:j.has(I),image:i},f)),j.has(I)||(e=requestAnimationFrame((function(){S.current&&(t=n(S.current,I,j,d,m,g,h))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[i]),(0,a.useLayoutEffect)((function(){j.has(I)&&E&&(S.current.innerHTML=E(o({isLoading:j.has(I),isLoaded:j.has(I),image:i},f)),null==m||m({wasCached:!0}),null==g||g({wasCached:!0}))}),[i]),(0,a.createElement)(n,o({},C,{style:o({},w,d,{backgroundColor:p}),className:k+(c?" "+c:""),ref:S,dangerouslySetInnerHTML:{__html:z},suppressHydrationWarning:!0}))},z=(0,a.memo)((function(e){return e.image?(0,a.createElement)(I,e):null}));z.propTypes=S,z.displayName="GatsbyImage";var M,N=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions"],A=function(e,t){for(var r=arguments.length,a=new Array(r>2?r-2:0),n=2;n<r;n++)a[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(a)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},P=new Set(["fixed","fullWidth","constrained"]),T={src:i().string.isRequired,alt:C,width:A,height:A,sizes:i().string,layout:function(e){if(void 0!==e.layout&&!P.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},G=(M=z,function(e){var t=e.src,r=e.__imageData,n=e.__error,i=s(e,N);return n&&console.warn(n),r?a.createElement(M,o({image:r},i)):(console.warn("Image not loaded",t),null)});G.displayName="StaticImage",G.propTypes=T},2102:function(e,t,r){var a=r(2632);e.exports={MDXRenderer:a}},2632:function(e,t,r){var a=r(319),n=r(9100),i=r(9713),o=r(7316),s=["scope","children"];function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=r(7294),c=r(4983).mdx,u=r(6948).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,i=o(e,s),l=u(t),m=p.useMemo((function(){if(!r)return null;var e=d({React:p,mdx:c},l),t=Object.keys(e),i=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(t,[""+r])).apply(void 0,[{}].concat(a(i)))}),[r,t]);return p.createElement(m,d({},i))}},448:function(e){e.exports={email:"grantwecker@live.com",socialMedia:[{name:"github",url:"https://github.com/gwecko"},{name:"linkedIn",url:"https://www.linkedin.com/in/grant-wecker"}],colors:{darkGreen:"#172B0A",green:"#485632",white:"#F0EBE0",red:"#DA465C"},navbarLinks:[{name:"About",url:"/#about"},{name:"Projects",url:"/#projects"},{name:"Contact",url:"/#contact"}]}},4053:function(e,t,r){"use strict";r.r(t),r.d(t,{Head:function(){return s},default:function(){return o}});var a=r(7294),n=r(1074);r(1597),r(448),n.default.nav.withConfig({displayName:"navbar__StyledNavbar",componentId:"sc-131vt6u-0"})(["display:flex;position:fixed;top:0;width:100%;height:70px;background:(rgba(23,43,10,.9));backdrop-filter:blur(30px);-webkit-backdrop-filter:blur(30px);font-size:.9em;z-index:5;.fadedown-enter{opacity:0.01;transform:translateY(-20px);transition:opacity 300ms var(--easing),transform 300ms var(--easing);}.fadedown-enter-active{opacity:1;transform:translateY(0px);transition:opacity 300ms var(--easing),transform 300ms var(--easing);}ul{list-style:none;margin-left:auto;padding-top:25px;margin-bottom:50px;}li{display:inline-block;margin:0px 35px 0px 0px;@media (max-width:480px){margin:0px 10px 0px 0px;}}a{color:var(--white);display:block;}.underline-anim{display:inline-block;position:relative;}.underline-anim:after{content:'';position:absolute;width:100%;transform:scaleX(0);height:3px;bottom:0;left:0;background-color:var(--red);transform-origin:bottom left;transition:transform 0.15s ease-out;}.underline-anim:hover:after{transform:scaleX(1);transform-origin:bottom left;}.hide-mobile{@media screen and (max-width:600px){display:none;}}.resume-link{display:inline;padding:8px;border:solid 2px rgba(218,70,92,.8);border-radius:5px;color:var(--white);background:rgba(218,70,92,.3);&:hover{background:rgba(218,70,92,.6);color:var(--white);transition:0.15s ease-in-out;}}span{font-size:3rem;margin-left:calc(1% + 10px);filter:sepia(1%)  hue-rotate(85deg) saturate(130%);}"]),n.default.footer.withConfig({displayName:"sideLinks__StyledSideLinks",componentId:"sc-fbeafr-0"})(["position:fixed;bottom:0;@media (max-width:600px){display:none}@media (max-height:480px){display:none}"]),n.default.div.withConfig({displayName:"sideLinks__StyledSocialsLine",componentId:"sc-fbeafr-1"})(['margin-left:3rem;filter:var(--dropShadow);@media (max-width:600px){padding-left:2rem;}ul{list-style:none;padding-left:0;margin:0;}li{padding-top:10px;}a{svg{height:30px;&:hover{transform:translateY(-3px);color:var(--white);}}}::after{content:"";display:block;width:2px;height:calc(10vh + 50px);margin:0 auto;background-color:var(--green);filter:drop-shadow(0px -3px 7px var(--darkGreen));}']),n.default.div.withConfig({displayName:"sideLinks__StyledEmailLine",componentId:"sc-fbeafr-2"})(["display:block;position:fixed;bottom:0px;right:4rem;filter:var(--dropShadow);a{writing-mode:vertical-lr;letter-spacing:0.09rem;font-size:1.05rem;&:hover{transform:translateY(-3px);color:var(--white);}}::after{content:'';display:block;width:3px;margin-left:.6rem;height:calc(10vh + 50px);background-color:var(--green);}"]),(0,n.createGlobalStyle)([":root{--darkGreen:#172B0A;--green:#485632;--gray:#8E99A6;--white:#F0EBE0;--red:#DA465C;--dropShadow:drop-shadow(0px -3px 7px var(--darkGreen));}*::-webkit-scrollbar{width:14px;@media (max-width:480px){width:0px;}}*::-webkit-scrollbar-track{background:var(--green);}*::-webkit-scrollbar-thumb{background-color:var(--darkGreen);border-radius:8px;border:2px solid var(--green);}*{margin:0;padding:0;border:0;outline:0;}html{min-height:-webkit-fill-available;height:100%;min-width:100%;scroll-behavior:smooth;box-sizing:border-box;}body{margin-top:0px;width:100%;height:100%;color:var(--white);font-family:'Lucida Sans','Lucida Sans Regular','Lucida Grande','Lucida Sans Unicode',Geneva,Verdana,sans-serif;line-height:1.5;background:var(--darkGreen);background-size:cover;-webkit-background-size:cover;@media (max-width:@iphone-screen){background-attachment:scroll;}}main{padding:100px 20%;overflow-x:hidden;background:linear-gradient(0deg,rgba(23,43,10,1) 0%,rgba(72,86,50,1) 40%,rgba(23,43,10,1) 100%);@media screen and (max-width:480px){padding:5%;}}section:first-of-type{border:none;margin-top:25vh;margin-bottom:50vh;}section{margin:20vw auto;padding:0px 0px 0px 10px;scroll-margin-top:10vh;}p{margin:20px 0 0;}a{color:var(--red);text-decoration:none;}h2{font-size:2.5em;width:max-content;}h2::after{content:'';display:inline-block;position:relative;top:-8px;width:300px;height:2px;margin-left:20px;background-color:var(--white);@media (max-width:800px){display:none;}}h2:not(:first-child)::after{content:none;}"]),n.default.section.withConfig({displayName:"greeting__StyledGreeting",componentId:"sc-vpuhj2-0"})(["h1,h2,h3,h4,h5,h6{margin:0;line-height:1.2;}h1{font-size:medium;color:var(--white);}h2{font-size:clamp(40px,8vw,80px);color:var(--white);@media (max-width:480px){font-size:30px;}}h3{font-size:clamp(30px,5vw,50px);color:var(--green);text-shadow:15px 0px 30px var(--darkGreen);@media (max-width:480px){font-size:25px;}}"]),n.default.div.withConfig({displayName:"greeting__StyledGreetingLinks",componentId:"sc-vpuhj2-1"})(["@media (min-width:600px){display:none;}text-align:center;padding-top:80px;ul{list-style:none;display:inline-flex;}a{padding:2vw;height:50px;width:50px;color:var(--red);&:active,&:hover{color:var(--white);transition:.2s;}svg{width:clamp(40px,40px,50px);height:clamp(40px,40px,50px);}}"]),r(4942);n.default.section.withConfig({displayName:"about__StyledAbout",componentId:"sc-14co17f-0"})(["h2{margin-top:80px;}h3{padding:10px 0;margin-top:30px;font-size:1.5rem;display:inline-flex;transition:color 0.2s;&:hover{cursor:pointer;color:var(--red);transition:color 0s;}}button{background:none;color:var(--white);font-size:initial;font-family:inherit;text-align:inherit;}span{display:inline-flex;color:var(--red);height:min-content;margin-right:10px;transition:0.2s ease-out;}.rotate{transform:rotate(90deg);-webkit-transform:rotate(90deg);transition:0.2s;}p{padding:0;margin:0;display:block;}mark{color:inherit;background-color:var(--darkGreen);}.show-answer{margin:10px 0px 0px 0px;padding:0px 0px 0px 10px;border-left:3px solid var(--green);max-height:1000px;transition:max-height 0.3s cubic-bezier(0.33,0,0.68,0);overflow:hidden;position:relative;}.hide-answer{margin:10px 0px 0px 0px;padding:0px 0px 0px 10px;border-left:3px solid var(--green);max-height:0;transition:max-height 0.3s cubic-bezier(0,0.55,0.45,1);overflow:hidden;position:relative;}h4{padding-bottom:15px;font-size:1.1rem;}@media screen and (max-width:768px){padding:10px;}#line-through{text-decoration:line-through;color:var(--white);}"]),r(2102),r(7059),n.default.section.withConfig({displayName:"projects__StyledProjects",componentId:"sc-7f2zry-0"})(["h2{padding-bottom:30px;}.container{display:flex;@media (max-width:768px){display:block;}@media (max-width:480px){width:90vw;}}"]),n.default.div.withConfig({displayName:"projects__StyledProjectList",componentId:"sc-7f2zry-1"})(["width:max-content;ul{list-style:none;padding:0;}li{width:max-content;padding-left:10px;margin:0px 30px 20px 10px;display:block;transition:.2s;&:hover{color:var(--red);transition:.1s;}}button{background:none;color:var(--white);font-size:initial;font-family:inherit;cursor:pointer;}.highlight{transition:.2s;padding:0 auto;border-left:3px solid var(--red);color:var(--white);}"]),n.default.div.withConfig({displayName:"projects__StyledProjectCard",componentId:"sc-7f2zry-2"})([".card{background:rgba(142,153,166,.07);padding:25px 35px 40px 35px;border-radius:5px;margin-top:0;margin-bottom:60px;border-left:5px solid var(--red);@media (max-width:480px){border:none;background:linear-gradient(to left,rgba(142,153,166,.1),rgba(23,43,10,.4));}}.card-top{display:flex;}h3{margin-right:0px;@media (max-width:480px){margin-right:auto;}}ul{display:inline-flex;list-style:none;padding:0;margin-left:auto;@media (max-width:480px){display:flex;}}li{margin:0 10px;@media (max-width:600px){margin:0 0 0 10px;}}a{display:block;transition:.2s;svg{width:1.7rem;stroke-width:2;}&:hover{color:var(--white);transition:.1s;}&:active{svg{fill:var(--white);}}}.img{filter:drop-shadow(5px 5px 10px var(--darkGreen));transition:.2s;&:hover{transform:translate(-1px,-2px);transition:.1s ease-in;}}"]),n.default.section.withConfig({displayName:"contact__StyledContact",componentId:"sc-1co4whh-0"})([".container{display:flex;align-items:center;padding-top:30px;@media screen and (max-width:600px){display:block;text-align:center;> button{margin:20px 20px;}}}p{max-width:500px;margin:0 auto;}button{margin:0px auto;padding:0px 40px 0px 20px;background:rgba(0,0,0,0);border:none;}.email-link{display:block;width:max-content;font-size:1.6em;padding:20px 25px 20px 25px;border:solid 3px rgba(218,70,92,.8);border-radius:12px;color:var(--white);background:rgba(218,70,92,.3);&:hover{background:rgba(218,70,92,.6);transition:0.15s ease-out;}}.resume-link{display:inline-block;}"]);var i=r(5928),o=function(){a.Fragment},s=function(){var e=i.siteMetadata.title,t=i.siteMetadata.description,r=i.siteMetadata.image,n=i.siteMetadata.siteUrl,o=i.siteMetadata.icon;return a.createElement(a.Fragment,null,a.createElement("meta",{"http-equiv":"content-language",content:"en-us"}),a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, viewport-fit=cover"}),a.createElement("meta",{name:"apple-mobile-web-app-capable",content:"yes"}),a.createElement("meta",{name:"apple-mobile-web-app-status-bar-style",content:"black-translucent"}),a.createElement("title",null,e),a.createElement("meta",{name:"description",content:t}),a.createElement("meta",{name:"image",content:r}),a.createElement("meta",{name:"icon",content:o}),a.createElement("meta",{property:"og:title",content:e}),a.createElement("meta",{property:"og:description",content:t}),a.createElement("meta",{property:"og:image",content:r}),a.createElement("meta",{property:"og:url",content:n}),a.createElement("meta",{property:"og:type",content:"website"}))}}}]);
//# sourceMappingURL=component---src-pages-index-js-53bdf04a8856f36aef1f.js.map