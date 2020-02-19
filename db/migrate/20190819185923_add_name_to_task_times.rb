class AddNameToTaskTimes < ActiveRecord::Migration[5.2]
  def change
    add_column :task_times, :name, :string
  end
end
