class Task < ApplicationRecord
    belongs_to :project
    has_many :task_times
    has_many :users, through: :task_times
end
