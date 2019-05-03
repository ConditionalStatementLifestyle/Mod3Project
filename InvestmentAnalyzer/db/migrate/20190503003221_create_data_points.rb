class CreateDataPoints < ActiveRecord::Migration[5.2]
  def change
    create_table :data_points do |t|
      t.string :graph_id
      t.integer :year
      t.integer :month
      t.float :total

      t.timestamps
    end
  end
end
