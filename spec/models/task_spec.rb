require 'rails_helper'

RSpec.describe Task, type: :model do
  context "when creating a Task" do
    let(:task) { build :task} 
    it 'should be valid task with title attribute' do
      expect(task.valid?).to eq(true)
    end
  end
end
