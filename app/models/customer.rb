class Customer < ActiveRecord::Base
  validates :name, :location, :age, presence: true

  default_scope {order('name ASC')}
end
