class Api::PeriodicsController < ApplicationController

  before_action :restrict_access
  respond_to :json



  def index
    render json: Periodic.all

  end

  def show

    periodic = Periodic.find(params[:id])
    render json: periodic
  end

  def create
    @periodic = Periodic.new({
      :element => params[:element],
      :atomicnumber => params[:atomicnumber],
      :atomicmass => params[:atomicmass],
      :symbol => params[:symbol]
      })

    if @periodic.save
      response = {:status => 200}
    else
      response = {:status => 500}
    end

    render json: @periodic
  end

  def update
    @periodic = Periodic.find(params[:id])
    @periodic.update({
      :element => params[:element],
      :atomicnumber => params[:atomicnumber],
      :atomicmass => params[:atomicmass],
      :symbol => params[:symbol]
      })
      @periodic.save
    render json: @periodic

  end

  def destroy
    @periodic = Periodic.find(params[:id])
    @periodic.destroy
    render json: @periodic

  end

  private
    def restrict_access
    authenticate_or_request_with_http_token do |token, options|
      ApiKey.exists?(access_token: token)
    end
  end
end
