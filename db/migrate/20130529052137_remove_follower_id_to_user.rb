class RemoveFollowerIdToUser < ActiveRecord::Migration
  def up
    remove_column :users, :follower_id
  end

  def down
    add_column :users, :follower_id, :integer
  end
end
