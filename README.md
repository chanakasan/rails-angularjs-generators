## [WIP] Angularjs Crud Generator for Rails

Generates a fully working angularjs crud app for a model.

Note: The model should already exist.

**Installation**

Add below line to your `Gemfile` and run `bundle install`.

 ```
 gem 'rails-angularjs_crud_generator'
 ```



**Usage**

1. Initialize the generator.

 ```
 rails generate angularjs_crud:install
 ```

2. Generate your controller

 ```
 rails generate angularjs_crud <your-model-name>
 ```
