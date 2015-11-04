/* modules */
angular.module('<%= file_name.pluralize %>.controllers', []);
angular.module('<%= file_name.pluralize %>.services', []);
angular.module('<%= file_name.pluralize %>.directives', []);

/* app */
angular.module('<%= file_name.pluralize %>App', [
    '<%= file_name.pluralize %>.controllers',
    '<%= file_name.pluralize %>.services',
    '<%= file_name.pluralize %>.directives',
    'ngResource',
    'ui.bootstrap',
]);

/* controllers */
angular.module('<%= file_name.pluralize %>.controllers')
  .controller('MainCtrl', function($scope, $log, <%= class_name %>, $modal) {
    $log.debug('<%= file_name.pluralize %>App ready.');

    var ModalInstanceCtrl, deleteModel, newModel, saveModel;

    $scope.list = [];
    $scope.addToList = function(newItem) {
      $scope.list.push(newItem);
    };

    $scope.fetchList = function() {
      <%= class_name %>.getAll().then(function(list) {
        $log.debug('fetched list');
        $log.debug(list);
        $scope.list = list;
      });
    };

    $scope.fetchList();

    newModel = function() {
      $log.debug('new model');

      return new <%= class_name %>();
    };

    saveModel = function(unsavedModelObject) {
      $log.debug('saving model');

      if (unsavedModelObject.id > 0) {
        unsavedModelObject.$update(function(savedObject) {
          $log.debug('saved the edits');
          $scope.fetchList();
        });
      } else {
        unsavedModelObject.$save(function(savedObject) {
          $log.debug('saved new model');
          $scope.fetchList();
        });
      }
    };

    deleteModel = function(modelObjectToDelete) {
      $log.debug('deleting model');

      modelObjectToDelete.$delete(function() {
        $log.debug('deleted model');
        $scope.fetchList();
      });
    };

    ModalInstanceCtrl = function($scope, $modalInstance, modelObject) {
      $scope.<%= file_name %> = modelObject;

      $scope.save = function(modelObject) {
        saveModel(modelObject);
        $modalInstance.dismiss('saved model');
      };

      $scope.delete = function() {
        deleteModel(modelObject);
        $modalInstance.dismiss('deleted model');
      };

      $scope.dismiss = function() {
        $modalInstance.dismiss('dismissed');
      };
    };

    $scope.new = function() {
      $modal.open({
        templateUrl: '<%= file_name.pluralize %>/templates/tmpl_new.html',
        controller: ModalInstanceCtrl,
        resolve: {
          modelObject: function() {
            return newModel();
          }
        }
      });
    };

    $scope.edit = function(modelObject) {
      $modal.open({
        templateUrl: '<%= file_name.pluralize %>/templates/tmpl_edit.html',
        controller: ModalInstanceCtrl,
        resolve: {
          modelObject: function() {
            return angular.copy(modelObject);
          }
        }
      });
    };

    $scope.show = function(modelObject) {
      $modal.open({
        templateUrl: '<%= file_name.pluralize %>/templates/tmpl_show.html',
        controller: ModalInstanceCtrl,
        resolve: {
          modelObject: function() {
            return angular.copy(modelObject);
          }
        }
      });
    };

    $scope.delete = function(modelObject) {
      $modal.open({
        templateUrl: '<%= file_name.pluralize %>/templates/tmpl_delete.html',
        controller: ModalInstanceCtrl,
        resolve: {
          modelObject: function() {
            return modelObject;
          }
        }
      });
    };
  });
/* end controllers */


/* services */
angular.module('<%= file_name.pluralize %>.services')
  .factory('<%= class_name %>', function($resource) {
    var <%= class_name %>, customMethods;

    customMethods = {
      update: {
        method: 'PATCH'
      }
    };

    <%= class_name %> = $resource('/api/<%= file_name.pluralize %>/:id', { id: "@id" }, customMethods);

    <%= class_name %>.getAll = function(repertoire_piece_id) {
      return <%= class_name %>.query({
        repertoire_piece_id: repertoire_piece_id
      }).$promise;
    };

    return <%= class_name %>;
  });
/* end services */


/* directives */
angular.module('<%= file_name.pluralize %>.directives')
  .directive('<%= file_name %>Form', function() {
    return {
      restrict: 'E',
      scope: {
        <%= file_name %>: '='
      },
      templateUrl: '<%= file_name.pluralize %>/templates/tmpl_form.html',
      link: function(scope) {
        return scope.test_msg = '<%= file_name %>FormTest';
      }
    };
  });
/* end directives */
