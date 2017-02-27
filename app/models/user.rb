class User < ApplicationRecord
  validates :name, :email, :password, presence: true
  has_many :scores
end
