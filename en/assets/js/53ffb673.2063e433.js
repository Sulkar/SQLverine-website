(self.webpackChunksq_lverine_website=self.webpackChunksq_lverine_website||[]).push([[1433],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),d=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(m.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,m=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=d(n),g=a,k=c["".concat(m,".").concat(g)]||c[g]||o[g]||l;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8562:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m},default:function(){return u}});var r=n(2122),a=n(9756),l=(n(7294),n(3905)),i={sidebar_position:10},p={unversionedId:"SQLverine/insert",id:"SQLverine/insert",isDocsHomePage:!1,title:"INSERT",description:"<img",source:"@site/docs/SQLverine/insert.md",sourceDirName:"SQLverine",slug:"/SQLverine/insert",permalink:"/SQLverine-website/en/docs/SQLverine/insert",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/SQLverine/insert.md",version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"sqlVerineSidebar",previous:{title:"DELETE",permalink:"/SQLverine-website/en/docs/SQLverine/delete"},next:{title:"TABLE: CREATE",permalink:"/SQLverine-website/en/docs/SQLverine/create"}},m=[{value:"eine neue Zeile einer Tabelle hinzuf\xfcgen",id:"eine-neue-zeile-einer-tabelle-hinzuf\xfcgen",children:[{value:"Beispiel:",id:"beispiel",children:[]}]}],d={toc:m};function u(e){var t=e.components,i=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("img",{src:n(7041).Z,style:{width:200}}),(0,l.kt)("h2",{id:"eine-neue-zeile-einer-tabelle-hinzuf\xfcgen"},"eine neue Zeile einer Tabelle hinzuf\xfcgen"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"INSERT INTO tabellenname (spaltenname_1, spaltenname_2, ..., spaltenname_n) \nVALUES (<wert_1>, <wert_2>, ..., <wert_n>)\n")),(0,l.kt)("p",null,'Mit dem INSERT INTO Befehl wird eine neue Zeile einer Tabelle hinzugef\xfcgt. Neben dem Tabellennamen m\xfcssen alle zu bef\xfcllenden Spaltennamen der Tabelle in Klammern dahinter eingetragen werden. Nur die Spalte "id", die automatisch hochgez\xe4hlt wird und einzigartig sein muss, wird nicht mit aufgef\xfchrt. Bei VALUES m\xfcssen die Werte in der richtigen Reihenfolge, passend der Reihenfolge der Spaltennamen, eingetragen werden.'),(0,l.kt)("h3",{id:"beispiel"},"Beispiel:"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Tabelle 1: schueler")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"id"),(0,l.kt)("th",{parentName:"tr",align:null},"vorname"),(0,l.kt)("th",{parentName:"tr",align:null},"nachname"),(0,l.kt)("th",{parentName:"tr",align:null},"geburtsdatum"),(0,l.kt)("th",{parentName:"tr",align:"center"},"klasse_id"),(0,l.kt)("th",{parentName:"tr",align:"center"},"fehltage"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Paul"),(0,l.kt)("td",{parentName:"tr",align:null},"Weber"),(0,l.kt)("td",{parentName:"tr",align:null},"2009-07-12"),(0,l.kt)("td",{parentName:"tr",align:"center"},"1"),(0,l.kt)("td",{parentName:"tr",align:"center"},"25")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"Margot"),(0,l.kt)("td",{parentName:"tr",align:null},"M\xfcller"),(0,l.kt)("td",{parentName:"tr",align:null},"2008-11-19"),(0,l.kt)("td",{parentName:"tr",align:"center"},"2"),(0,l.kt)("td",{parentName:"tr",align:"center"},"5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"Mahmud"),(0,l.kt)("td",{parentName:"tr",align:null},"Al'hissi"),(0,l.kt)("td",{parentName:"tr",align:null},"2008-06-30"),(0,l.kt)("td",{parentName:"tr",align:"center"},"1"),(0,l.kt)("td",{parentName:"tr",align:"center"},"6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"Sabrina"),(0,l.kt)("td",{parentName:"tr",align:null},"Otto"),(0,l.kt)("td",{parentName:"tr",align:null},"2007-05-19"),(0,l.kt)("td",{parentName:"tr",align:"center"},"2"),(0,l.kt)("td",{parentName:"tr",align:"center"},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"Ayse"),(0,l.kt)("td",{parentName:"tr",align:null},"\xdcn\xfcl"),(0,l.kt)("td",{parentName:"tr",align:null},"2008-12-12"),(0,l.kt)("td",{parentName:"tr",align:"center"},"2"),(0,l.kt)("td",{parentName:"tr",align:"center"},"3")))),(0,l.kt)("h4",{id:"befehl"},"Befehl"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"INSERT INTO tabellenname (vorname, nachname, geburtsdatum, klasse_id, fehltage) \nVALUES ('Ullrich', 'Gcheuder', '2006-07-05', 3, 20)\n")),(0,l.kt)("p",null,"Mit diesem Befehl wird ein weiterer Sch\xfcler angelegt."),(0,l.kt)("h4",{id:"ergebnis"},"Ergebnis:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"id"),(0,l.kt)("th",{parentName:"tr",align:null},"vorname"),(0,l.kt)("th",{parentName:"tr",align:null},"nachname"),(0,l.kt)("th",{parentName:"tr",align:null},"geburtsdatum"),(0,l.kt)("th",{parentName:"tr",align:"center"},"klasse_id"),(0,l.kt)("th",{parentName:"tr",align:"center"},"fehltage"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Paul"),(0,l.kt)("td",{parentName:"tr",align:null},"Weber"),(0,l.kt)("td",{parentName:"tr",align:null},"2009-07-12"),(0,l.kt)("td",{parentName:"tr",align:"center"},"1"),(0,l.kt)("td",{parentName:"tr",align:"center"},"25")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"Margot"),(0,l.kt)("td",{parentName:"tr",align:null},"M\xfcller"),(0,l.kt)("td",{parentName:"tr",align:null},"2008-11-19"),(0,l.kt)("td",{parentName:"tr",align:"center"},"2"),(0,l.kt)("td",{parentName:"tr",align:"center"},"5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"Mahmud"),(0,l.kt)("td",{parentName:"tr",align:null},"Al'hissi"),(0,l.kt)("td",{parentName:"tr",align:null},"2008-06-30"),(0,l.kt)("td",{parentName:"tr",align:"center"},"1"),(0,l.kt)("td",{parentName:"tr",align:"center"},"6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"Sabrina"),(0,l.kt)("td",{parentName:"tr",align:null},"Otto"),(0,l.kt)("td",{parentName:"tr",align:null},"2007-05-19"),(0,l.kt)("td",{parentName:"tr",align:"center"},"2"),(0,l.kt)("td",{parentName:"tr",align:"center"},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"Ayse"),(0,l.kt)("td",{parentName:"tr",align:null},"\xdcn\xfcl"),(0,l.kt)("td",{parentName:"tr",align:null},"2008-12-12"),(0,l.kt)("td",{parentName:"tr",align:"center"},"2"),(0,l.kt)("td",{parentName:"tr",align:"center"},"3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"Ullrich"),(0,l.kt)("td",{parentName:"tr",align:null},"Gcheuder"),(0,l.kt)("td",{parentName:"tr",align:null},"2006-07-05"),(0,l.kt)("td",{parentName:"tr",align:"center"},"3"),(0,l.kt)("td",{parentName:"tr",align:"center"},"20")))))}u.isMDXComponent=!0},7041:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Insert-40d2ceee95f0156b3a339d20264553a6.png"}}]);