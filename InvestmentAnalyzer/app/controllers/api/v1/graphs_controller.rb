class Api::V1::GraphsController < ApplicationController

  def index
    @graphs = Graph.all
   render json: @graphs
  end

end
