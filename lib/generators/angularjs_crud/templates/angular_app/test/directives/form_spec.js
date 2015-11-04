describe('<%= file_name.pluralize %>.directives <%= file_name %>Form', function() {
  var $compile, element, scope;

  $compile = null;
  scope = null;
  element = null;

  beforeEach(module('external-templates'));
  beforeEach(module('<%= file_name.pluralize %>.directives'));

  beforeEach(inject(function(_$compile_, $rootScope) {
    $compile = _$compile_;
    scope = $rootScope.$new();

    element = angular.element('<<%= file_name %>-form></<%= file_name %>-form>');
  }));

  it('instantiates without errors', function() {
    $compile(element)(scope);
    scope.$digest();

    expect(element.isolateScope().test_msg).to.eql('<%= file_name %>FormTest');
  });
});
