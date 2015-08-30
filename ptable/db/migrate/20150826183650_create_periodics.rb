class CreatePeriodics < ActiveRecord::Migration
  def change
    create_table :periodics do |t|
      t.string :element
      t.integer :atomicnumber
      t.float :atomicmass
      t.string :symbol

      t.timestamps null: false
    end
  end
end
