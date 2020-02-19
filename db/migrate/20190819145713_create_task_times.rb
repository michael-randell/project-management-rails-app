class CreateTaskTimes < ActiveRecord::Migration[5.2]
  def change
    create_table :task_times do |t|
      t.datetime :date_completed
      t.datetime :time_started
      t.integer :task_id
      t.integer :user_id
      t.timestamps
    end
  end
end
