require 'machinist/active_record'

User.blueprint do
  first_name { Faker::Name.first_name }
  last_name { Faker::Name.last_name }
  image_url { '/uploads/chwong.jpg'}
  bio { Faker::Company.catch_phrase }
  mission { Faker::Company.bs }
  email {Faker::Internet.email }
  password { 'password' }
  password_confirmation { 'password'}
end

Follow.blueprint do
  follower { User.make! }
end

Skill.blueprint do
  name { Faker::Lorem.words(1).first }
end

Project.blueprint do
  title { Faker::Lorem.words(rand(4) + 1).join(" ") }
  url { "http://#{Faker::Internet.domain_name}" }
  body { Faker::Lorem.words(50).join(" ") }
end