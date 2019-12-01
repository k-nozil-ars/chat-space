FactoryBot.define do
  factory :message do
    content {Faker::Lorem.sentence}
    image {File.open("#{Rails.root}/public/images/Arsenal_logo_crest_logotype.png")}
    user
    group
  end
end