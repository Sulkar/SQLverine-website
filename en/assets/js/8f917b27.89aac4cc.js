(self.webpackChunksq_lverine_website=self.webpackChunksq_lverine_website||[]).push([[8972],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},o=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),o=s(n),h=a,b=o["".concat(u,".").concat(h)]||o[h]||c[h]||l;return n?r.createElement(b,i(i({ref:t},m),{},{components:n})):r.createElement(b,i({ref:t},m))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=o;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}o.displayName="MDXCreateElement"},748:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=n(2122),a=n(9756),l=(n(7294),n(3905)),i={sidebar_position:13},p={unversionedId:"SQLverine/alter",id:"SQLverine/alter",isDocsHomePage:!1,title:"TABLE: ALTER",description:"<img",source:"@site/docs/SQLverine/alter.md",sourceDirName:"SQLverine",slug:"/SQLverine/alter",permalink:"/SQLverine-website/en/docs/SQLverine/alter",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/SQLverine/alter.md",version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"sqlVerineSidebar",previous:{title:"TABLE: DROP",permalink:"/SQLverine-website/en/docs/SQLverine/drop"}},u=[{value:"Spalte einer Tabelle hinzuf\xfcgen",id:"spalte-einer-tabelle-hinzuf\xfcgen",children:[{value:"Beispiel:",id:"beispiel",children:[]}]},{value:"Spalte einer Tabelle l\xf6schen",id:"spalte-einer-tabelle-l\xf6schen",children:[{value:"Beispiel:",id:"beispiel-1",children:[]}]},{value:"Spalte/Tabelle umbennen",id:"spaltetabelle-umbennen",children:[{value:"Beispiel 1:",id:"beispiel-1-1",children:[]},{value:"Beispiel 2:",id:"beispiel-2",children:[]}]}],s={toc:u};function m(e){var t=e.components,i=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("img",{src:n(9681).Z,style:{width:200}}),(0,l.kt)("h2",{id:"spalte-einer-tabelle-hinzuf\xfcgen"},"Spalte einer Tabelle hinzuf\xfcgen"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ALTER TABLE tabellenname ADD spaltenname <DATENTYP>\n")),(0,l.kt)("p",null,"Dieser Befehl f\xfcgt einer Tabelle eine neue Spalte hinzu."),(0,l.kt)("h3",{id:"beispiel"},"Beispiel:"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Tabelle: schueler")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"id"),(0,l.kt)("th",{parentName:"tr",align:null},"vorname"),(0,l.kt)("th",{parentName:"tr",align:null},"nachname"),(0,l.kt)("th",{parentName:"tr",align:null},"geburtsdatum"),(0,l.kt)("th",{parentName:"tr",align:"center"},"klasse_id"),(0,l.kt)("th",{parentName:"tr",align:"center"},"fehltage")))),(0,l.kt)("h4",{id:"befehl"},"Befehl:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ALTER TABLE schueler ADD geburtsort TEXT\n")),(0,l.kt)("h4",{id:"ergebnis"},"Ergebnis:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"id"),(0,l.kt)("th",{parentName:"tr",align:null},"vorname"),(0,l.kt)("th",{parentName:"tr",align:null},"nachname"),(0,l.kt)("th",{parentName:"tr",align:null},"geburtsdatum"),(0,l.kt)("th",{parentName:"tr",align:"center"},"klasse_id"),(0,l.kt)("th",{parentName:"tr",align:"center"},"fehltage"),(0,l.kt)("th",{parentName:"tr",align:null},"geburtsort")))),(0,l.kt)("hr",null),(0,l.kt)("img",{src:n(2661).Z,style:{width:200}}),(0,l.kt)("h2",{id:"spalte-einer-tabelle-l\xf6schen"},"Spalte einer Tabelle l\xf6schen"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ALTER TABLE tabellenname DROP COLUMN spaltenname <DATENTYP>\n")),(0,l.kt)("p",null,"Dieser Befehl l\xf6scht eine Spalte einer Tabelle."),(0,l.kt)("h3",{id:"beispiel-1"},"Beispiel:"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Tabelle: schueler")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"id"),(0,l.kt)("th",{parentName:"tr",align:null},"vorname"),(0,l.kt)("th",{parentName:"tr",align:null},"nachname"),(0,l.kt)("th",{parentName:"tr",align:null},"geburtsdatum"),(0,l.kt)("th",{parentName:"tr",align:"center"},"klasse_id"),(0,l.kt)("th",{parentName:"tr",align:"center"},"fehltage"),(0,l.kt)("th",{parentName:"tr",align:null},"geburtsort")))),(0,l.kt)("h4",{id:"befehl-1"},"Befehl:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ALTER TABLE schueler DROP COLUMN geburtsort \n")),(0,l.kt)("h4",{id:"ergebnis-1"},"Ergebnis:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"id"),(0,l.kt)("th",{parentName:"tr",align:null},"vorname"),(0,l.kt)("th",{parentName:"tr",align:null},"nachname"),(0,l.kt)("th",{parentName:"tr",align:null},"geburtsdatum"),(0,l.kt)("th",{parentName:"tr",align:"center"},"klasse_id"),(0,l.kt)("th",{parentName:"tr",align:"center"},"fehltage")))),(0,l.kt)("h2",{id:"spaltetabelle-umbennen"},"Spalte/Tabelle umbennen"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ALTER TABLE tabellenname RENAME TO tabellenname_neu\n")),(0,l.kt)("p",null,"Dieser Befehl benennt eine Tabelle um."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ALTER TABLE tabellenname RENAME spaltenname TO spaltenname_neu\n")),(0,l.kt)("p",null,"Dieser Befehl benennt eine Spalte in der Tabelle um."),(0,l.kt)("h3",{id:"beispiel-1-1"},"Beispiel 1:"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Tabelle: schueler")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"id"),(0,l.kt)("th",{parentName:"tr",align:null},"vorname"),(0,l.kt)("th",{parentName:"tr",align:null},"nachname"),(0,l.kt)("th",{parentName:"tr",align:null},"geburtsdatum"),(0,l.kt)("th",{parentName:"tr",align:"center"},"klasse_id"),(0,l.kt)("th",{parentName:"tr",align:"center"},"fehltage"),(0,l.kt)("th",{parentName:"tr",align:null},"geburtsort")))),(0,l.kt)("h4",{id:"befehl-2"},"Befehl:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ALTER TABLE schueler RENAME fehltage TO absenzen\n")),(0,l.kt)("p",null,"Dieser Befehl benennt die Spalte fehltage der Tabelle schueler in absenzen um."),(0,l.kt)("h4",{id:"ergebnis-2"},"Ergebnis:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"id"),(0,l.kt)("th",{parentName:"tr",align:null},"vorname"),(0,l.kt)("th",{parentName:"tr",align:null},"nachname"),(0,l.kt)("th",{parentName:"tr",align:null},"geburtsdatum"),(0,l.kt)("th",{parentName:"tr",align:"center"},"klasse_id"),(0,l.kt)("th",{parentName:"tr",align:"center"},"absenzen"),(0,l.kt)("th",{parentName:"tr",align:null},"geburtsort")))),(0,l.kt)("h3",{id:"beispiel-2"},"Beispiel 2:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ALTER TABLE lehrer RENAME TO lehrkraefte\n")),(0,l.kt)("p",null,"Dieser Befehl benennt die Tabelle lehrer in lehrkraefte um."))}m.isMDXComponent=!0},2661:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Delete-5336d5b3629f0be34f096f4ce160f37c.png"},9681:function(e,t,n){"use strict";t.Z=n.p+"assets/images/neueSpalte-1b6b34c78d5e099d2a1c414fa542a37f.png"}}]);