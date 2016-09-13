import { moduleForComponent, test } from 'ember-qunit';

 /*jshint unused:false*/

moduleForComponent('my-component', {
  unit: true
});


test('it works', function(assert) {
  let component = this.subject();

  this.render();

  assert.equal(this.$().html(), 'Hello World');
});
