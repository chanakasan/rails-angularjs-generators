describe('<%= file_name.pluralize %>.services <%= class_name %>', function() {
  var <%= class_name %>Service, resourceMock;

  <%= class_name %>Service = null;
  resourceMock = function() {
    return function() {};
  };

  beforeEach(module('<%= file_name.pluralize %>.services'));
  beforeEach(function() {
    module(function($provide) {
      $provide.value('$resource', resourceMock);
    });

    inject(function($injector) {
      <%= class_name %>Service = $injector.get('<%= class_name %>');
    });
  });

  it('instantiates without errors', function() {
    expect(<%= class_name %>Service).to.not.eql(null);
  });
});
