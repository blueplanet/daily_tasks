class StaticPagesController < ApplicationController
  def top
    @tasks = Task.all
  end
end
