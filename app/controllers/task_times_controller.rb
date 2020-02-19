class TaskTimesController < ApplicationController
    def index 
        #@currentUser = current_user
        #binding.pry
        @task = Task.find(params[:task_id])
        @task_times = @task.task_times
        
        render :json => {:data => @task_times.order(created_at: :asc).as_json(:include => [:task, :user]), :message => 'Task Times Retrieved'}
    end

    def create 
        @currentUser = current_user

        @task = Task.find(params[:taskId])

        @task_time = TaskTime.new(task_time_params)

        @task_time.user = @currentUser

        @task.task_times << @task_time
        
        if @task.save
            render :json => {:data => @task.task_times.last.as_json(:include => [:task, :user]), :message => 'Task Time / Sub Task Created!'}
        else 
            render :json => { :errors => @task.errors.full_messages }, status: :internal_server_error
        end
    end

    def update
        @task_time = TaskTime.find(params[:id]);
        @task_time.update(task_time_params);
        if @task_time.update(task_time_params);
            render :json => {:data => @item.as_json, :message => 'Task Time Updated!'}
        else 
            render :json => { :errors => @item.errors.full_messages }, status: :internal_server_error
        end
    end

    def delete 
        @task_time = TaskTime.find(params[:id]);
    end

    private

    def task_time_params
        params.require(:task_time).permit(:name, :time_started, :date_completed, :task_id)
    end
end