class ScoreSerializer < RubySerializer::Base
  expose :points
  expose :rank
  belongs_to :user
end
