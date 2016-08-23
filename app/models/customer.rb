class Customer < ActiveRecord::Base
  validates :name, :location, :age, presence: true
end
