class User < ApplicationRecord
  validates :first_name, :last_name, :email,  presence: true
  validates :email,uniqueness: { case_sensitive: false },
  format: {
  	with: /\A[A-Z0-9#-_~!$&'()*+,;=:.]+@[A-Z0-9.-]+\.[A-Z]{2,4}\z/i
  }
  has_secure_password	
  has_many :tasks, dependent: :destroy
end
