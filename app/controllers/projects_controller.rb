class ProjectsController < ApplicationController
    def index 
        @projects = Project.all
        render :json => {:data => @projects.as_json(:include => [:customer]), :message => 'Projects Retrieved'}
    end

    def create 
        @project = Project.new(project_params)
        if @project.save
            render :json => {:data => @project.as_json(:include => [:customer]), :message => 'Project Created!'}
        else 
            render :json => { :errors => @project.errors.full_messages }, status: :internal_server_error
        end
    end

    private
    def project_params
        params.require(:project).permit(:name, :customer_id)
    end
end
