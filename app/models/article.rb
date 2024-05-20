class Article < ApplicationRecord
  mount_uploader :photo, PhotoUploader
  belongs_to :user
  has_many :comments, dependent: :destroy
end
