class CustomersController < ApplicationController
    def index 
        @customers = Customer.all
        render :json => {:data => @customers.as_json, :message => 'Customers Retrieved!'}
    end
end
