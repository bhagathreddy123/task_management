FactoryBot.define do
  factory :user do
    first_name { "MyString" }
    last_name { "MyString" }
    password_digest { "MyString" }
    email { "MyString" }
  end
end
