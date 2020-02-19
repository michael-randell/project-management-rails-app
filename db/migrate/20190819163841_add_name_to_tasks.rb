class AddNameToTasks < ActiveRecord::Migration[5.2]
  def change
    add_column :task, :name, :string
  end
end
