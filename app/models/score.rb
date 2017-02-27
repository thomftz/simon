class Score < ApplicationRecord
validates :user_id, presence: true
validates :score, numericality: { only_integer: true }

belongs_to :user
end
