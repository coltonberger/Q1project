casper.test.begin('Homepage Tests', 10, function suite(test) {
  casper.start('http://brechy.net', function() {
    test.assertHttpStatus(200, '01 - Homepage must be up and running.');
    test.assertTitleMatch(/^Travel Quiz/, '02 - Homepage title must contain the right keywords.');
    test.assertElementCount('div.questions form', 4, '03 - There are four questions in a form');
    test.assertSelectorHasText('div.container',
    'Travel Quiz', '04 - The navbar contains text Travel Quiz');
    test.assertSelectorHasText('div.container',
    'Copyright 2018', '05 - Footer contains correct text');
    test.assertType('div.question', 'string', '06 - Questions are a string')
    test.assertExists('button.navbar-toggler', '07 - Navbar toggle button exists.');
    test.assertElementCount('img', 16, '08 - 4 images for each question must exist.');
    test.assertExists('div.a2a_kit', '09 - All social media buttons exists.');
    test.assertVisible('div.hvrbox-text', '10 - Hoverbox text visible on mouse-over');
  });
  casper.run(function() {
    test.done();
  });
});
