// these sources need to be published on the web for this app to work correctly.
var source1 = 'https://docs.google.com/spreadsheets/d/1vNL_halMeQFD7PTLnpZ0iv3dTKGLTRw5oAXCvFRyH3c/edit?usp=sharing';
var source2 = 'https://docs.google.com/spreadsheets/d/1aJ0E-qBDO3BABiQlqh4vXSIrqjHKCWEQ2egmsHzOsDM/edit#gid=1217055117';

var viz = new TwoPartyVisual();
viz.loadPearDeckSheets(source1, source2)
