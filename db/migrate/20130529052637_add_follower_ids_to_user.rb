class AddFollowerIdsToUser < ActiveRecord::Migration
  def change
    add_column :users, :follower_ids, :string
  end
end
