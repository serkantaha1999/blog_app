class Api::ArticlesController < ApplicationController
  before_action :set_article, only: %i[show update destroy]
  def index
    limit = params[:limit].to_i
    page = params[:page].to_i - 1
    articles = Article.all

    if limit && page
      selected_articles = articles.offset(page * limit).limit(limit)
      render json: { articles: selected_articles, limit: articles.count }
    else
      render json: { articles:, limit: articles.count }
    end
  end

  def show
    render json: { article:, comments: @article.comments }
  end

  def create
    article = Article.new(article_params)

    if article.save
      render json: { success: true, article: }, status: :ok
    else
      render json: { success: false, errors: article.errors, status: :unprocessable_entity }
    end
  end

  def update
    if @article.update(article_params)
      render json: { success: true, article: @article }, status: :ok
    else
      render json: { success: false, errors: @article.errors, status: :unprocessable_entity }
    end
  end

  def destroy
    if @article.destroy
      render json: { success: true }, status: :ok
    else
      render json: { success: false, errors: @article.errors, status: :unprocessable_entity }
    end
  end

  private

  def set_article
    @article = Article.find(params[:id])
  end

  def article_params
    params.require(:article).permit(:title, :content, :image, :user_id)
  end
end
