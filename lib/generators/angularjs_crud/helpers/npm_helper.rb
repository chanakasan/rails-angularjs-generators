module NpmHelper
  def npm_init
    copy_package_json
    copy_karma_conf
    gitignore_node_modules
  end

  def copy_package_json
    copy_file "package.json"
  end

  def copy_karma_conf
    copy_file "karma.conf.js"
  end

  def gitignore_node_modules
    run "echo '/node_modules' >> .gitignore"
  end

  def run_npm_install(*args)
    options = args.join(' ')

    run "npm install #{options}"
  end
end
