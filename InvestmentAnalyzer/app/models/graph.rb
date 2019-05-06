class Graph < ApplicationRecord
  has_many :data_points

  def create_data
    @period = self.investment_period
    @principal = self.principal
    @total = @principal
    @id = self.id

    @principal_multiplier = get_one_plus_r_over_n_to_nt(self)
    @future_value = get_future_value(self)
    @year = 0
    while @year < @period do
      create_data_point(@id, @year, @total)
      @year += 1
      @principal_interest = @total*@principal_multiplier
      @total = @principal_interest + @future_value
    end

  end

  def get_future_value(data)
    pmt = data.monthly_contribution
    r = (data.annual_interest_rate)/100.0
    n = data.compound_period
    t = 1.0
    oneplusrovern = r/n + 1.0
    nt = n*t
    rovern = r/n
    future_value = (pmt*(((oneplusrovern)**(nt) - 1.0)/(rovern)))
    future_value
  end

  def get_one_plus_r_over_n_to_nt(data)
    r = (data.annual_interest_rate)/100.0
    n = data.compound_period
    t = 1.0
    oneplusrovern = r/n + 1.0
    nt = n*t
    principal_multiplier = oneplusrovern**nt
    return principal_multiplier
  end

  def create_data_point(graph_id, year, amount)
    data_point = DataPoint.new()
    data_point.graph_id = graph_id
    data_point.year = year
    data_point.amount = amount
    byebug
    data_point.save
  end


end
