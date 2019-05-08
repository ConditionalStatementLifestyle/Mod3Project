class Api::V1::GraphsController < ApplicationController

  def index
    @graphs = Graph.all
   render json: @graphs
  end

  def show
    @graph = Graph.find(params[:id])
    render json: @graph
  end

  def create
    @graph = Graph.new(graph_params)
    @graph.save
    @graph.create_data
    render json: @graph
  end

  def update
    @graph = Graph.find(params[:id])
    @graph.update(graph_params)
    @graph.remove_old_data_points
    @graph = Graph.find(params[:id])
    @graph.create_data
    render json: @graph
  end

  private

  def graph_params
    params.require(:graph).permit(:title, :principal, :monthly_contribution, :annual_interest_rate, :investment_period, :compound_period)
  end

end
