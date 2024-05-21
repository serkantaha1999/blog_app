class ArticlesController < ApplicationController
  def index; end

  def show; end

  def signed_in
    if current_user.nil?
      render json: { status: :unauthorized }, status: 401
    else
      render json: { status: :ok }, status: 200
    end
  end
end
