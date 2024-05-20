class CreateComments < ActiveRecord::Migration[7.1]
  def change
    create_table :comments do |t|
      t.string :author
      t.string :content
      t.references :article, foreign_key: true

      t.timestamps
    end
  end
end
