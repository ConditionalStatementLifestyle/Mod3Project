class AddAmountToDataPoints < ActiveRecord::Migration[5.2]
  def change
    add_column :data_points, :amount, :float
  end
end
