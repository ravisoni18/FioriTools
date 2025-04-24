sap.ui.define([
    "sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], (Controller,JSONModel) => {
    "use strict";

    return Controller.extend("customer.ravisoni.sapfioritools.controller.View1", {
        onInit() {

            var data = { 
                "items": [
                    {
                        "title": "Grid item title 1",
                        "subtitle": "Subtitle 1"
                    },
                    {
                        "title": "Grid item title 2",
                        "subtitle": "Subtitle 2"
                    },
                    {
                        "title": "Grid item title 3",
                        "subtitle": "Subtitle 3"
                    },
                    {
                        "title": "Grid item title 4",
                        "subtitle": "Subtitle 4"
                    },
                    {
                        "title": "Grid item title 5",
                        "subtitle": "Subtitle 5"
                    },
                    {
                        "title": "Grid item title 6 Grid item title Grid item title Grid item title Grid item title Grid item title",
                        "subtitle": "Subtitle 6"
                    },
                    {
                        "title": "Very long Grid item title that should wrap 7",
                        "subtitle": "This is a long subtitle 7"
                    },
                    {
                        "title": "Grid item title B 8",
                        "subtitle": "Subtitle 8"
                    },
                    {
                        "title": "Grid item title B 9 Grid item title B  Grid item title B 9 Grid item title B 9Grid item title B 9title B 9 Grid item title B 9Grid item title B",
                        "subtitle": "Subtitle 9"
                    },
                    {
                        "title": "Grid item title B 10",
                        "subtitle": "Subtitle 10"
                    },
                    {
                        "title": "Grid item title B 11",
                        "subtitle": "Subtitle 11"
                    },
                    {
                        "title": "Grid item title B 12",
                        "subtitle": "Subtitle 12"
                    },
                    {
                        "title": "Grid item title 13",
                        "subtitle": "Subtitle 13"
                    },
                    {
                        "title": "Grid item title 14",
                        "subtitle": "Subtitle 14"
                    },
                    {
                        "title": "Grid item title 15",
                        "subtitle": "Subtitle 15"
                    },
                    {
                        "title": "Grid item title 16",
                        "subtitle": "Subtitle 16"
                    },
                    {
                        "title": "Grid item title 17",
                        "subtitle": "Subtitle 17"
                    },
                    {
                        "title": "Grid item title 18",
                        "subtitle": "Subtitle 18"
                    },
                    {
                        "title": "Very long Grid item title that should wrap 19",
                        "subtitle": "This is a long subtitle 19"
                    },
                    {
                        "title": "Grid item title B 20",
                        "subtitle": "Subtitle 20"
                    },
                    {
                        "title": "Grid item title B 21",
                        "subtitle": "Subtitle 21"
                    },
                    {
                        "title": "Grid item title B 22",
                        "subtitle": "Subtitle 22"
                    },
                    {
                        "title": "Grid item title B 23",
                        "subtitle": "Subtitle 23"
                    },
                    {
                        "title": "Grid item title B 24",
                        "subtitle": "Subtitle 24"
                    },
                    {
                        "title": "Grid item title B 21",
                        "subtitle": "Subtitle 21"
                    },
                    {
                        "title": "Grid item title B 22",
                        "subtitle": "Subtitle 22"
                    },
                    {
                        "title": "Grid item title B 23",
                        "subtitle": "Subtitle 23"
                    }
                ]
            };
            var oModel = new JSONModel(data);
			this.getView().setModel(oModel);



         var payload =    {
                "selectedKey": "page2",
                "navigation": [
                    {
                        "title": "Root Item",
                        "icon": "sap-icon://employee",
                        "expanded": true,
                        "key": "root1",
                        "items": [
                            {
                                "title": "Child Item 1",
                                "key": "page1"
                            },
                            {
                                "title": "Child Item 2",
                                "key": "page2"
                            }
                        ]
                    },
                    {
                        "title": "Root Item",
                        "icon": "sap-icon://building",
                        "key": "root2"
                    },
                    {
                        "title": "Root Item",
                        "icon": "sap-icon://card",
                        "expanded": false,
                        "items": [
                            {
                                "title": "Child Item"
                            },
                            {
                                "title": "Child Item"
                            },
                            {
                                "title": "Child Item"
                            },
                            {
                                "title": "Child Item"
                            },
                            {
                                "title": "Child Item"
                            },
                            {
                                "title": "Child Item"
                            },
                            {
                                "title": "Child Item"
                            }
                        ]
                    },
                    {
                        "title": "Root Item",
                        "icon": "sap-icon://action",
                        "expanded": false,
                        "items": [
                            {
                                "title": "Child Item 1"
                            },
                            {
                                "title": "Child Item 2"
                            },
                            {
                                "title": "Child Item 3"
                            }
                        ]
                    }
                ],
                "fixedNavigation": [
                    {
                        "title": "Fixed Item 1",
                        "icon": "sap-icon://employee"
                    },
                    {
                        "title": "Fixed Item 2",
                        "icon": "sap-icon://building"
                    },
                    {
                        "title": "Fixed Item 3",
                        "icon": "sap-icon://card"
                    }
                ]
            };


            // this.oModel = new JSONModel(payload);
			// this.oModel.loadData(sap.ui.require.toUrl("sap/f/sample/ShellBarWithSplitApp/model/model.json"));
			// this.getView().setModel(this.oModel);


            this.getView().setModel(new sap.ui.model.json.JSONModel(payload ), "toolPage");
        }
    });
});