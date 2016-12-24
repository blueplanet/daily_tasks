class TasksController < ApplicationController
  def create
    Task.create! task_params

    @tasks = Task.all
  end

  private

    def task_params
      params.require(:task).permit(:name, :estimate)
    end
end
