class AngularjsCrudGenerator < Rails::Generators::NamedBase
  source_root File.expand_path('../templates', __FILE__)

  def print_start
    puts 'starting...'
  end

  def create_app_dir
    empty_directory app_dir
  end

  def create_main_js_file
    template "angular_app/main.js", "#{app_dir}/main.js"
  end

  def create_test_files
    template "angular_app/test/services/model_spec.js", "#{app_dir}/test/services/#{file_name}_spec.js"
    template "angular_app/test/directives/form_spec.js", "#{app_dir}/test/directives/#{file_name}_form_spec.js"
    template "angular_app/test/controllers/main_ctrl_spec.js", "#{app_dir}/test/controllers/main_ctrl_spec.js"
  end

  def create_template_files
    template "angular_app/templates/tmpl_form.html", "#{app_dir}/templates/tmpl_form.html"
    template "angular_app/templates/tmpl_new.html", "#{app_dir}/templates/tmpl_new.html"
    template "angular_app/templates/tmpl_edit.html", "#{app_dir}/templates/tmpl_edit.html"
    template "angular_app/templates/tmpl_show.html", "#{app_dir}/templates/tmpl_show.html"
    template "angular_app/templates/tmpl_delete.html", "#{app_dir}/templates/tmpl_delete.html"
  end

  def create_app_partial
    template "_app_partial.html.erb", "app/views/angular_apps/_#{file_name.pluralize}_app.html.erb"
  end

  def print_end
    puts 'done.'
  end

  private
  def app_dir
    "public/assets/js/apps/#{file_name.pluralize}"
  end
end
