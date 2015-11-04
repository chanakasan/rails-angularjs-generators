describe('<%= file_name.pluralize %>.controllers MainCtrl', function() {
  var $logMock, MainCtrl, <%= class_name %>Mock, scope;

  scope = null;
  MainCtrl = null;
  $logMock = {
    debug: function() {}
  };
  <%= class_name %>Mock = {
    getAll: function() {
      return {
        then: function() {}
      };
    }
  };

  beforeEach(module('<%= file_name.pluralize %>.controllers'));
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      $log: $logMock,
      <%= class_name %>: <%= class_name %>Mock,
      $modal: {}
    });
  }));

  it('instantiates without errors', function() {
    expect(MainCtrl).to.not.eql(null);
  });
});
