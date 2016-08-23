class FieldsController < ApplicationController

  def index
    @fields = Customer.column_names
    render json: @fields
  end
end
