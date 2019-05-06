
ActiveRecord::Schema.define(version: 2019_05_06_201903) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "data_points", force: :cascade do |t|
    t.string "graph_id"
    t.string "year"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.float "amount"
  end

  create_table "graphs", force: :cascade do |t|
    t.string "title"
    t.float "principal"
    t.float "monthly_contribution"
    t.float "annual_interest_rate"
    t.integer "investment_period"
    t.integer "compound_period"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
