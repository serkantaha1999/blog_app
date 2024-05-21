class Article < ApplicationRecord
  mount_uploader :image, PhotoUploader
  belongs_to :user
  has_many :comments, dependent: :destroy
end
