// these sources need to be published on the web for this app to work correctly.
var source1 = 'https://docs.google.com/spreadsheets/d/1Ur0IGvFhrhPOIUPJx0LpauCSdEkJeMkVvIB4gj_Bx2I/edit#gid=945409335';
var source2 = 'https://docs.google.com/spreadsheets/d/1aJ0E-qBDO3BABiQlqh4vXSIrqjHKCWEQ2egmsHzOsDM/edit#gid=1217055117';

var viz = new TwoPartyVisual();
viz.loadPearDeckSheets(source1, source2)
