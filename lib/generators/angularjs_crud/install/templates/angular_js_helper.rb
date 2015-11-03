module AngularJsHelper

  def angular_inline_template(relative_file_path, template_id=nil)
    root_dir = "../../public/assets/js/apps"

    external_template_path = "#{root_dir}/#{relative_file_path}"
    external_template = render template: external_template_path
    template_id = relative_file_path if template_id == nil

    inline_template = <<-HTML
      <script type="text/ng-template" id="#{template_id}">
        #{external_template}
      </script>
    HTML

    inline_template.html_safe
  end
end

