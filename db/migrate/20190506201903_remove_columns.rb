class RemoveColumns < ActiveRecord::Migration[5.2]
  def change
    remove_column :data_points, :month
  end
end
