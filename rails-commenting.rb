# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
# This is the controller which handles requests and retrieves the data from the model. It is where all the logic lives and connects the data from the model and tells the view what to display 
class BlogPostsController < ApplicationController
  def index
    # ---2)
    # This method will display all the blog posts that are in the database. Index method represents the R in CRUD
    @posts = BlogPost.all
  end

  # ---3)
  # This method will show a specific blog post depending on the primary id that is passed. The show method represents the R in CRUD, but for only 1 instance.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  # This method will return a HTML form for the user. The new method is a mid-way point C & R in CRUD 
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)
    # This method will create a new blog post - the code execution is to check if the blog post created was valid aka has no issues with missing parts for example, and if it is good to go, it will redirect to the post. If not, it will redirect back to creating a blog post. This represents the C in CRUD and is the convention to add information to the database 
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6)
    # this method is like a template to edit/update a blog post at a certain primary key. it allows you to locate the blog post by its unique key so that you can then make an update when you call to the update method later on 
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    # this method allows for a blog post at a specific primary key to be updated. This method is similar to create in the way that it will check to see if the update is meeting the valid condition, if so it will post the edit, if not it will redirect the user to the edit post page to redo the action. This represents the U in CRUD. 
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8)
      # this section of the method is for when you'd like to delete a blog post. In case the computer is able to delete the blog post, it will bring you back to all blog posts. However, in case there is an issue of locating the exact blog post you want to delete, it will redirect you back to the html form to find the post you are looking for. this is the D is CRUD 
      redirect_to blog_post_path(@post)
    end
  end

  # ---9)
  # a private method is one that is hidden and cannot be accessed by others as it restricts the scope of where a method can be called. This code can only live in this class definition and cannot be called anywhere else in the program
  private
  def blog_post_params
    # ---10)
    # these are the strong parameters - in this method, the parameters will require the blog post object to be formatted into a hash 
    params.require(:blog_post).permit(:title, :content)
  end
end
