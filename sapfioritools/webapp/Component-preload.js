//@ui5-bundle customer/ravisoni/sapfioritools/Component-preload.js
sap.ui.require.preload({
	"customer/ravisoni/sapfioritools/Component.js":function(){
sap.ui.define(["sap/ui/core/UIComponent","customer/ravisoni/sapfioritools/model/models"],(e,i)=>{"use strict";return e.extend("customer.ravisoni.sapfioritools.Component",{metadata:{manifest:"json",interfaces:["sap.ui.core.IAsyncContentCreation"]},init(){e.prototype.init.apply(this,arguments);this.setModel(i.createDeviceModel(),"device");this.getRouter().initialize()}})});
},
	"customer/ravisoni/sapfioritools/controller/App.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller"],o=>{"use strict";return o.extend("customer.ravisoni.sapfioritools.controller.App",{onInit(){}})});
},
	"customer/ravisoni/sapfioritools/controller/View1.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller"],e=>{"use strict";return e.extend("customer.ravisoni.sapfioritools.controller.View1",{onInit(){}})});
},
	"customer/ravisoni/sapfioritools/i18n/i18n.properties":'# This is the resource bundle for customer.ravisoni.sapfioritools\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=App Title\n\n#YDES: Application description\nappDescription=An SAP Fiori application.\n#XTIT: Main view title\ntitle=App Title',
	"customer/ravisoni/sapfioritools/manifest.json":'{"_version":"1.65.0","sap.app":{"id":"customer.ravisoni.sapfioritools","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:basic","version":"1.17.3","toolsId":"b98a5e3c-b722-493b-9267-76690e4fbed0"}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.134.1","libs":{"sap.m":{},"sap.ui.core":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"customer.ravisoni.sapfioritools.i18n.i18n"}}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","controlAggregation":"pages","controlId":"app","transition":"slide","type":"View","viewType":"XML","path":"customer.ravisoni.sapfioritools.view","async":true,"viewPath":"customer.ravisoni.sapfioritools.view"},"routes":[{"name":"RouteView1","pattern":":?query:","target":["TargetView1"]}],"targets":{"TargetView1":{"id":"View1","name":"View1"}}},"rootView":{"viewName":"customer.ravisoni.sapfioritools.view.App","type":"XML","id":"App","async":true}}}',
	"customer/ravisoni/sapfioritools/model/models.js":function(){
sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"customer/ravisoni/sapfioritools/view/App.view.xml":'<mvc:View controllerName="customer.ravisoni.sapfioritools.controller.App"\n    displayBlock="true"\n    xmlns:mvc="sap.ui.core.mvc"\n    xmlns="sap.m"><App id="app"></App></mvc:View>',
	"customer/ravisoni/sapfioritools/view/View1.view.xml":'<mvc:View controllerName="customer.ravisoni.sapfioritools.controller.View1"\n    xmlns:mvc="sap.ui.core.mvc"\n    xmlns="sap.m"><Page id="page" title="{i18n>title}"></Page></mvc:View>'
});
//# sourceMappingURL=Component-preload.js.map
