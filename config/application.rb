require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Simon
  class Application < Rails::Application

    config.assets.paths << Rails.root.join('vendor', 'assets', 'bower_components')

    config.assets.precompile << %r(.*.(?:eot|svg|ttf|woff|woff2)$)

    config.generators do |g|
      g.javascript_engine :js
    end

  end
end
