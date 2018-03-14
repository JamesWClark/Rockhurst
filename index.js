// these sources need to be published on the web for this app to work correctly.
var source1 = 'https://docs.google.com/spreadsheets/d/1vNL_halMeQFD7PTLnpZ0iv3dTKGLTRw5oAXCvFRyH3c/edit?usp=sharing';
var source2 = 'https://docs.google.com/spreadsheets/d/1pdwvdwZUdiro9JP318D1XjlsehoqtSHR0qzMc5hm0Ug/edit#gid=614798975';

var viz = new TwoPartyVisual();
viz.loadPearDeckSheets(source1, source2)
