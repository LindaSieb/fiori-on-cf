/*global QUnit*/

sap.ui.define([
	"webdriveriotesting/controller/WebDriverIOTesting.controller"
], function (Controller) {
	"use strict";

	QUnit.module("WebDriverIOTesting Controller");

	QUnit.test("I should test the WebDriverIOTesting controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
