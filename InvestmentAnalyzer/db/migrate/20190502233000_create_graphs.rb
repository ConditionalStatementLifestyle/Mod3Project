class CreateGraphs < ActiveRecord::Migration[5.2]
  def change
    create_table :graphs do |t|
      t.string :title
      t.float :principal
      t.float :monthly_contribution
      t.float :annual_interest_rate
      t.integer :investment_period
      t.integer :compound_period

      t.timestamps
    end
  end
end
