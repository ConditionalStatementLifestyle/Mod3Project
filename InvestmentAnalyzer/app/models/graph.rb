class Graph < ApplicationRecord
  has_many :data_points

  def createData
    @period = self.investment_period
    @principal = self.principal

    @future_value = get_future_value(self)
    byebug
    # @period.times do {
    #   calculateFuture
    #   @total =
    # }

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


end
