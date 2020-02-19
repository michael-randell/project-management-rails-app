class TasksController < ApplicationController
    def index 
        @tasks = Task.all 
        render :json => {:data => @tasks.as_json(:include => [:project]), :message => 'Tasks Retrieved'}
    end

    def create
        @task = Task.new(task_params)
        if @task.save
            render :json => {:data => @task.as_json(:include => [:project]), :message => 'Task Created!'}
        else 
            render :json => { :errors => @task.errors.full_messages }, status: :internal_server_error
        end
    end

    private
    def task_params
        params.require(:task).permit(:name, :description, :project_id);
    end
end
