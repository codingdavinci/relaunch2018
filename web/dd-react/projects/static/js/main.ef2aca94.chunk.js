(this["webpackJsonpdnb-filter"]=this["webpackJsonpdnb-filter"]||[]).push([[0],{45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(4),s=a.n(r),c=a(20),i=a.n(c),l=a(1),o=a.n(l),d=a(6),p=a(2),u=a(7),h=a(8),j=a(10),f=a(9),m=a(5),b=a.n(m),v="https://"+window.location.host;function x(){for(var e=window.location.pathname.split("/"),t="de";e.length>0;)if(t=e.pop(),["de","en","fr"].includes(t))return t;return t}function O(e){return g.apply(this,arguments)}function g(){return(g=Object(p.a)(o.a.mark((function e(t){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=x(),e.next=3,b.a.get("".concat(v,"/").concat(a,"/dd_views/projecttypes"),{headers:{"Content-Type":"application/json"}}).catch((function(e){throw e.response}));case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){return w.apply(this,arguments)}function w(){return(w=Object(p.a)(o.a.mark((function e(t){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=x(),e.next=3,b.a.get("".concat(v,"/").concat(a,"/dd_views/events"),{headers:{"Content-Type":"application/json"}}).catch((function(e){throw e.response}));case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e){return k.apply(this,arguments)}function k(){return(k=Object(p.a)(o.a.mark((function e(t){var a,n,r,s,c,i=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=i.length>1&&void 0!==i[1]?i[1]:"",n=i.length>2&&void 0!==i[2]?i[2]:"",r=i.length>3&&void 0!==i[3]?i[3]:"",s=x(),e.next=6,b.a.get("".concat(v,"/").concat(s,"/dd_views/cards?offset=").concat(t,"&projects=").concat(a,"&events=").concat(n,"&q=").concat(r),{headers:{"Content-Type":"application/json"}}).catch((function(e){throw e.response}));case 6:return c=e.sent,e.abrupt("return",c.data);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var _=function(e){Object(j.a)(a,e);var t=Object(f.a)(a);function a(e){var r;return Object(u.a)(this,a),(r=t.call(this,e)).selectProjectType=function(e){var t=r.state.selectedProjectTypes,a=r.state.params;r.state.selectedProjectTypes.includes(e)?(t=t.filter((function(t){return t!==e})),a.delete(e)):(t.push(e),a.toString().includes(e)||a.append(e,"tid")),window.location.hash="?"+a.toString(),r.setState({params:new URLSearchParams(a),selectedProjectTypes:t},Object(p.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.props.updateProjectTypes(t);case 1:case"end":return e.stop()}}),e)}))))},r.selectEvent=function(e){var t=r.state.selectedEvents,a=r.state.params;t.includes(e)?(t=t.filter((function(t){return t!==e})),a.delete(e)):(t.push(e),a.toString().includes(e)||a.append(e,"nid")),window.location.hash="?"+a.toString(),r.setState({params:new URLSearchParams(a),selectedEvents:t},Object(p.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.props.updateEvents(t);case 1:case"end":return e.stop()}}),e)}))))},r.checkURL=function(){var e=r.state.params;e.toString().length&&(r.setState({selectedProjectTypes:[],selectedEvents:[],searchTerm:""},Object(p.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.props.updateProjectTypes([]),r.props.updateEvents([]),r.props.doSearch("");case 3:case"end":return e.stop()}}),e)})))),e.forEach((function(e,t){if("nid"===e)try{r.selectEvent(r.state.events.find((function(e){return e.nid===t})).nid)}catch(a){}else if("tid"===e)try{r.selectProjectType(r.state.projectTypes.find((function(e){return e.tid===t})).tid)}catch(n){}else"search"===t&&r.setState({searchTerm:e}),r.props.doSearch(r.state.searchTerm)})))},r.onChange=function(e){r.setState({searchTerm:e.target.value})},r.doSearch=function(e){e.preventDefault();var t=r.state.params;t.delete("search"),t.delete("institution"),r.state.searchTerm&&(r.props.doSearch(r.state.searchTerm),t.toString().includes("search")||""===r.state.searchTerm||t.append("search",r.state.searchTerm)),window.location.hash="?"+t.toString(),r.setState({params:new URLSearchParams(t)})},r.doReset=function(e){e.preventDefault(),r.setState({params:new URLSearchParams,selectedProjectTypes:[],selectedEvents:[],searchTerm:""},Object(p.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.props.updateProjectTypes([]),r.props.updateEvents([]),r.props.doSearch("");case 3:case"end":return e.stop()}}),e)})))),window.location.hash=window.location.hash.split("#")[0]},r.renderTag=function(e,t){return r.state.selectedProjectTypes.includes(e.tid)?Object(n.jsx)("li",{children:Object(n.jsx)("div",{className:"badge",children:Object(n.jsx)("a",{className:"bef-link bef-link--selected badge",onClick:function(){return r.selectProjectType(e.tid)},children:e.title})})},t):Object(n.jsx)("li",{children:Object(n.jsx)("div",{className:"badge",children:Object(n.jsx)("a",{className:"bef-link badge",onClick:function(){return r.selectProjectType(e.tid)},children:e.title})})},t)},r.renderEvent=function(e,t){return r.state.selectedEvents.includes(e.nid)?Object(n.jsx)("li",{children:Object(n.jsx)("div",{className:"badge",children:Object(n.jsx)("a",{className:"bef-link bef-link--selected badge",onClick:function(){return r.selectEvent(e.nid)},children:e.title})})},t):Object(n.jsx)("li",{children:Object(n.jsx)("div",{className:"badge",children:Object(n.jsx)("a",{className:"bef-link badge",onClick:function(){return r.selectEvent(e.nid)},children:e.title})})},t)},r.state={loading:!0,searchTerm:"",projectTypes:[],events:[],selectedProjectTypes:[],selectedEvents:[],params:new URLSearchParams(window.location.hash.split("#")[1])},r}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=Object(p.a)(o.a.mark((function e(){var t,a,n=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:return t=e.sent,e.next=5,y();case 5:a=e.sent,this.setState(Object(d.a)(Object(d.a)({},this.state),{},{projectTypes:t,events:a,loading:!1}),Object(p.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.checkURL();case 1:case"end":return e.stop()}}),e)}))));case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return this.state.loading?"....":Object(n.jsx)("div",{className:"view-filters col-lg-3",children:Object(n.jsx)("form",{className:"views-exposed-form bef-exposed-form",children:Object(n.jsxs)("div",{className:"form--inline clearfix row",children:[Object(n.jsx)("div",{className:"col-12",children:Object(n.jsxs)("div",{className:"js-form-item form-item js-form-type-select form-type-select js-form-item-project-type form-item-project-type",children:[Object(n.jsx)("label",{htmlFor:"edit-project-type",children:"Typ des Projekts"}),Object(n.jsx)("div",{"data-drupal-selector":"edit-project-type",multiple:"multiple",name:"project_type",id:"edit-project-type",size:"9",className:"form-select bef-links",children:Object(n.jsx)("ul",{children:this.state.projectTypes.map((function(t,a){return e.renderTag(t,a)}))})})]})}),Object(n.jsx)("div",{className:"col-12",children:Object(n.jsxs)("div",{className:"js-form-item form-item js-form-type-select form-type-select js-form-item-event form-item-event",children:[Object(n.jsx)("label",{htmlFor:"edit-event",children:"Event"}),Object(n.jsx)("div",{"data-drupal-selector":"edit-event",multiple:"multiple",name:"event",id:"edit-event",size:"8",className:"form-select bef-links",children:Object(n.jsx)("ul",{children:this.state.events.map((function(t,a){return e.renderEvent(t,a)}))})})]})}),Object(n.jsx)("div",{className:"col-12",children:Object(n.jsxs)("div",{className:"js-form-item form-item js-form-type-textfield form-type-textfield js-form-item-search form-item-search",children:[Object(n.jsx)("label",{htmlFor:"edit-search",children:"Volltextsuche"}),Object(n.jsx)("input",{type:"text",id:"edit-search",name:"search",value:this.state.searchTerm,size:"30",maxLength:"128",className:"form-text",onChange:this.onChange})]})}),Object(n.jsx)("div",{className:"col-12",children:Object(n.jsxs)("div",{"data-drupal-selector":"edit-actions",className:"form-actions js-form-wrapper form-wrapper",id:"edit-actions",children:[Object(n.jsx)("input",{type:"submit",value:"Filter anwenden",className:"button js-form-submit form-submit",onClick:this.doSearch}),Object(n.jsx)("input",{type:"submit",value:"Zur\xfccksetzen",className:"button js-form-submit form-submit",onClick:this.doReset})]})})]})})})}}]),a}(s.a.Component);var S=function(e){return e.cards.length?Object(n.jsx)("div",{className:"view-content col-lg-9",children:e.cards.map((function(e,t){return Object(n.jsx)("div",{className:"views-row",children:Object(n.jsxs)("article",{"data-history-node-id":"1846",className:"node node--type-project node--view-mode-teaser card",children:[Object(n.jsxs)("div",{className:"card-img card-img-top",children:[Object(n.jsx)("div",{className:"field field--awards",children:e.winner_title}),Object(n.jsx)("a",{href:e.url,children:Object(n.jsx)("div",{className:"field field--name-field-attributed-image field--type-entity-reference-revisions field--label-hidden field__item",children:Object(n.jsxs)("div",{className:"paragraph paragraph--type--project-image paragraph--view-mode--teaser",children:[Object(n.jsx)("div",{className:"field field--name-field-inline-image field--type-image field--label-hidden field__item",children:Object(n.jsx)("img",{src:e.image_url,width:"480",height:"360",alt:"",className:"image-style-project-preview-cropped"})}),Object(n.jsx)("div",{className:"paragraph--type--project-image--attribution"})]})})})]}),Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("h2",{className:"card-title",children:Object(n.jsx)("a",{href:e.url,rel:"bookmark",children:Object(n.jsx)("span",{className:"field field--name-title field--type-string field--label-hidden",children:e.title})})}),Object(n.jsxs)("div",{className:"node__content",children:[Object(n.jsx)("div",{className:"field field--name-field-short-description field--type-string field--label-hidden field__item",children:e.description}),Object(n.jsxs)("div",{className:"field field--name-field-tags field--type-entity-reference field--label-visually_hidden",children:[Object(n.jsx)("div",{className:"field__label visually-hidden",children:"Projekttyp"}),Object(n.jsx)("div",{className:"field__items",children:e.project_types.map((function(e,t){return Object(n.jsx)("div",{className:"field__item",children:Object(n.jsx)("span",{children:e})},t)}))})]}),Object(n.jsxs)("div",{className:"field field--name-field-event field--type-entity-reference field--label-visually_hidden",children:[Object(n.jsx)("div",{className:"field__label visually-hidden",children:"Event"}),Object(n.jsx)("div",{className:"field__item",children:Object(n.jsx)("a",{href:e.event_url,children:e.event_title})})]})]})]})]})},t)}))}):Object(n.jsx)("div",{className:"col-lg-9",children:Object(n.jsx)("div",{className:"",children:"Es sind keine den Filtereinstellungen entsprechenden Projekte vorhanden."})})},T=function(e){Object(j.a)(a,e);var t=Object(f.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"pagination",value:function(e,t){var a=this,r=[],s=this.props.current+1,c=Boolean(s>1&&e!==this.props.total),i=Boolean(t>=s&&t!==this.props.total),l=i;c&&r.push(Object(n.jsx)("li",{className:"pager__item pager__item--next",children:Object(n.jsxs)("a",{href:"#",title:"Zur ersten Seite",rel:"next",onClick:function(e){return a.props.onChange(e,0)},children:[Object(n.jsx)("span",{className:"visually-hidden",children:"Erste Seite"}),Object(n.jsx)("span",{"aria-hidden":"true",children:"\xab"})]})})),c&&r.push(Object(n.jsx)("li",{className:"pager__item pager__item--previous",children:Object(n.jsxs)("a",{href:"#",title:"Zur vorherigen Seite",rel:"prev",onClick:function(t){return a.props.onChange(t,e)},children:[Object(n.jsx)("span",{className:"visually-hidden",children:"Vorherige Seite"}),Object(n.jsx)("span",{"aria-hidden":"true",children:"\u2039"})]})}));for(var o=function(e){if(e<3||e>a.props.total-2||e===s){var t=e===s?"pager__item is-active":"pager__item";r.push(Object(n.jsx)("li",{className:t,children:Object(n.jsx)("a",{href:"#",onClick:function(t){return a.props.onChange(t,e-1)},children:e})},e))}else if(a.props.total>4&&e!==s&&3===e){var c=5===a.props.total?"3":"...";r.push(Object(n.jsx)("li",{className:"pager__item disabled",children:Object(n.jsx)("a",{href:"#",children:c})},e))}else a.props.total>4&&e!==s&&e===a.props.total-2&&!(s<3||s>a.props.total-2)&&r.push(Object(n.jsx)("li",{className:"pager__item disabled",children:Object(n.jsx)("a",{href:"#",children:"..."})},e))},d=1;d<this.props.total+1;d++)o(d);return i&&r.push(Object(n.jsx)("li",{className:"pager__item pager__item--next",children:Object(n.jsxs)("a",{href:"#",title:"Zur n\xe4chsten Seite",rel:"next",onClick:function(e){return a.props.onChange(e,t)},children:[Object(n.jsx)("span",{className:"visually-hidden",children:"N\xe4chste Seite"}),Object(n.jsx)("span",{"aria-hidden":"true",children:"\u203a"})]})})),l&&r.push(Object(n.jsx)("li",{className:"pager__item pager__item--next",children:Object(n.jsxs)("a",{href:"#",title:"Zur letzten Seite",rel:"next",onClick:function(e){return a.props.onChange(e,a.props.total-1)},children:[Object(n.jsx)("span",{className:"visually-hidden",children:"Letzte Seite"}),Object(n.jsx)("span",{"aria-hidden":"true",children:"\xbb"})]})})),r}},{key:"render",value:function(){var e=this.props.current-1>=0?this.props.current-1:0,t=this.props.current+1<=this.props.total?this.props.current+1:this.props.total;return Object(n.jsx)("div",{className:"col-lg-9 offset-lg-3",children:Object(n.jsxs)("nav",{className:"pager",role:"navigation","aria-labelledby":"pagination-heading",children:[Object(n.jsx)("h4",{id:"pagination-heading",className:"visually-hidden",children:"Seitennummerierung"}),Object(n.jsx)("ul",{className:"pager__items js-pager__items",children:this.pagination(e,t)})]})})}}]),a}(s.a.Component),P=function(e){Object(j.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handlePaginationClick=function(){var e=Object(p.a)(o.a.mark((function e(t,a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.setState(Object(d.a)(Object(d.a)({},n.state),{},{currentPage:a}),Object(p.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.loadData();case 2:case"end":return e.stop()}}),e)}))));case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),n.updateProjectTypes=function(){var e=Object(p.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.setState({selectedProjectTypes:t,currentPage:0},Object(p.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.loadData();case 2:case"end":return e.stop()}}),e)}))));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.updateEvents=function(){var e=Object(p.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.setState({selectedEvents:t,currentPage:0},Object(p.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.loadData();case 2:case"end":return e.stop()}}),e)}))));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.doSearch=function(){var e=Object(p.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.setState({searchTerm:t,currentPage:0},Object(p.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.loadData();case 2:case"end":return e.stop()}}),e)}))));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.loadData=Object(p.a)(o.a.mark((function e(){var t,a,r,s,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state.limit,a=n.state.currentPage*t,r=n.state.selectedProjectTypes.join(","),s=n.state.selectedEvents.join(","),e.next=6,N(a,r,s,n.state.searchTerm);case 6:c=e.sent,n.setState(Object(d.a)(Object(d.a)({},n.state),{},{cards:c.data,pages:Math.ceil(c.count/t),loading:!1}),Object(p.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))));case 8:case"end":return e.stop()}}),e)}))),n.state={loading:!0,searchTerm:"",count:0,pages:0,currentPage:0,limit:24,cards:[],selectedProjectTypes:[],selectedEvents:[]},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=Object(p.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.loadData();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.loading?"....":Object(n.jsx)("div",{className:"view view-projects view-id-projects view-display-id-page_1 container",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)(_,{updateProjectTypes:this.updateProjectTypes,updateEvents:this.updateEvents,doSearch:this.doSearch}),Object(n.jsx)(S,{cards:this.state.cards}),Object(n.jsx)(T,{total:this.state.pages,current:this.state.currentPage,onChange:this.handlePaginationClick,limit:this.state.limit})]})})}}]),a}(s.a.Component);var C=function(){return Object(n.jsx)(P,{})};i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(C,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.ef2aca94.chunk.js.map