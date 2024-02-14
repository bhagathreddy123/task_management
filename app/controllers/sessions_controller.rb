class SessionsController < ApplicationController
  def new
    if current_user
      redirect_to root_path
    end
  end

  def create
    user = User.find_by(email: params[:email].downcase)
    if user && user.authenticate(params[:password])
      cookies.signed[:user_id] = user.id
      flash[:notice] = "Sign in sucessfully"
      redirect_to root_path
    else
      flash.now[:alert] = "Sign in errors"
      render :new
    end  
  end
 
  def destroy
    cookies.delete :user_id
    redirect_to root_path
  end
end
