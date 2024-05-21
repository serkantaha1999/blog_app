class ArticlesController < ApplicationController
  def index; end

  def show; end

  def signed_in
    return render json: { status: :ok }, status: 200 if current_user.present?

    render json: { 'success' => false }, status: 401
  end
end
