casper.test.begin('Second Page Tests', 10, function suite(test) {
  casper.start('http://brechy.net/index1', function() {
    test.assertHttpStatus(200, '01 - Second page is up and running.');
    test.assertTitleMatch(/^Explore/, '02 - Second page title must contains the keyword.');
    test.assertElementCount('div.questions form', 1, '03 - There are four cities in a form to explore.');
    test.assertSelectorHasText('div.container',
    'Travel Quiz', '04 - The navbar contains text Travel Quiz');
    test.assertSelectorHasText('div.container',
    'Copyright 2018', '05 - Footer contains correct text');
    test.assertType('div.question', 'string', '06 - text is formated as a string')
    test.assertExists('button.navbar-toggler', '07 - Navbar toggle button exists.');
    test.assertElementCount('img', 4, '08 - 4 images exist to click on.');
    test.assertExists('div.a2a_kit', '09 - All social media buttons exists.');
    test.assertVisible('div.hvrbox-text', '10 - Hoverbox text visible on mouse-over');
  });
  casper.run(function() {
    test.done();
  });
});
