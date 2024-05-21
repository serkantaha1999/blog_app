class ApplicationController < ActionController::Base
  # protect_from_forgery unless: -> { request.format.json? }
  protect_from_forgery with: :null_session
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: %i[email role])
    devise_parameter_sanitizer.permit(:account_update, keys: %i[email role])
  end
end
