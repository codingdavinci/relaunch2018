(this["webpackJsonpdnb-filter"]=this["webpackJsonpdnb-filter"]||[]).push([[0],{60:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n(3),r=n.n(a),c=n(22),i=n.n(c),l=n(1),o=n.n(l),d=n(6),u=n(2),p=n(7),h=n(8),j=n(10),f=n(9),m=n(23),b=n.n(m),v=n(5),O=n.n(v),x="";function g(){for(var e=window.location.pathname.split("/"),t="de";e.length>0;)if(t=e.pop(),["de","en","fr"].includes(t))return t;return t}function y(e){return w.apply(this,arguments)}function w(){return(w=Object(u.a)(o.a.mark((function e(t){var n,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=g(),e.next=3,O.a.get("".concat(x,"/").concat(n,"/dd_views/objecttypes"),{headers:{"Content-Type":"application/json"}}).catch((function(e){throw e.response}));case 3:return s=e.sent,e.abrupt("return",s.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e){return k.apply(this,arguments)}function k(){return(k=Object(u.a)(o.a.mark((function e(t){var n,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=g(),e.next=3,O.a.get("".concat(x,"/").concat(n,"/dd_views/licenses"),{headers:{"Content-Type":"application/json"}}).catch((function(e){throw e.response}));case 3:return s=e.sent,e.abrupt("return",s.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e){return T.apply(this,arguments)}function T(){return(T=Object(u.a)(o.a.mark((function e(t){var n,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=g(),e.next=3,O.a.get("".concat(x,"/").concat(n,"/dd_views/theme"),{headers:{"Content-Type":"application/json"}}).catch((function(e){throw e.response}));case 3:return s=e.sent,e.abrupt("return",s.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(){return C.apply(this,arguments)}function C(){return(C=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=g(),e.next=3,O.a.get("".concat(x,"/").concat(t,"/dd_views/institutions"),{headers:{"Content-Type":"application/json"}}).catch((function(e){throw e.response}));case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e){return E.apply(this,arguments)}function E(){return(E=Object(u.a)(o.a.mark((function e(t){var n,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=g(),e.next=3,O.a.get("".concat(x,"/").concat(n,"/dd_views/events"),{headers:{"Content-Type":"application/json"}}).catch((function(e){throw e.response}));case 3:return s=e.sent,e.abrupt("return",s.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e){return I.apply(this,arguments)}function I(){return(I=Object(u.a)(o.a.mark((function e(t){var n,s,a,r,c,i,l,d,u=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:"",s=u.length>2&&void 0!==u[2]?u[2]:"",a=u.length>3&&void 0!==u[3]?u[3]:"",r=u.length>4&&void 0!==u[4]?u[4]:"",c=u.length>5&&void 0!==u[5]?u[5]:"",i=u.length>6&&void 0!==u[6]?u[6]:"",l=g(),e.next=9,O.a.get("".concat(x,"/").concat(l,"/dd_views/datasets?offset=").concat(t,"&objecttypes=").concat(s,"&events=").concat(n,"&licenses=").concat(a,"&theme=").concat(r,"&institution=").concat(c,"&q=").concat(i),{headers:{"Content-Type":"application/json"}}).catch((function(e){throw e.response}));case 9:return d=e.sent,e.abrupt("return",d.data);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var F=function(e){Object(j.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).selectObjectType=function(e){var t=a.state.selectedObjectTypes;a.state.selectedObjectTypes.includes(e)?t=t.filter((function(t){return t!==e})):t.push(e),a.setState({selectedObjectTypes:t},Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.props.updateObjectTypes(t);case 1:case"end":return e.stop()}}),e)}))))},a.selectLicense=function(e){var t=a.state.selectedLicenses;a.state.selectedLicenses.includes(e)?t=t.filter((function(t){return t!==e})):t.push(e),a.setState({selectedLicenses:t},Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.props.updateLicenses(t);case 1:case"end":return e.stop()}}),e)}))))},a.selectTheme=function(e){var t=a.state.selectedTheme;a.state.selectedTheme.includes(e)?t=t.filter((function(t){return t!==e})):t.push(e),a.setState({selectedTheme:t},Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.props.updateTheme(t);case 1:case"end":return e.stop()}}),e)}))))},a.selectEvent=function(e){var t=a.state.selectedEvents;a.state.selectedEvents.includes(e)?t=t.filter((function(t){return t!==e})):t.push(e),a.setState({selectedEvents:t},Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.props.updateEvents(t);case 1:case"end":return e.stop()}}),e)}))))},a.onChange=function(e){a.setState({searchTerm:e.target.value})},a.onChangeInstitution=function(e,t){var n=t.newValue;t.method;a.setState({selectedInstitution:n})},a.getSuggestions=function(e){var t=e.trim().toLowerCase(),n=t.length,s=a.state.institutions;return 0===n?[]:s.filter((function(e){return e.name.toLowerCase().indexOf(t)>-1}))},a.onSuggestionsFetchRequested=function(e){var t=e.value;a.setState({institutionSuggestions:a.getSuggestions(t)})},a.onSuggestionsClearRequested=function(){a.setState({institutionSuggestions:[]})},a.doSearch=function(e){e.preventDefault(),(a.state.searchTerm||""!==a.state.selectedInstitution)&&a.props.doSearch(a.state.searchTerm,a.state.selectedInstitution)},a.doReset=function(e){e.preventDefault(),a.setState({selectedObjectTypes:[],selectedEvents:[],selectedTheme:[],selectedLicenses:[],selectedInstitution:"",searchTerm:""},Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.props.updateObjectTypes([]),a.props.updateEvents([]),a.props.updateLicenses([]),a.props.updateTheme([]),a.props.doSearch("","");case 5:case"end":return e.stop()}}),e)}))))},a.renderObjectTypes=function(e,t){return a.state.selectedObjectTypes.includes(e.tid)?Object(s.jsx)("li",{children:Object(s.jsx)("div",{className:"badge",children:Object(s.jsx)("a",{href:"#",className:"bef-link bef-link--selected badge",onClick:function(){return a.selectObjectType(e.tid)},children:e.title})})},t):Object(s.jsx)("li",{children:Object(s.jsx)("div",{className:"badge",children:Object(s.jsx)("a",{href:"#",className:"bef-link badge",onClick:function(){return a.selectObjectType(e.tid)},children:e.title})})},t)},a.renderLicenses=function(e,t){return a.state.selectedLicenses.includes(e.tid)?Object(s.jsx)("li",{children:Object(s.jsx)("div",{className:"badge",children:Object(s.jsx)("a",{href:"#",className:"bef-link bef-link--selected badge",onClick:function(){return a.selectLicense(e.tid)},children:e.title})})},t):Object(s.jsx)("li",{children:Object(s.jsx)("div",{className:"badge",children:Object(s.jsx)("a",{href:"#",className:"bef-link badge",onClick:function(){return a.selectLicense(e.tid)},children:e.title})})},t)},a.renderEvent=function(e,t){return a.state.selectedEvents.includes(e.nid)?Object(s.jsx)("li",{children:Object(s.jsx)("div",{className:"badge",children:Object(s.jsx)("a",{href:"#",className:"bef-link bef-link--selected badge",onClick:function(){return a.selectEvent(e.nid)},children:e.title})})},t):Object(s.jsx)("li",{children:Object(s.jsx)("div",{className:"badge",children:Object(s.jsx)("a",{href:"#",className:"bef-link badge",onClick:function(){return a.selectEvent(e.nid)},children:e.title})})},t)},a.renderTheme=function(e,t){return a.state.selectedTheme.includes(e.tid)?Object(s.jsx)("li",{children:Object(s.jsx)("div",{className:"badge",children:Object(s.jsx)("a",{href:"#",className:"bef-link bef-link--selected badge",onClick:function(){return a.selectTheme(e.tid)},children:e.title})})},t):Object(s.jsx)("li",{children:Object(s.jsx)("div",{className:"badge",children:Object(s.jsx)("a",{href:"#",className:"bef-link badge",onClick:function(){return a.selectTheme(e.tid)},children:e.title})})},t)},a.state={loading:!0,searchTerm:"",selectedInstitution:"",institutionSuggestions:[],objectTypes:[],events:[],licenses:[],theme:[],selectedObjectTypes:[],selectedEvents:[],selectedTheme:[],selectedLicenses:[],institutions:[]},a}return Object(h.a)(n,[{key:"renderSuggestion",value:function(e){return Object(s.jsx)("span",{children:e.name})}},{key:"getSuggestionValue",value:function(e){return e.name}},{key:"componentDidMount",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t,n,s,a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:return t=e.sent,e.next=5,L();case 5:return n=e.sent,e.next=8,N();case 8:return s=e.sent,e.next=11,_();case 11:return a=e.sent,e.next=14,S();case 14:r=e.sent,this.setState(Object(d.a)(Object(d.a)({},this.state),{},{objectTypes:t,events:n,licenses:s,theme:a,institutions:r,loading:!1}),Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))));case 16:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return this.state.loading?"....":Object(s.jsx)("div",{className:"view-filters col-lg-3",children:Object(s.jsx)("form",{className:"views-exposed-form bef-exposed-form",children:Object(s.jsxs)("div",{className:"form--inline clearfix row",children:[Object(s.jsx)("div",{className:"col-12",children:Object(s.jsxs)("div",{className:"js-form-item form-item js-form-type-select form-type-select js-form-item-project-type form-item-project-type",children:[Object(s.jsx)("label",{htmlFor:"edit-project-type",children:"Event"}),Object(s.jsx)("div",{"data-drupal-selector":"edit-project-type",multiple:"multiple",name:"project_type",id:"edit-project-type",size:"9",className:"form-select bef-links",children:Object(s.jsx)("ul",{children:this.state.events.map((function(t,n){return e.renderEvent(t,n)}))})})]})}),Object(s.jsx)("div",{className:"col-12",children:Object(s.jsxs)("div",{className:"js-form-item form-item js-form-type-select form-type-select js-form-item-event form-item-event",children:[Object(s.jsx)("label",{htmlFor:"edit-event",children:"Objekttyp"}),Object(s.jsx)("div",{multiple:"multiple",name:"event",id:"edit-event",size:"8",className:"form-select bef-links",children:Object(s.jsx)("ul",{children:this.state.objectTypes.map((function(t,n){return e.renderObjectTypes(t,n)}))})})]})}),Object(s.jsx)("div",{className:"col-12",children:Object(s.jsxs)("div",{className:"js-form-item form-item js-form-type-select form-type-select js-form-item-event form-item-event",children:[Object(s.jsx)("label",{htmlFor:"edit-event",children:"Lizenz Mediendateien"}),Object(s.jsx)("div",{multiple:"multiple",name:"event",id:"edit-event",size:"8",className:"form-select bef-links",children:Object(s.jsx)("ul",{children:this.state.licenses.map((function(t,n){return e.renderLicenses(t,n)}))})})]})}),Object(s.jsx)("div",{className:"col-12",children:Object(s.jsxs)("div",{className:"js-form-item form-item js-form-type-select form-type-select js-form-item-event form-item-event",children:[Object(s.jsx)("label",{htmlFor:"edit-event",children:"Thema"}),Object(s.jsx)("div",{multiple:"multiple",name:"event",id:"edit-event",size:"8",className:"form-select bef-links",children:Object(s.jsx)("ul",{children:this.state.theme.map((function(t,n){return e.renderTheme(t,n)}))})})]})}),Object(s.jsx)("div",{className:"col-12",children:Object(s.jsxs)("div",{className:"js-form-item form-item js-form-type-textfield form-type-textfield js-form-item-search form-item-search",children:[Object(s.jsx)("label",{htmlFor:"edit-search",children:"Institution"}),Object(s.jsx)(b.a,{suggestions:this.state.institutionSuggestions,onSuggestionsFetchRequested:this.onSuggestionsFetchRequested,onSuggestionsClearRequested:this.onSuggestionsClearRequested,getSuggestionValue:this.getSuggestionValue,renderSuggestion:this.renderSuggestion,inputProps:{placeholder:"",value:this.state.selectedInstitution,onChange:this.onChangeInstitution}})]})}),Object(s.jsx)("div",{className:"col-12",children:Object(s.jsxs)("div",{className:"js-form-item form-item js-form-type-textfield form-type-textfield js-form-item-search form-item-search",children:[Object(s.jsx)("label",{htmlFor:"edit-search",children:"Volltextsuche"}),Object(s.jsx)("input",{type:"text",id:"edit-search",name:"search",value:this.state.searchTerm,size:"30",maxLength:"128",className:"form-text",onChange:this.onChange})]})}),Object(s.jsx)("div",{className:"col-12",children:Object(s.jsxs)("div",{"data-drupal-selector":"edit-actions",className:"form-actions js-form-wrapper form-wrapper",id:"edit-actions",children:[Object(s.jsx)("input",{type:"submit",value:"Filter anwenden",className:"button js-form-submit form-submit",onClick:this.doSearch}),Object(s.jsx)("input",{type:"submit",value:"Zur\xfccksetzen",className:"button js-form-submit form-submit",onClick:this.doReset})]})})]})})})}}]),n}(r.a.Component);var z=function(e){return e.cards.length?Object(s.jsx)("div",{className:"view-content col-lg-9",children:Object(s.jsx)("div",{className:"card-columns",children:e.cards.map((function(e,t){return Object(s.jsx)("div",{className:"views-row card",children:Object(s.jsxs)("article",{className:"node node--type-data-set node--view-mode-teaser",children:[Object(s.jsx)("div",{className:"card-img card-img-top",children:Object(s.jsx)("a",{href:e.url,children:Object(s.jsx)("div",{className:"field field--name-field-attributed-image field--type-entity-reference-revisions field--label-hidden field__item",children:Object(s.jsxs)("div",{className:"paragraph paragraph--type--attributed-image paragraph--view-mode--teaser",children:[Object(s.jsx)("div",{className:"field field--name-field-inline-image field--type-image field--label-hidden field__item",children:Object(s.jsx)("img",{src:e.image_url,width:"480",height:"256",alt:"",className:"image-style-large"})}),Object(s.jsx)("div",{className:"paragraph--type--attributed-image--attribution"})]})})})}),Object(s.jsxs)("div",{className:"card-body",children:[Object(s.jsx)("h2",{className:"card-title",children:Object(s.jsx)("a",{href:e.url,rel:"bookmark",children:Object(s.jsx)("span",{className:"field field--name-title field--type-string field--label-hidden",children:e.title})})}),Object(s.jsxs)("div",{className:"node__content",children:[Object(s.jsx)("div",{className:"field field__items field--institution-name",children:Object(s.jsx)("div",{className:"field__item",children:e.author_name})}),Object(s.jsx)("div",{className:"field field--name-field-events field--type-entity-reference-revisions field--label-hidden field__items",children:Object(s.jsx)("div",{className:"field__item",children:Object(s.jsx)("div",{className:"paragraph paragraph--type--data-set-event paragraph--view-mode--preview",children:Object(s.jsxs)("div",{className:"field field--name-field-event field--type-entity-reference field--label-visually_hidden",children:[Object(s.jsx)("div",{className:"field__label visually-hidden",children:"Veranstaltung"}),e.event_titles.map((function(e,t){return Object(s.jsx)("div",{className:"field__item",children:Object(s.jsx)("a",{href:e.url,children:e.title})},t)}))]})})})}),Object(s.jsx)("div",{className:"field field--name-field-object-type field--type-entity-reference field--label-hidden field__items",children:e.objecttypes_titles.map((function(e,t){return Object(s.jsx)("div",{className:"badge field__item",children:Object(s.jsx)("span",{children:e})},t)}))})]})]})]})},t)}))})}):Object(s.jsx)("div",{className:"col-lg-9",children:Object(s.jsx)("div",{className:"",children:"Es sind keine den Filtereinstellungen entsprechenden Datensets vorhanden."})})},R=function(e){Object(j.a)(n,e);var t=Object(f.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"pagination",value:function(e,t){var n=this,a=[],r=this.props.current+1,c=Boolean(r>1&&e!==this.props.total),i=Boolean(t>=r&&t!==this.props.total),l=i;c&&a.push(Object(s.jsx)("li",{className:"pager__item pager__item--next",children:Object(s.jsxs)("a",{href:"#",title:"Zur ersten Seite",rel:"next",onClick:function(e){return n.props.onChange(e,0)},children:[Object(s.jsx)("span",{className:"visually-hidden",children:"Erste Seite"}),Object(s.jsx)("span",{"aria-hidden":"true",children:"\xab"})]})})),c&&a.push(Object(s.jsx)("li",{className:"pager__item pager__item--previous",children:Object(s.jsxs)("a",{href:"#",title:"Zur vorherigen Seite",rel:"prev",onClick:function(t){return n.props.onChange(t,e)},children:[Object(s.jsx)("span",{className:"visually-hidden",children:"Vorherige Seite"}),Object(s.jsx)("span",{"aria-hidden":"true",children:"\u2039"})]})}));for(var o=function(e){if(e<3||e>n.props.total-2||e===r){var t=e===r?"pager__item is-active":"pager__item";a.push(Object(s.jsx)("li",{className:t,children:Object(s.jsx)("a",{href:"#",onClick:function(t){return n.props.onChange(t,e-1)},children:e})},e))}else if(n.props.total>4&&e!==r&&3===e){var c=5===n.props.total?"3":"...";a.push(Object(s.jsx)("li",{className:"pager__item disabled",children:Object(s.jsx)("a",{href:"#",children:c})},e))}else n.props.total>4&&e!==r&&e===n.props.total-2&&!(r<3||r>n.props.total-2)&&a.push(Object(s.jsx)("li",{className:"pager__item disabled",children:Object(s.jsx)("a",{href:"#",children:"..."})},e))},d=1;d<this.props.total+1;d++)o(d);return i&&a.push(Object(s.jsx)("li",{className:"pager__item pager__item--next",children:Object(s.jsxs)("a",{href:"#",title:"Zur n\xe4chsten Seite",rel:"next",onClick:function(e){return n.props.onChange(e,t)},children:[Object(s.jsx)("span",{className:"visually-hidden",children:"N\xe4chste Seite"}),Object(s.jsx)("span",{"aria-hidden":"true",children:"\u203a"})]})})),l&&a.push(Object(s.jsx)("li",{className:"pager__item pager__item--next",children:Object(s.jsxs)("a",{href:"#",title:"Zur letzten Seite",rel:"next",onClick:function(e){return n.props.onChange(e,n.props.total-1)},children:[Object(s.jsx)("span",{className:"visually-hidden",children:"Letzte Seite"}),Object(s.jsx)("span",{"aria-hidden":"true",children:"\xbb"})]})})),a}},{key:"render",value:function(){var e=this.props.current-1>=0?this.props.current-1:0,t=this.props.current+1<=this.props.total?this.props.current+1:this.props.total;return Object(s.jsx)("div",{className:"col-lg-9 offset-lg-3",children:Object(s.jsxs)("nav",{className:"pager",role:"navigation","aria-labelledby":"pagination-heading",children:[Object(s.jsx)("h4",{id:"pagination-heading",className:"visually-hidden",children:"Seitennummerierung"}),Object(s.jsx)("ul",{className:"pager__items js-pager__items",children:this.pagination(e,t)})]})})}}]),n}(r.a.Component),q=function(e){Object(j.a)(n,e);var t=Object(f.a)(n);function n(e){var s;return Object(p.a)(this,n),(s=t.call(this,e)).handlePaginationClick=function(){var e=Object(u.a)(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s.setState(Object(d.a)(Object(d.a)({},s.state),{},{currentPage:n}),Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.loadData();case 2:case"end":return e.stop()}}),e)}))));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),s.updateObjectTypes=function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s.setState({selectedObjectTypes:t},Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.loadData();case 2:case"end":return e.stop()}}),e)}))));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s.updateLicenses=function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s.setState({selectedLicenses:t},Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.loadData();case 2:case"end":return e.stop()}}),e)}))));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s.updateTheme=function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s.setState({selectedTheme:t},Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.loadData();case 2:case"end":return e.stop()}}),e)}))));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s.updateEvents=function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s.setState({selectedEvents:t},Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.loadData();case 2:case"end":return e.stop()}}),e)}))));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s.doSearch=function(){var e=Object(u.a)(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s.setState({searchTerm:t,selectedInstitution:n},Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.loadData();case 2:case"end":return e.stop()}}),e)}))));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),s.loadData=Object(u.a)(o.a.mark((function e(){var t,n,a,r,c,i,l,p;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.state.limit,n=s.state.currentPage*t,a=s.state.selectedObjectTypes.join(","),r=s.state.selectedEvents.join(","),c=s.state.selectedLicenses.join(","),i=s.state.selectedTheme.join(","),l=s.state.selectedInstitution,e.next=9,D(n,r,a,c,i,l,s.state.searchTerm);case 9:p=e.sent,s.setState(Object(d.a)(Object(d.a)({},s.state),{},{cards:p.data,pages:Math.ceil(p.count/t),loading:!1}),Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))));case 11:case"end":return e.stop()}}),e)}))),s.state={loading:!0,searchTerm:"",count:0,pages:0,currentPage:0,limit:24,cards:[],selectedObjectTypes:[],selectedLicenses:[],selectedTheme:[],selectedEvents:[],selectedInstitution:""},s}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.loadData();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.loading?"....":Object(s.jsx)("div",{className:"view view-data-sets view-id-data-sets view-display-id-page_1 container",children:Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)(F,{updateObjectTypes:this.updateObjectTypes,updateLicenses:this.updateLicenses,updateTheme:this.updateTheme,updateEvents:this.updateEvents,doSearch:this.doSearch}),Object(s.jsx)(z,{cards:this.state.cards}),Object(s.jsx)(R,{total:this.state.pages,current:this.state.currentPage,onChange:this.handlePaginationClick,limit:this.state.limit})]})})}}]),n}(r.a.Component);var P=function(){return Object(s.jsx)(q,{})};i.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(P,{})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.6fef1859.chunk.js.map