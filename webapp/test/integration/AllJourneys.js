jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 AddressSet in the list

sap.ui.require([
	"sap/ui/test/Opa5",
	"Agilux/Community/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"Agilux/Community/test/integration/pages/App",
	"Agilux/Community/test/integration/pages/Browser",
	"Agilux/Community/test/integration/pages/Master",
	"Agilux/Community/test/integration/pages/Detail",
	"Agilux/Community/test/integration/pages/Create",
	"Agilux/Community/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "Agilux.Community.view."
	});

	sap.ui.require([
		"Agilux/Community/test/integration/MasterJourney",
		"Agilux/Community/test/integration/NavigationJourney",
		"Agilux/Community/test/integration/NotFoundJourney",
		"Agilux/Community/test/integration/BusyJourney",
		"Agilux/Community/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});