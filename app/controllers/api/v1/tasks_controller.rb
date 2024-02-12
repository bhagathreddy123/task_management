class Api::V1::TasksController < ApplicationController
  def index
    if params[:status].present? && params[:status] != 'All'
      @tasks = Task.where(status: params[:status])
    else
  	  @tasks = Task.all
    end
  	  render json: @tasks, status: :ok
  end
end