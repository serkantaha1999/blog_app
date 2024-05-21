# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController
  include RackSessionsFix
  respond_to :json
  skip_before_action :verify_authenticity_token

  # before_action :configure_sign_in_params, only: [:create]

  # GET /resource/sign_in
  def new
    self.resource = resource_class.new(sign_in_params)
    clean_up_passwords(resource)
    yield resource if block_given?
    respond_with(resource, serialize_options(resource))
  end

  # POST /resource/sign_in
  def create
    self.resource = warden.authenticate!(auth_options)
    set_flash_message!(:notice, :signed_in)
    sign_in(resource_name, resource)
    yield resource if block_given?

    token = generate_jwt(resource)
    session[:user_id] = current_user.id
    render json: {
      status: {
        code: 200, message: 'Logged in successfully.',
        data: { user: UserSerializer.new(current_user).serializable_hash[:data][:attributes], token: }
      }
    }, status: :ok
  end

  def destroy
    session.delete :user_id
    head :no_content

    if current_user
      render json: {
        status: 200,
        message: 'Logged out successfully.'
      }, status: :ok
    else
      render json: {
        status: 401,
        message: "Couldn't find an active session."
      }, status: :unauthorized
    end
  end

  protected

  def sign_in_params
    params.require(:user).permit(:email, :password)
  end

  def generate_jwt(user)
    JWT.encode({ user_id: user.id, exp: 24.hours.from_now.to_i }, Rails.application.secrets.secret_key_base)
  end

  # DELETE /resource/sign_out


  # protected

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_in_params
  #   devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
  # end
end
