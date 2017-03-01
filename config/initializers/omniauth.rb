Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2, ENV['GOOGLE_DEFAULT_CLIENT_ID'], ENV['GOOGLE_DEFAULT_CLIENT_SECRET'], {
    :scope => 'email,profile'
  }
end

# config/initialisers/omniauth.rb
# OmniAuth.config.full_host = Rails.env.production? ? 'https://domain.com' : 'http://localhost:3000'
