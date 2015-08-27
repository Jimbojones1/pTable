# to create an API KEY
# Rake db:migrate to create the new api_keys table

class ApiKey < ActiveRecord::Base
  # generates a random access token string each time ar record is created
  before_create :generate_access_token

  validates :access_token, uniqueness: true

  private

  def generate_access_token
    begin
      self.access_token = SecureRandom.hex
      # this is creating a new token everytime
    end while self.class.exists?(access_token: access_token)
  end
end
