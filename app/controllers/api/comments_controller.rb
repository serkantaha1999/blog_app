class Api::CommentsController < ApplicationController
  def create
    binding.pry
    comment = Comment.new(comment_params)

    if comment.save
      render json: { success: true, comment: }
    else
      render json: { success: false, errors: comment.errors, status: :unprocessable_entity }
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:author, :content, :article_id)
  end
end
