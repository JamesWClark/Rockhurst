// these sources need to be published on the web for this app to work correctly.
var source1 = 'https://docs.google.com/spreadsheets/d/1vNL_halMeQFD7PTLnpZ0iv3dTKGLTRw5oAXCvFRyH3c/edit?usp=sharing';
var source2 = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTNeg_brP3cQXeY--l7x_ypf4EvmLKgskDceKhwC-qbvdp2eT2nafj9-_8z8Xb1cjIcoC63YWKrgSyo/pubhtml';

var viz = new TwoPartyVisual();
viz.loadPearDeckSheets(source1, source2)
