class ChangeBodyFromProjects < ActiveRecord::Migration
  def up
    change_column(:projects, :body, :text)
  end

  def down
    change_column(:projects, :body, :string)
  end
end
