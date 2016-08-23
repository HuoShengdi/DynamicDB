class CustomersController < ApplicationController

  def index
    @customers = Customer.all
    if params[:search]
      search_params.each_pair do |key, value|
        @customers = @customers.where("#{key} ~* ?","#{value}")
      end
    end
  end

  def show
    @customer = Customer.find(params[:id])
  end

  def create
    @customer = Customer.new(customer_params)
    if @customer.save
      render :show
    else
      render json: @customer.errors
    end
  end

  def update
    @customer = Customer.find(params[:id])
    update_params = customer_params

    if @customer.update_attributes(update_params)
      render :show
    else
      render json: @customer.errors
    end
  end

  def destroy
    @customer = Customer.find(params[:id])
    @customer.destroy!

    render :show
  end

  private
  def customer_params
    params.require(:customer).permit(:name, :location, :age)
  end

  def search_params
    params.require(:search).permit(:name, :location, :age)
  end
end
