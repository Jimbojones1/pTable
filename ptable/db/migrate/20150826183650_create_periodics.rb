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

INSERT INTO periodics (element, atomicnumber, atomicmass, symbol, created_at, updated_at) VALUES ('Hydrogen', 1, 1.008, 'H', '2015-08-27T16:20:21.498Z', '2015-08-27T16:20:21.498Z');
INSERT INTO periodics (element, atomicnumber, atomicmass, symbol, created_at, updated_at) VALUES ('Helium', 2, 4.008, 'He', '2015-08-27T16:20:21.498Z', '2015-08-27T16:20:21.498Z');
INSERT INTO periodics (elements, atomicnumber, atomicmass, symbol) VALUES ('Nitrogen', 7, 14.01, 'N');
INSERT INTO periodics (elements, atomicnumber, atomicmass, symbol) VALUES ('Hydrogen', 1, 1.008, 'H');
