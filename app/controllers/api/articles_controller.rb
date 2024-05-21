class Api::ArticlesController < ApplicationController
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
    article = Article.find(params[:id])

    render json: { article:, comments: article.comments }
  end
end
