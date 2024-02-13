class Api::V1::TasksController < ApplicationController
  protect_from_forgery with: :null_session
  def index
    if params[:status].present? && params[:status] != 'All'
      @tasks = Task.where(status: params[:status])
    else
  	  @tasks = Task.all
    end
  	  render json: @tasks, status: :ok
  end

  def create
    @task = Task.new(task_params)
      if @task.save
        render json: {data: @task, status: 'success' }, status: :ok
      else
        render json: {data: @task.errors.full_messages, status: 'failure' }, status: :unprocessable_entity
      end 
    end

  private

  def task_params
    params.require(:task).permit(:title, :status)
  end

end