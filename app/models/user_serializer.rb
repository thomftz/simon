class UserSerializer < RubySerializer::Base
  expose :name
  expose :image
  has_many :scores
end
