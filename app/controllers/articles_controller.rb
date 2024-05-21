class ArticlesController < ApplicationController
  def index; end

  def show; end

  def signed_in
    render json: current_user, status: :ok
  end
end
