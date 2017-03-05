class Score < ApplicationRecord
validates :user_id, presence: true
validates :points, numericality: { only_integer: true }

belongs_to :user
end
