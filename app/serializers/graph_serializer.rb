class GraphSerializer < ActiveModel::Serializer
  attributes :id, :title, :principal, :monthly_contribution, :annual_interest_rate, :investment_period, :data_points
end
