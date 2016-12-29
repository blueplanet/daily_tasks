class TasksController < ApplicationController
  def create
    Task.create! task_params

    @tasks = Task.all.order(:id)
  end

  def update
    task = Task.find params[:id]
    task.update task_params

    @tasks = Task.all.order(:id)
  end

  private

    def task_params
      params.require(:task).permit(:name, :estimate)
    end
end
