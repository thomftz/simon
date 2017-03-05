class CreateScores < ActiveRecord::Migration[5.0]
  def change
    create_table :scores do |t|
      t.integer :points
      t.string :rank
      t.references :user, index: true, foreign_key: {on_delete: :cascade}

      t.timestamps
    end
  end
end
