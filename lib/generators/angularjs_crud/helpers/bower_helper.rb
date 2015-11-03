module BowerHelper
  def bower_init
    copy_bower_json
    copy_bower_rc
    gitignore_bower_components
  end

  def copy_bower_json
    copy_file 'bower.json'
  end

  def copy_bower_rc
    copy_file '_bowerrc', '.bowerrc'
  end

  def gitignore_bower_components
    run "echo '/public/assets/bower_components' >> .gitignore"
  end

  def run_bower_install(*args)
    options = args.join(' ')

    run "bower install #{options}"
  end
end
