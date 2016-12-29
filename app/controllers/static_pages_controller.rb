class StaticPagesController < ApplicationController
  def top
    @tasks = Task.all
    @tasks = Task.all.order(:id)
  end
end
