(this["webpackJsonpdnb-filter"]=this["webpackJsonpdnb-filter"]||[]).push([[0],{60:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n(3),c=n.n(a),r=n(22),i=n.n(r),o=n(1),l=n.n(o),d=n(6),u=n(2),p=n(7),h=n(8),j=n(10),f=n(9),m=n(23),b=n.n(m),v=n(5),O=n.n(v),x="http://dnb.local";function g(){for(var e=window.location.pathname.split("/"),t="de";e.length>0;)if(t=e.pop(),["de","en","fr"].includes(t))return t;return t}function y(e){return w.apply(this,arguments)}function w(){return(w=Object(u.a)(l.a.mark((function e(t){var n,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=g(),e.next=3,O.a.get("".concat(x,"/").concat(n,"/dd_views/objecttypes"),{headers:{"Content-Type":"application/json"}}).catch((function(e){throw e.response}));case 3:return s=e.sent,e.abrupt("return",s.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(){return T.apply(this,arguments)}function T(){return(T=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=g(),e.next=3,O.a.get("".concat(x,"/").concat(t,"/dd_views/subobjecttypes"),{headers:{"Content-Type":"application/json"}}).catch((function(e){throw e.response}));case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e){return N.apply(this,arguments)}function N(){return(N=Object(u.a)(l.a.mark((function e(t){var n,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=g(),e.next=3,O.a.get("".concat(x,"/").concat(n,"/dd_views/licenses"),{headers:{"Content-Type":"application/json"}}).catch((function(e){throw e.response}));case 3:return s=e.sent,e.abrupt("return",s.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e){return C.apply(this,arguments)}function C(){return(C=Object(u.a)(l.a.mark((function e(t){var n,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=g(),e.next=3,O.a.get("".concat(x,"/").concat(n,"/dd_views/theme"),{headers:{"Content-Type":"application/json"}}).catch((function(e){throw e.response}));case 3:return s=e.sent,e.abrupt("return",s.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(){return E.apply(this,arguments)}function E(){return(E=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=g(),e.next=3,O.a.get("".concat(x,"/").concat(t,"/dd_views/institutions"),{headers:{"Content-Type":"application/json"}}).catch((function(e){throw e.response}));case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e){return P.apply(this,arguments)}function P(){return(P=Object(u.a)(l.a.mark((function e(t){var n,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=g(),e.next=3,O.a.get("".concat(x,"/").concat(n,"/dd_views/events"),{headers:{"Content-Type":"application/json"}}).catch((function(e){throw e.response}));case 3:return s=e.sent,e.abrupt("return",s.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(e){return D.apply(this,arguments)}function D(){return(D=Object(u.a)(l.a.mark((function e(t){var n,s,a,c,r,i,o,d,u,p=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=p.length>1&&void 0!==p[1]?p[1]:"",s=p.length>2&&void 0!==p[2]?p[2]:"",a=p.length>3&&void 0!==p[3]?p[3]:"",c=p.length>4&&void 0!==p[4]?p[4]:"",r=p.length>5&&void 0!==p[5]?p[5]:"",i=p.length>6&&void 0!==p[6]?p[6]:"",o=p.length>7&&void 0!==p[7]?p[7]:"",d=g(),e.next=10,O.a.get("".concat(x,"/").concat(d,"/dd_views/datasets?offset=").concat(t,"&objecttypes=").concat(s,"&subobjecttypes=").concat(a,"&events=").concat(n,"&licenses=").concat(c,"&theme=").concat(r,"&institution=").concat(i,"&q=").concat(o),{headers:{"Content-Type":"application/json"}}).catch((function(e){throw e.response}));case 10:return u=e.sent,e.abrupt("return",u.data);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var F=function(e){Object(j.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).selectObjectType=function(e){var t=a.state.selectedObjectTypes,n=a.state.params;if(a.state.selectedObjectTypes.includes(e)){t=t.filter((function(t){return t!==e})),n.delete(e);var s=a.state.selectedSubObjectTypes;a.state.subObjectTypes[e]&&s.length&&(a.state.subObjectTypes[e].map((function(e){return s.includes(e.tid)&&(s=s.filter((function(t){return t!==e.tid}))),n.delete(e.tid),null})),a.setState({selectedSubObjectTypes:s},Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.props.updateSubObjectTypes(s);case 1:case"end":return e.stop()}}),e)})))))}else t.push(e),n.toString().includes(e)||n.append(e,"tid");window.location.hash="?"+n.toString(),a.setState({selectedObjectTypes:t},Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.props.updateObjectTypes(t);case 1:case"end":return e.stop()}}),e)}))))},a.selectSubObjectType=function(e){var t=a.state.selectedSubObjectTypes,n=a.state.params;a.state.selectedSubObjectTypes.includes(e)?(t=t.filter((function(t){return t!==e})),n.delete(e)):(t.push(e),n.toString().includes(e)||n.append(e,"tid")),window.location.hash="?"+n.toString(),a.setState({selectedSubObjectTypes:t},Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.props.updateSubObjectTypes(t);case 1:case"end":return e.stop()}}),e)}))))},a.selectLicense=function(e){var t=a.state.selectedLicenses,n=a.state.params;t.includes(e)?(t=t.filter((function(t){return t!==e})),n.delete(e)):(t.push(e),n.toString().includes(e)||n.append(e,"tid")),window.location.hash="?"+n.toString(),a.setState({params:new URLSearchParams(n),selectedLicenses:t},Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.props.updateLicenses(t);case 1:case"end":return e.stop()}}),e)}))))},a.selectTheme=function(e){var t=a.state.selectedTheme,n=a.state.params;t.includes(e)?(t=t.filter((function(t){return t!==e})),n.delete(e)):(t.push(e),n.toString().includes(e)||n.append(e,"tid")),window.location.hash="?"+n.toString(),a.setState({params:new URLSearchParams(n),selectedTheme:t},Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.props.updateTheme(t);case 1:case"end":return e.stop()}}),e)}))))},a.selectEvent=function(e){var t=a.state.selectedEvents,n=a.state.params;t.includes(e)?(t=t.filter((function(t){return t!==e})),n.delete(e)):(t.push(e),n.toString().includes(e)||n.append(e,"nid")),window.location.hash="?"+n.toString(),a.setState({params:new URLSearchParams(n),selectedEvents:t},Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.props.updateEvents(t);case 1:case"end":return e.stop()}}),e)}))))},a.checkURL=function(){var e=a.state.params,t=[];if(e.toString().length){a.setState({selectedObjectTypes:[],selectedSubObjectTypes:[],selectedEvents:[],selectedTheme:[],selectedLicenses:[],selectedInstitution:"",searchTerm:""},Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.props.updateObjectTypes([]),a.props.updateSubObjectTypes([]),a.props.updateEvents([]),a.props.updateLicenses([]),a.props.updateTheme([]),a.props.doSearch("","");case 6:case"end":return e.stop()}}),e)})))),e.forEach((function(e,n){if("nid"===e)try{a.selectEvent(a.state.events.find((function(e){return e.nid===n})).nid)}catch(s){}else try{a.selectLicense(a.state.licenses.find((function(e){return e.tid===n})).tid)}catch(c){try{a.selectTheme(a.state.theme.find((function(e){return e.tid===n})).tid)}catch(r){try{a.selectObjectType(a.state.objectTypes.find((function(e){return e.tid===n})).tid)}catch(i){"institution"!==n&&"search"!==n&&t.push(n)}}}"search"!==n&&"institution"!==n||("search"===n&&a.setState({searchTerm:e}),"institution"===n&&a.setState({selectedInstitution:e}),a.props.doSearch(a.state.searchTerm,a.state.selectedInstitution))}));try{a.state.selectedObjectTypes.forEach((function(e){a.state.subObjectTypes[e].forEach((function(e){t.forEach((function(t){e.tid===parseInt(t)&&a.selectSubObjectType(e.tid)}))}))}))}catch(n){}}},a.onChange=function(e){a.setState({searchTerm:e.target.value})},a.onChangeInstitution=function(e,t){var n=t.newValue;t.method;a.setState({selectedInstitution:n})},a.getSuggestions=function(e){var t=e.trim().toLowerCase(),n=t.length,s=a.state.institutions;return 0===n?[]:s.filter((function(e){return e.name.toLowerCase().indexOf(t)>-1}))},a.onSuggestionsFetchRequested=function(e){var t=e.value;a.setState({institutionSuggestions:a.getSuggestions(t)})},a.onSuggestionsClearRequested=function(){a.setState({institutionSuggestions:[]})},a.doSearch=function(e){e.preventDefault();var t=a.state.params;t.delete("search"),t.delete("institution"),(a.state.searchTerm||""!==a.state.selectedInstitution)&&(a.props.doSearch(a.state.searchTerm,a.state.selectedInstitution),t.toString().includes("search")||""===a.state.searchTerm||t.append("search",a.state.searchTerm),t.toString().includes("institution")||""===a.state.selectedInstitution||t.append("institution",a.state.selectedInstitution)),window.location.hash="?"+t.toString(),a.setState({params:new URLSearchParams(t)})},a.doReset=function(e){e.preventDefault(),a.setState({params:new URLSearchParams,selectedObjectTypes:[],selectedSubObjectTypes:[],selectedEvents:[],selectedTheme:[],selectedLicenses:[],selectedInstitution:"",searchTerm:""},Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.props.updateObjectTypes([]),a.props.updateSubObjectTypes([]),a.props.updateEvents([]),a.props.updateLicenses([]),a.props.updateTheme([]),a.props.doSearch("","");case 6:case"end":return e.stop()}}),e)})))),window.location.hash=window.location.hash.split("#")[0]},a.renderObjectTypes=function(e,t){var n="bef-link badge";return a.state.selectedObjectTypes.includes(e.tid)&&(n="bef-link bef-link--selected badge",a.state.subObjectTypes[e.tid])?Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("li",{children:[Object(s.jsx)("div",{className:"badge",children:Object(s.jsx)("a",{className:n,onClick:function(){return a.selectObjectType(e.tid)},children:e.title})}),Object(s.jsx)("ul",{style:{display:"block"},children:a.state.subObjectTypes[e.tid].map((function(e){var t=a.state.selectedSubObjectTypes.includes(e.tid)?"bef-link bef-link--selected badge":"bef-link badge";return Object(s.jsx)("li",{children:Object(s.jsx)("div",{className:"badge ",children:Object(s.jsx)("a",{className:t,onClick:function(){return a.selectSubObjectType(e.tid)},children:e.title})})})}))})]},t)}):Object(s.jsx)("li",{children:Object(s.jsx)("div",{className:"badge",children:Object(s.jsx)("a",{className:n,onClick:function(){return a.selectObjectType(e.tid)},children:e.title})})},t)},a.renderLicenses=function(e,t){var n=a.state.selectedLicenses.includes(e.tid)?"bef-link bef-link--selected badge":"bef-link badge";return Object(s.jsx)("li",{children:Object(s.jsx)("div",{className:"badge",children:Object(s.jsx)("a",{className:n,onClick:function(){return a.selectLicense(e.tid)},children:e.title})})},t)},a.renderEvent=function(e,t){var n=a.state.selectedEvents.includes(e.nid)?"bef-link bef-link--selected badge":"bef-link badge";return Object(s.jsx)("li",{children:Object(s.jsx)("div",{className:"badge",children:Object(s.jsx)("a",{className:n,onClick:function(){return a.selectEvent(e.nid)},children:e.title})})},t)},a.renderTheme=function(e,t){var n=a.state.selectedTheme.includes(e.tid)?"bef-link bef-link--selected badge":"bef-link badge";return Object(s.jsx)("li",{children:Object(s.jsx)("div",{className:"badge",children:Object(s.jsx)("a",{className:n,onClick:function(){return a.selectTheme(e.tid)},children:e.title})})},t)},a.state={loading:!0,searchTerm:"",selectedInstitution:"",institutionSuggestions:[],objectTypes:[],subObjectTypes:[],events:[],licenses:[],theme:[],selectedObjectTypes:[],selectedSubObjectTypes:[],selectedEvents:[],selectedTheme:[],selectedLicenses:[],institutions:[],params:new URLSearchParams(window.location.hash.split("#")[1])},a}return Object(h.a)(n,[{key:"renderSuggestion",value:function(e){return Object(s.jsx)("span",{children:e.name})}},{key:"getSuggestionValue",value:function(e){return e.name}},{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t,n,s,a,c,r,i=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:return t=e.sent,e.next=5,S();case 5:return n=e.sent,e.next=8,I();case 8:return s=e.sent,e.next=11,k();case 11:return a=e.sent,e.next=14,_();case 14:return c=e.sent,e.next=17,L();case 17:r=e.sent,this.setState(Object(d.a)(Object(d.a)({},this.state),{},{objectTypes:t,subObjectTypes:n,events:s,licenses:a,theme:c,institutions:r,loading:!1}),Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i.checkURL();case 1:case"end":return e.stop()}}),e)}))));case 19:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return this.state.loading?"....":Object(s.jsx)("div",{className:"view-filters col-lg-3",children:Object(s.jsx)("form",{className:"views-exposed-form bef-exposed-form",children:Object(s.jsxs)("div",{className:"form--inline clearfix row",children:[Object(s.jsx)("div",{className:"col-12",children:Object(s.jsxs)("div",{className:"js-form-item form-item js-form-type-select form-type-select js-form-item-project-type form-item-project-type",children:[Object(s.jsx)("label",{htmlFor:"edit-project-type",children:"Event"}),Object(s.jsx)("div",{"data-drupal-selector":"edit-project-type",multiple:"multiple",name:"project_type",id:"edit-project-type",size:"9",className:"form-select bef-links",children:Object(s.jsx)("ul",{children:this.state.events.map((function(t,n){return e.renderEvent(t,n)}))})})]})}),Object(s.jsx)("div",{className:"col-12",children:Object(s.jsxs)("div",{className:"js-form-item form-item js-form-type-select form-type-select js-form-item-event form-item-event",children:[Object(s.jsx)("label",{htmlFor:"edit-object-types",children:"Objekttyp"}),Object(s.jsx)("div",{multiple:"multiple",name:"event",id:"edit-object-types",size:"8",className:"form-select bef-links bef-nested",children:Object(s.jsx)("ul",{children:this.state.objectTypes.map((function(t,n){return e.renderObjectTypes(t,n)}))})})]})}),Object(s.jsx)("div",{className:"col-12",children:Object(s.jsxs)("div",{className:"js-form-item form-item js-form-type-select form-type-select js-form-item-event form-item-event",children:[Object(s.jsx)("label",{htmlFor:"edit-license",children:"Lizenz Mediendateien"}),Object(s.jsx)("div",{multiple:"multiple",name:"event",id:"edit-license",size:"8",className:"form-select bef-links",children:Object(s.jsx)("ul",{children:this.state.licenses.map((function(t,n){return e.renderLicenses(t,n)}))})})]})}),Object(s.jsx)("div",{className:"col-12",children:Object(s.jsxs)("div",{className:"js-form-item form-item js-form-type-select form-type-select js-form-item-event form-item-event",children:[Object(s.jsx)("label",{htmlFor:"edit-theme",children:"Thema TEST"}),Object(s.jsx)("div",{multiple:"multiple",name:"event",id:"edit-theme",size:"8",className:"form-select bef-links",children:Object(s.jsx)("ul",{children:this.state.theme.map((function(t,n){return e.renderTheme(t,n)}))})})]})}),Object(s.jsx)("div",{className:"col-12",children:Object(s.jsxs)("div",{className:"js-form-item form-item js-form-type-textfield form-type-textfield js-form-item-search form-item-search",children:[Object(s.jsx)("label",{htmlFor:"edit-search",children:"Institution"}),Object(s.jsx)(b.a,{suggestions:this.state.institutionSuggestions,onSuggestionsFetchRequested:this.onSuggestionsFetchRequested,onSuggestionsClearRequested:this.onSuggestionsClearRequested,getSuggestionValue:this.getSuggestionValue,renderSuggestion:this.renderSuggestion,inputProps:{placeholder:"",value:this.state.selectedInstitution,onChange:this.onChangeInstitution}})]})}),Object(s.jsx)("div",{className:"col-12",children:Object(s.jsxs)("div",{className:"js-form-item form-item js-form-type-textfield form-type-textfield js-form-item-search form-item-search",children:[Object(s.jsx)("label",{htmlFor:"edit-search",children:"Volltextsuche"}),Object(s.jsx)("input",{type:"text",id:"edit-search",name:"search",value:this.state.searchTerm,size:"30",maxLength:"128",className:"form-text",onChange:this.onChange})]})}),Object(s.jsx)("div",{className:"col-12",children:Object(s.jsxs)("div",{"data-drupal-selector":"edit-actions",className:"form-actions js-form-wrapper form-wrapper",id:"edit-actions",children:[Object(s.jsx)("input",{type:"submit",value:"Filter anwenden",className:"button js-form-submit form-submit",onClick:this.doSearch}),Object(s.jsx)("input",{type:"submit",value:"Zur\xfccksetzen",className:"button js-form-submit form-submit",onClick:this.doReset})]})})]})})})}}]),n}(c.a.Component);var z=function(e){return e.cards.length?Object(s.jsx)("div",{className:"view-content col-lg-9",children:Object(s.jsx)("div",{className:"card-columns",children:e.cards.map((function(e,t){return Object(s.jsx)("div",{className:"views-row card",children:Object(s.jsxs)("article",{className:"node node--type-data-set node--view-mode-teaser",children:[Object(s.jsx)("div",{className:"card-img card-img-top",children:Object(s.jsx)("a",{href:e.url,children:Object(s.jsx)("div",{className:"field field--name-field-attributed-image field--type-entity-reference-revisions field--label-hidden field__item",children:Object(s.jsxs)("div",{className:"paragraph paragraph--type--attributed-image paragraph--view-mode--teaser",children:[Object(s.jsx)("div",{className:"field field--name-field-inline-image field--type-image field--label-hidden field__item",children:Object(s.jsx)("img",{src:e.image_url,width:"480",height:"256",alt:"",className:"image-style-large"})}),Object(s.jsx)("div",{className:"paragraph--type--attributed-image--attribution"})]})})})}),Object(s.jsxs)("div",{className:"card-body",children:[Object(s.jsx)("h2",{className:"card-title",children:Object(s.jsx)("a",{href:e.url,rel:"bookmark",children:Object(s.jsx)("span",{className:"field field--name-title field--type-string field--label-hidden",children:e.title})})}),Object(s.jsxs)("div",{className:"node__content",children:[Object(s.jsx)("div",{className:"field field__items field--institution-name",children:Object(s.jsx)("div",{className:"field__item",children:e.author_name})}),Object(s.jsx)("div",{className:"field field--name-field-events field--type-entity-reference-revisions field--label-hidden field__items",children:Object(s.jsx)("div",{className:"field__item",children:Object(s.jsx)("div",{className:"paragraph paragraph--type--data-set-event paragraph--view-mode--preview",children:Object(s.jsxs)("div",{className:"field field--name-field-event field--type-entity-reference field--label-visually_hidden",children:[Object(s.jsx)("div",{className:"field__label visually-hidden",children:"Veranstaltung"}),e.event_titles.map((function(e,t){return Object(s.jsx)("div",{className:"field__item",children:Object(s.jsx)("a",{href:e.url,children:e.title})},t)}))]})})})}),Object(s.jsx)("div",{className:"field field--name-field-object-type field--type-entity-reference field--label-hidden field__items",children:e.objecttypes_titles.map((function(e,t){return Object(s.jsx)("div",{className:"badge field__item",children:Object(s.jsx)("span",{children:e})},t)}))})]})]})]})},t)}))})}):Object(s.jsx)("div",{className:"col-lg-9",children:Object(s.jsx)("div",{className:"",children:"Es sind keine den Filtereinstellungen entsprechenden Datensets vorhanden."})})},U=function(e){Object(j.a)(n,e);var t=Object(f.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"pagination",value:function(e,t){var n=this,a=[],c=this.props.current+1,r=Boolean(c>1&&e!==this.props.total),i=Boolean(t>=c&&t!==this.props.total),o=i;r&&a.push(Object(s.jsx)("li",{className:"pager__item pager__item--next",children:Object(s.jsxs)("a",{href:"#",title:"Zur ersten Seite",rel:"next",onClick:function(e){return n.props.onChange(e,0)},children:[Object(s.jsx)("span",{className:"visually-hidden",children:"Erste Seite"}),Object(s.jsx)("span",{"aria-hidden":"true",children:"\xab"})]})})),r&&a.push(Object(s.jsx)("li",{className:"pager__item pager__item--previous",children:Object(s.jsxs)("a",{href:"#",title:"Zur vorherigen Seite",rel:"prev",onClick:function(t){return n.props.onChange(t,e)},children:[Object(s.jsx)("span",{className:"visually-hidden",children:"Vorherige Seite"}),Object(s.jsx)("span",{"aria-hidden":"true",children:"\u2039"})]})}));for(var l=function(e){if(e<3||e>n.props.total-2||e===c){var t=e===c?"pager__item is-active":"pager__item";a.push(Object(s.jsx)("li",{className:t,children:Object(s.jsx)("a",{href:"#",onClick:function(t){return n.props.onChange(t,e-1)},children:e})},e))}else if(n.props.total>4&&e!==c&&3===e){var r=5===n.props.total?"3":"...";a.push(Object(s.jsx)("li",{className:"pager__item disabled",children:Object(s.jsx)("a",{href:"#",children:r})},e))}else n.props.total>4&&e!==c&&e===n.props.total-2&&!(c<3||c>n.props.total-2)&&a.push(Object(s.jsx)("li",{className:"pager__item disabled",children:Object(s.jsx)("a",{href:"#",children:"..."})},e))},d=1;d<this.props.total+1;d++)l(d);return i&&a.push(Object(s.jsx)("li",{className:"pager__item pager__item--next",children:Object(s.jsxs)("a",{href:"#",title:"Zur n\xe4chsten Seite",rel:"next",onClick:function(e){return n.props.onChange(e,t)},children:[Object(s.jsx)("span",{className:"visually-hidden",children:"N\xe4chste Seite"}),Object(s.jsx)("span",{"aria-hidden":"true",children:"\u203a"})]})})),o&&a.push(Object(s.jsx)("li",{className:"pager__item pager__item--next",children:Object(s.jsxs)("a",{href:"#",title:"Zur letzten Seite",rel:"next",onClick:function(e){return n.props.onChange(e,n.props.total-1)},children:[Object(s.jsx)("span",{className:"visually-hidden",children:"Letzte Seite"}),Object(s.jsx)("span",{"aria-hidden":"true",children:"\xbb"})]})})),a}},{key:"render",value:function(){var e=this.props.current-1>=0?this.props.current-1:0,t=this.props.current+1<=this.props.total?this.props.current+1:this.props.total;return Object(s.jsx)("div",{className:"col-lg-9 offset-lg-3",children:Object(s.jsxs)("nav",{className:"pager",role:"navigation","aria-labelledby":"pagination-heading",children:[Object(s.jsx)("h4",{id:"pagination-heading",className:"visually-hidden",children:"Seitennummerierung"}),Object(s.jsx)("ul",{className:"pager__items js-pager__items",children:this.pagination(e,t)})]})})}}]),n}(c.a.Component),q=function(e){Object(j.a)(n,e);var t=Object(f.a)(n);function n(e){var s;return Object(p.a)(this,n),(s=t.call(this,e)).handlePaginationClick=function(){var e=Object(u.a)(l.a.mark((function e(t,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s.setState(Object(d.a)(Object(d.a)({},s.state),{},{currentPage:n}),Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.loadData();case 2:case"end":return e.stop()}}),e)}))));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),s.updateObjectTypes=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s.setState({selectedObjectTypes:t,currentPage:0},Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.loadData();case 2:case"end":return e.stop()}}),e)}))));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s.updateSubObjectTypes=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s.setState({selectedSubObjectTypes:t,currentPage:0},Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.loadData();case 2:case"end":return e.stop()}}),e)}))));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s.updateLicenses=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s.setState({selectedLicenses:t,currentPage:0},Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.loadData();case 2:case"end":return e.stop()}}),e)}))));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s.updateTheme=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s.setState({selectedTheme:t,currentPage:0},Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.loadData();case 2:case"end":return e.stop()}}),e)}))));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s.updateEvents=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s.setState({selectedEvents:t,currentPage:0},Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.loadData();case 2:case"end":return e.stop()}}),e)}))));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s.doSearch=function(){var e=Object(u.a)(l.a.mark((function e(t,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s.setState({searchTerm:t,selectedInstitution:n,currentPage:0},Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.loadData();case 2:case"end":return e.stop()}}),e)}))));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),s.loadData=Object(u.a)(l.a.mark((function e(){var t,n,a,c,r,i,o,p,h;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.state.limit,n=s.state.currentPage*t,a=s.state.selectedObjectTypes.join(","),c=s.state.selectedSubObjectTypes.join(","),r=s.state.selectedEvents.join(","),i=s.state.selectedLicenses.join(","),o=s.state.selectedTheme.join(","),p=s.state.selectedInstitution,e.next=10,R(n,r,a,c,i,o,p,s.state.searchTerm);case 10:h=e.sent,s.setState(Object(d.a)(Object(d.a)({},s.state),{},{cards:h.data,pages:Math.ceil(h.count/t),loading:!1}),Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))));case 12:case"end":return e.stop()}}),e)}))),s.state={loading:!0,searchTerm:"",count:0,pages:0,currentPage:0,limit:24,cards:[],selectedObjectTypes:[],selectedSubObjectTypes:[],selectedLicenses:[],selectedTheme:[],selectedEvents:[],selectedInstitution:""},s}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.loadData();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.loading?"....":Object(s.jsx)("div",{className:"view view-data-sets view-id-data-sets view-display-id-page_1 container",children:Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)(F,{updateObjectTypes:this.updateObjectTypes,updateSubObjectTypes:this.updateSubObjectTypes,updateLicenses:this.updateLicenses,updateTheme:this.updateTheme,updateEvents:this.updateEvents,doSearch:this.doSearch}),Object(s.jsx)(z,{cards:this.state.cards}),Object(s.jsx)(U,{total:this.state.pages,current:this.state.currentPage,onChange:this.handlePaginationClick,limit:this.state.limit})]})})}}]),n}(c.a.Component);var V=function(){return Object(s.jsx)(q,{})};i.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(V,{})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.282a0dcd.chunk.js.map