class AddOrderNoToTasks < ActiveRecord::Migration[5.0]
  def change
    add_column :tasks, :order_no, :integer
  end
end
