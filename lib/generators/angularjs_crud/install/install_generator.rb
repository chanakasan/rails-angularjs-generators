require_relative "../helpers/bower_helper"
require_relative "../helpers/npm_helper"

module AngularjsCrud
  module Generators
    class InstallGenerator < ::Rails::Generators::Base
      include BowerHelper
      include NpmHelper

      source_root ::File.expand_path('../templates', __FILE__)

      desc 'Installs the required packages and files for AngularjsCrudGenerator'

      def init_npm_files
        npm_init
      end

      def install_npm_packages
        run_npm_install
      end

      def init_bower_config_file
        bower_init
      end

      def install_bower_packages
        run_bower_install '--save', 'jquery',
          'bootstrap',
          'font-awesome',
          'angular',
          'angular-resource',
          'angular-bootstrap'

        run_bower_install '--save-dev', 'angular-mocks'
      end

      def copy_angular_js_view_helper
        copy_file "angular_js_helper.rb", "app/helpers/angular_js_helper.rb"
      end
    end
  end
end
