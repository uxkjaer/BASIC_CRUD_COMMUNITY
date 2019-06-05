jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"Agilux/Community/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"Agilux/Community/test/integration/pages/App",
	"Agilux/Community/test/integration/pages/Browser",
	"Agilux/Community/test/integration/pages/Master",
	"Agilux/Community/test/integration/pages/Detail",
	"Agilux/Community/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "Agilux.Community.view."
	});

	sap.ui.require([
		"Agilux/Community/test/integration/NavigationJourneyPhone",
		"Agilux/Community/test/integration/NotFoundJourneyPhone",
		"Agilux/Community/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});